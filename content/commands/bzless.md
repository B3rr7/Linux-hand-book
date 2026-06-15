---
name: bzless
summary: View bzip2-compressed text files one screen at a time.
category: Archives
tags: bzip2, less, pager, text
popular: false
---

## Additional Notes

`bzless` opens bzip2-compressed text through a pager, usually `less`, without manually decompressing the file first.

Use it for compressed logs, documentation, reports, or text archives.

## Syntax

```bash
bzless file.bz2...
```

## Parameters

- `file.bz2`: Compressed text file to view.
- `options`: Pager options may be accepted depending on the wrapper.

## Common Keys

- `Space`: Move forward one screen.
- `b`: Move backward one screen.
- `/pattern`: Search forward.
- `n`: Repeat search.
- `q`: Quit.

## Examples

```bash
bzless access.log.bz2
```

View a compressed log.

```bash
bzless README.bz2
```

Read compressed text documentation.

## Practical Notes

- `bzless` is for text. Binary output may be unreadable.
- Use `bzgrep` when you only need matching lines.
- Use `bzcat file.bz2 | less` as a fallback.
