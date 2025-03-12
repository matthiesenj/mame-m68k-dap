import * as vscode from "vscode";
import { UAEDebugSession } from "./debugSession";

export class UAEDebugSessionVsc extends UAEDebugSession {
  protected currentMemoryViewPc = -1;

  protected async onCpuFrame(address: number): Promise<void> {
    super.onCpuFrame(address);
    if (address !== this.currentMemoryViewPc) {
      this.currentMemoryViewPc = address;
      const dLines = await this.disassemblyManager().disassemble({
        memoryReference: address.toString(),
        instructionCount: 25,
      });
      await vscode.commands.executeCommand(
        "disassembledMemory.setDisassembledMemory",
        dLines
      );
    }
  }
}
