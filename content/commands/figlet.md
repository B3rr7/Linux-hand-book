---
name: figlet
summary: Display large text banners using ASCII art fonts.
category: Shell
tags: text, ascii, art, banner, font
popular: false
---

## Additional Notes

`figlet` takes input text and renders it as large characters made from ASCII characters using various font files. The name stands for "Frank, Ian and Glenn's Letters." It is commonly used to create banners for terminal welcome messages, README headers, MOTD displays, and code comments.

Figlet fonts define each letter as a grid of characters. The program ships with several built-in fonts and many more are available online. Each font produces a different visual style, from simple block letters to ornate calligraphic designs.

## Syntax

```bash
figlet [options] [text...]
```

## Parameters

- `text`: The text to render. If not provided, `figlet` reads from standard input.

## Common Options

- `-f font`, `--font font`: Select a font file (without the `.flf` extension).
- `-d dir`, `--font-directory dir`: Specify a directory containing font files.
- `-w width`, `--width width`: Set the output width for the banner (default is 80 columns).
- `-c`, `--center`: Center the banner within the output width.
- `-l`, `--left`: Left-align the banner (default).
- `-r`, `--right`: Right-align the banner.
- `-t`, `--terminal-width`: Use the terminal width instead of the default 80.
- `-k`, `--kerning`: Apply kerning between characters (font-dependent).
- `-s`, `--smush`: Apply smushing (character overlapping) when available.
- `-S`, `--smush-on`: Same as `-s` but also smushes normally unsmushable pairs.
- `-p`, `--paragraph`: Treat the input as paragraphs and break lines at word boundaries.
- `-x`, `--no-font-limit`: Allow fonts larger than the default size limit.
- `-L`, `--list`: List all available fonts.
- `-I n`, `--info n`: Print font information. `n` selects the info type.
- `-v`, `--version`: Show version information.

## Examples

```bash
figlet "Hello World"
```

Render "Hello World" using the default font.

```bash
figlet -f slant "Linux"
```

Render "Linux" using the `slant` font.

```bash
figlet -c -w 60 "Welcome"
```

Center the text in a 60-column width.

```bash
figlet -f big "NOTE"
```

Render "NOTE" in the large `big` font.

```bash
figlet -f banner -t "Important"
```

Use the `banner` font and auto-detect terminal width.

```bash
echo "Script output" | figlet -f digital
```

Pipe text into `figlet` using the `digital` font.

```bash
figlet -L
```

List every available font file.

## Practical Notes

- Figlet font files have the `.flf` extension and are stored in `/usr/share/figlet/` or `/usr/local/share/figlet/`.
- Common fonts include `standard`, `slant`, `big`, `banner`, `digital`, `block`, `script`, and `shadow`.
- For right-to-left text, use the `-R` option.
- The `toilet` command is a related tool that supports color output.
- `figlet` is often used in shell scripts that generate colorful or stylized MOTD messages.
