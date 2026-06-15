---
name: bzcmp
summary: Compare bzip2-compressed files without manual decompression.
category: Archives
tags: bzip2, compare, diff, compressed
popular: false
---

## Additional Notes

`bzcmp` compares bzip2-compressed files by decompressing them temporarily through comparison tools. It is useful when checking whether compressed text files contain the same data.

It is related to `bzdiff`; output style depends on the underlying comparison command.

## Syntax

```bash
bzcmp [cmp-options] file1.bz2 file2.bz2
```

## Parameters

- `file1.bz2`: First compressed file.
- `file2.bz2`: Second compressed file.
- `cmp-options`: Options passed to the comparison tool when supported.

## Examples

```bash
bzcmp old.log.bz2 new.log.bz2
```

Compare two compressed log files.

```bash
bzcmp backup1.txt.bz2 backup2.txt.bz2 && echo same
```

Use the exit status in a script.

## Practical Notes

- This is most useful for text-like or comparable file contents.
- For readable line differences, use `bzdiff`.
- The compressed bytes can differ even when decompressed content is the same; `bzcmp` compares decompressed content.
