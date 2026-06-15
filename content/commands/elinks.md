---
name: elinks
summary: Full-featured text-mode web browser.
category: Network
tags: web, browser, text, terminal, html
popular: false
---

## Additional Notes

`elinks` is a feature-rich text-mode web browser for the terminal. It renders HTML pages as formatted text, supports tabs, frames, tables, cookies, SSL, and scripting. It can display images in terminal emulators that support image protocols, or alias them with text labels.

It is useful for browsing the web over SSH sessions, on systems without a graphical environment, or for automated page fetching in scripts. `elinks` supports multiple protocols including HTTP, HTTPS, FTP, and local files. It also includes a built-in bookmarks manager and download manager.

## Syntax

```bash
elinks [options] [url]
```

## Parameters

- `url`: URL to open. If omitted, `elinks` opens to the configured start page or a blank page.

## Common Options

- `--dump`: Render the page as plain text to stdout and exit. Useful for scripting.
- `-source`: Print the raw HTML source of the page.
- `-no-numbering`: With `--dump`, do not prefix links with numbers.
- `-no-references`: With `--dump`, do not show link references.
- `-anonymous`: Restrict to anonymous mode (disable cookies, scripts, etc.).
- `-config-dir dir`: Use an alternate configuration directory.
- `-default-mime-type type`: Set the default MIME type for unknown files.
- `-remote command`: Send commands to a running `elinks` instance.
- `-session-restore`: Restore the previous session's tabs.
- `-touch-files`: Enable file touch for expiry checking.

## Examples

```bash
elinks https://example.com
```

Open a URL in interactive mode.

```bash
elinks --dump https://example.com
```

Render the page as plain text and print it to the terminal.

```bash
elinks -source https://example.com
```

Print the HTML source of a page.

```bash
elinks --dump -no-numbering -no-references https://example.com
```

Dump page text without link numbers or references, ideal for clean text extraction.

## Practical Notes

- `elinks` is a fork of the older `links` browser with more features. The original `links` is still maintained as a simpler alternative.
- Navigation uses the arrow keys, Tab, and Enter. `Esc` opens the menu system.
- Use `elinks --dump` to fetch and format web pages for display in other tools (e.g., `elinks --dump https://news.ycombinator.com | head`).
- For lightweight scripting, `curl` or `wget` are better for file downloads; `elinks` excels at rendering.
- Configuration files are stored in `~/.elinks/`.
