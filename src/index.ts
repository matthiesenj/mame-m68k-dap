import * as vscode from "vscode";
import { DebugProtocol } from "@vscode/debugprotocol";
import { UAEDebugSessionVsc } from "./debugSessionVsc";

export async function activate(
  context: vscode.ExtensionContext
): Promise<void> {
  const disassembledMemoryDataProvider = new DisassembledMemoryDataProvider();
  vscode.window.registerTreeDataProvider(
    "disassembledMemory",
    disassembledMemoryDataProvider
  );

  vscode.commands.registerCommand(
    "disassembledMemory.setDisassembledMemory",
    (memory: DebugProtocol.DisassembledInstruction[]) =>
      disassembledMemoryDataProvider.setDisassembledMemory(memory)
  );

  context.subscriptions.push(
    vscode.debug.registerDebugAdapterDescriptorFactory(
      "mame-m68k-debugger",
      new InlineDebugAdapterFactory()
    )
  );
}

class InlineDebugAdapterFactory
  implements vscode.DebugAdapterDescriptorFactory
{
  createDebugAdapterDescriptor(
    _session: vscode.DebugSession
  ): vscode.ProviderResult<vscode.DebugAdapterDescriptor> {
    // since DebugAdapterInlineImplementation is proposed API, a cast to <any> is required for now
    return new (vscode as any).DebugAdapterInlineImplementation(
      new UAEDebugSessionVsc()
    );
  }
}

export class DisassembledMemoryDataProvider
  implements vscode.TreeDataProvider<ViewLineItem>
{
  private _onDidChangeTreeData: vscode.EventEmitter<ViewLineItem | undefined> =
    new vscode.EventEmitter<ViewLineItem | undefined>();
  readonly onDidChangeTreeData: vscode.Event<ViewLineItem | undefined> =
    this._onDidChangeTreeData.event;
  private currentValues?: Array<ViewLineItem>;

  refresh(): void {
    this._onDidChangeTreeData.fire(undefined);
  }

  getTreeItem(element: ViewLineItem): vscode.TreeItem {
    return element;
  }

  async getChildren(element?: ViewLineItem): Promise<ViewLineItem[]> {
    if (!element && this.currentValues) {
      return this.currentValues;
    } else {
      return [];
    }
  }
  setDisassembledMemory(memory: DebugProtocol.DisassembledInstruction[]): void {
    this.currentValues = new Array<ViewLineItem>();
    for (const dl of memory) {
      const item = new ViewLineItem(`${dl.address}: ${dl.instruction}`);
      if (dl.instructionBytes) {
        item.description = dl.instructionBytes;
      }
      this.currentValues.push(item);
    }
    this.refresh();
  }
}

export class ViewLineItem extends vscode.TreeItem {
  public description = "";

  constructor(label: string) {
    super(label, vscode.TreeItemCollapsibleState.None);
  }

  getDescription(): string {
    return this.description;
  }
}
