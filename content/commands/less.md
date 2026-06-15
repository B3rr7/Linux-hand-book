---
name: less
summary: View text files page by page with search and scrolling.
category: Text
tags: text, pager, view, search, scroll
popular: true
---

## Additional Notes

`less` is a pager for reading text. It opens file or command output in an interactive viewer where you can scroll, search, and quit without printing the whole file into the terminal.

Despite the name, `less` is more capable than `more`.

## Syntax

```bash
less [options] file...
command | less
```

## Parameters

- `options`: Flags that change how `less` behaves.
- `file`: Text file to read or process.

## Common Keys

- `q`: Quit.
- `Space`: Next page.
- `b`: Previous page.
- `Enter`: Move down one line.
- `/pattern`: Search forward.
- `?pattern`: Search backward.
- `n`: Next search match.
- `N`: Previous search match.
- `g`: Go to beginning.
- `G`: Go to end.
- `F`: Follow new data, similar to `tail -f`.

## Common Options

- `-N`: Show line numbers.
- `-S`: Chop long lines instead of wrapping.
- `-R`: Show raw ANSI colors.
- `+G`: Start at the end of the file.

## Examples

```bash
less /var/log/syslog
```

Open a log file.

```bash
less -N script.sh
```

View a file with line numbers.

```bash
grep -r "error" . | less
```

Read long command output in a pager.

```bash
less +G app.log
```

Open a file at the end.

## Practical Notes

- `less` does not edit files.
- Use search inside `less` instead of repeatedly running `grep` for simple reading.
- Press `h` inside `less` for help.
- Many commands use `less` automatically as their pager.
