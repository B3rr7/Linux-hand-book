---
name: xlsatoms
summary: List interned atoms defined on the X server.
category: System
tags: x11, atom, intern, property, xserver
popular: false
---

## Additional Notes

`xlsatoms` lists the interned atoms stored on the X server. An atom is a unique numeric identifier that maps to a string name. Atoms are used internally by X11 applications and toolkits to identify properties, selections, protocols, and other named entities efficiently.

Atoms are fundamental to X11 inter-client communication. For example, the `WM_PROTOCOLS` atom identifies the window manager protocols a client supports. `xlsatoms` is mainly useful for debugging and understanding X11 internals.

## Syntax

```bash
xlsatoms [options]
```

## Parameters

- `options`: Flags that change how `xlsatoms` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-display display`: Specify the X display to query.
- `-format string`: Control the output format (`%s` for string, `%d` for number, `%#x` for hex).
- `-name string`: Display only the atom with the specified name.
- `-range [low]-[high]`: Display atoms in a numeric range.

## Examples

```bash
xlsatoms
```

List all interned atoms on the X server.

```bash
xlsatoms -name WM_PROTOCOLS
```

Show the numeric ID for the `WM_PROTOCOLS` atom.

```bash
xlsatoms -range 300-350
```

Show atoms with IDs in the range 300 to 350.

```bash
xlsatoms -format "Atom %d = %s\n"
```

Custom output format.

## Practical Notes

- Atom IDs vary between X server instances. The same string may have a different ID on different displays.
- Standard atoms are defined in the `X Atom` header files and the ICCCM specification.
- `xprop` is more commonly used to inspect window properties and their atoms.
- Atoms remain interned on the server until the X server resets.
- This tool is primarily useful for X11 application developers and debuggers.
