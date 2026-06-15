---
name: bzmore
summary: View bzip2-compressed text files page by page.
category: Archives
tags: bzip2, more, pager, text
popular: false
---

## Additional Notes

`bzmore` displays bzip2-compressed text one screen at a time. It is similar to `bzless`, but uses a simpler pager style.

Use it when `bzless` is not available or when a minimal pager is enough.

## Syntax

```bash
bzmore file.bz2...
```

## Parameters

- `file.bz2`: Compressed text file to view.

## Common Keys

- `Space`: Show the next page.
- `Enter`: Show the next line.
- `q`: Quit.

## Examples

```bash
bzmore changelog.txt.bz2
```

Page through compressed text.

```bash
bzmore *.txt.bz2
```

View several compressed files.

## Practical Notes

- `bzless` is usually more comfortable because it supports backward movement and richer search.
- `bzmore` does not permanently decompress the file.
- Use `bunzip2` if you need a normal uncompressed file.
