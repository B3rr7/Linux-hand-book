---
name: lynx
summary: Text-based web browser for the terminal.
category: Network
tags: web, browser, text, html, terminal
popular: false
---

## Additional Notes

`lynx` is a fully functional text-based web browser that renders HTML pages in the terminal. It displays web pages as formatted text, showing links as highlighted items that can be navigated with arrow keys or tab.

It is invaluable for browsing the web over slow connections, on systems without a graphical environment, for accessibility (screen readers), and for testing how web pages render without JavaScript or CSS. It also functions as a command-line HTML-to-text converter.

## Syntax

```bash
lynx [options] [url]
```

## Parameters

- `url`: The URL to open. If omitted, `lynx` may load a default start page or a blank page.

## Common Options

- `-dump`: Render the page as formatted text to stdout and exit. Useful for piping.
- `-stdin`: Read HTML from stdin and render it.
- `-source`: Print the raw HTML source of the page.
- `-accept_all_cookies`: Accept all cookies without prompting.
- `-anonymous`: Disable all user-specific files and settings.
- `-cache=N`: Set the cache size in kilobytes.
- `-cfg=file`: Use an alternative configuration file.
- `-nocolor`: Disable color output.
- `-nopause`: Do not pause after each page.
- `-scrollbar`: Show a scrollbar on the right side.
- `-vikeys`: Use vi-style key bindings.
- `-width=N`: Set the display width in characters (for `-dump`).

## Examples

```bash
lynx https://example.com
```

Open a URL in the interactive browser.

```bash
lynx -dump https://example.com
```

Render the page as plain text and print to stdout.

```bash
lynx -source https://example.com > page.html
```

Download the raw HTML source.

```bash
curl https://example.com | lynx -stdin -dump
```

Pipe HTML into lynx and render as text.

```bash
lynx -dump -nolist https://example.com
```

Render as text without showing link references.

## Navigation (Interactive Mode)

- Arrow keys or Tab/Shift+Tab: Move between links.
- Enter: Follow the selected link.
- `g`: Go to a URL.
- `b`: Go back to the previous page.
- `p`: Print or save the current page.
- `d`: Download the current link.
- `o`: Open options menu.
- `q`: Quit (with confirmation).
- `Q`: Quit immediately.
- `h`: Show help.
- `/`: Search within the page.

## Practical Notes

- Use `-dump` to extract readable text from HTML in scripts or pipelines.
- Lynx respects the `NO_COLOR` environment variable if set.
- Configuration is stored in `~/.lynxrc` or system-wide in `/etc/lynx/lynx.cfg`.
- Lynx does not support JavaScript, CSS, or modern web features; many sites will not work properly.

