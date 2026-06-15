---
name: zipsplit
summary: Split a ZIP archive into smaller parts.
category: Files
tags: zip, split, archive, parts, span
popular: false
---

## Additional Notes

`zipsplit` splits a large ZIP archive into multiple smaller ZIP archives. Each split archive retains the `.zip` extension and can be individually decompressed with `unzip`. The split archives are designed to fit within a specified size limit, which is useful for fitting archives onto removable media (floppy disks, CDs) or for email attachment size limits.

The split archives are independent — each contains a subset of the original files. This is different from spanned/volume ZIP archives (created with `zip -s`) where all parts are needed to extract any file.

## Syntax

```bash
zipsplit [options] archive.zip [files...]
```

## Parameters

- `archive.zip`: The ZIP file to split.
- `files`: Optional patterns to include only specific files.

## Common Options

- `-n size`: Set the maximum size for each split archive (in bytes, or with `k`, `m`, `g` suffix).
- `-t`: Report how many splits would be created without actually splitting.
- `-p`: Pause between creating each split archive.
- `-b`: Generate split archives with monotonically increasing sizes.
- `-r`: Remove the original archive after successful splitting.
- `-s`: Be silent (no progress output).
- `-v`: Verbose output.
- `-x pattern`: Exclude files matching the pattern.

## Examples

```bash
zipsplit -n 1440k large.zip
```

Split `large.zip` into parts no larger than 1440 KB (standard floppy disk size).

```bash
zipsplit -t -n 10m large.zip
```

Test-split without actually creating files, using 10 MB per part.

```bash
zipsplit -n 5m -r large.zip
```

Split into 5 MB parts and remove the original archive.

## Practical Notes

- Each split file is a valid, independent ZIP archive that can be extracted with `unzip`.
- To create spanned ZIP archives that depend on each other, use `zip -s` instead.
- The split files are named like `large.z01`, `large.z02`, etc., or with custom prefixes.
- For modern use, consider simpler alternatives: compression tools that support splitting natively, or splitting after compression with `split`.
- The minimum split size is limited by the largest individual file in the archive (a file cannot be split across volumes).
