# MAME m68k Debug Adapter Protocol

## This is a work in progress trying to transform Graham Bates' [uae-dap](https://github.com/grahambates/uae-dap) into a MAME debug adapter for Motorola 680xx targets.

No build tools are included with this extension, it only contains the debugging adapter for launching and attaching to the MAME emulator.

Also, given the large size of MAME, it isn't included either, so you should download [Mame](https://www.mamedev.org/) for your platform and reference it using the 'emulatorBin' property in a launch configuration.

The directory part of the `program` property will be used to set MAME's `-rompath` argument, so put the bios for the target system in the same directory, so MAME will pick it up along with your ROM.

### vlink

Debug symbols are fetched from a symbol file (generated during build) - this should be in [vlink](http://sun.hasenbraten.de/vlink/) symbol file format (`-M` argument). 

Note that a fairly ==recent build of vlink is required== for outputting correct symbol files!

How to compile/assemble, link, and otherwise manipulate the build output, for generating a MAME ROM, is beyond the scope of this document.

## Launch and attach properties

| Property | Description | Mandatory | Example |
|----------|-------------|-----------|---------|
| type | "mame-m68k-debugger" | yes | |
| request | "launch" or "attach" | yes | "launch" |
| name | &lt;some meaningful name&gt; | yes | "MAME debug" |
| noDebug | Launch without debugging | no (defaults to false) | |
| trace | Enable extra logging | no (defaults to false) | |
| stopOnEntry | Stop the target after attaching | no (defaults to false) | |
| emulatorBin | Path to MAME executable | yes^1^ | "C:\\Users\\JohnDoe\\Downloads\\mame0273b\mame.exe" |
| program | Path to rom folder/zip in build output | yes^1^ | "${workspaceFolder}/build/mslug2" |
| mappings | Path to vlink symbol file in build output | yes^2^ | "${workspaceFolder}/build/symbols.txt" |
| serverPort | Listen port of MAME gdb stub | yes^2^ | 2345 |
 
1. Only for launch configs, not needed for attaching only
2. Only for debug configs (`noDebug`: false)