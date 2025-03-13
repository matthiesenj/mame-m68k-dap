# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.0] - 2025-03-13

- port disassembly view from vscode-amiga-assembly
- no longer need separate extension and server when debugging extension

## [1.0.0] - 2025-02-22

- initial version
- based on https://github.com/grahambates/uae-dap version 1.1.5 by Graham Bates
- Amiga stuff removed
- adapt to MAME emulator
- adapt gdb client to work with MAME gdbstub debugger
- modify launch arguments to fit MAME
- uses vlink symbol file instead of Amiga hunk exe for symbols
- esbuild bundling
