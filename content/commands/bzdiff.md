---
name: bzdiff
summary: Diff bzip2-compressed files without manual decompression.
category: Archives
tags: bzip2, diff, compare, compressed
popular: false
---

## Additional Notes

`bzdiff` compares bzip2-compressed files and shows line-oriented differences. It avoids a manual decompress-then-diff workflow.

Use it for compressed logs, reports, configuration snapshots, or text archives.

## Syntax

```bash
bzdiff [diff-options] file1.bz2 file2.bz2
```

## Parameters

- `file1.bz2`: First compressed file.
- `file2.bz2`: Second compressed file.
- `diff-options`: Options passed to `diff` when supported.

## Examples

```bash
bzdiff old.conf.bz2 new.conf.bz2
```

Show line differences between compressed files.

```bash
bzdiff -u old.log.bz2 new.log.bz2
```

Show unified diff output.

```bash
bzdiff backup-1.txt.bz2 backup-2.txt.bz2 | less
```

Page through a longer diff.

## Practical Notes

- `bzdiff` is for decompressed text comparison.
- Use `bzcmp` when you only need compare-style status.
- Very large compressed files can still take time because they must be decompressed for comparison.
