---
name: xlsfonts
summary: List fonts available to the X server.
category: System
tags: x11, fonts, list, xserver, typography
popular: false
---

## Additional Notes

`xlsfonts` queries the X server for all available fonts and displays their XLFD (X Logical Font Description) names. XLFD names contain fields for foundry, family, weight, slant, point size, resolution, spacing, and character set.

The font system in X11 is legacy; modern Linux desktops use fontconfig and FreeType instead of the X11 core font system. However, some older applications still rely on X11 fonts, and `xlsfonts` remains useful for checking font availability in those environments.

## Syntax

```bash
xlsfonts [options] [pattern]
```

## Parameters

- `pattern`: A wildcard pattern to filter fonts (e.g. `-*-courier-*-*-*-*-*-*-*-*-*-*-*-*`).

## Common Options

- `-l`: Long format (show per-field XLFD details).
- `-ll`: Very long format (includes character class information).
- `-lll`: Extremely long format (full font details).
- `-C`: List fonts in columns (default).
- `-1`: List one font per line.
- `-m`: Use a compact output format.
- `-o`: Use single-column output.
- `-fn pattern`: Specify a font name pattern directly.
- `-display display`: Query a specific X display.

## Examples

```bash
xlsfonts
```

List all available fonts.

```bash
xlsfonts -fn "*-courier-*"
```

List only Courier family fonts.

```bash
xlsfonts -l -fn "*-fixed-*"
```

Show detailed XLFD for fixed-width fonts.

```bash
xlsfonts -ll -fn "*-*-*-*-*-*-*-*-*-*-*-*-*-*"
```

Show very long format for all fonts.

## Practical Notes

- The XLFD format is: `-foundry-family-weight-slant-width-style-pixels-points-xres-yres-spacing-average-charset`.
- Fonts listed by `xlsfonts` are the core X11 server-side fonts, not fontconfig managed fonts.
- Modern applications should use `fc-list` to query fontconfig fonts.
- To see which fonts a specific X11 application is using, use `xfontsel` interactively.
- The number of available fonts depends on installed packages (e.g. `x11-fonts*`).
