---
name: zipinfo
summary: List detailed information about ZIP archives.
category: Files
tags: zip, archive, info, list, details
popular: false
---

## Additional Notes

`zipinfo` displays detailed information about the contents of ZIP archives. It shows file names, compression methods, sizes (stored/compressed), compression ratios, timestamps, CRC-32 checksums, and file attributes. It is more detailed than `unzip -l` and provides a columnar format that is easy to read or parse.

For each file in the archive, `zipinfo` shows the file permissions, whether it is a directory, the compression method used (stored, deflated, bzip2, etc.), and both the original and compressed sizes. The output can be customized with flags to show timestamps, comments, and encryption status.

## Syntax

```bash
zipinfo [options] archive[.zip] [file...]
```

## Parameters

- `archive`: Path to the ZIP file.
- `file`: Optional pattern to list only matching entries.

## Common Options

- `-1`: List only filenames, one per line.
- `-h`: Show header information (archive comment, total size, etc.).
- `-l`: Long format (default).
- `-m`: Show medium format.
- `-s`: Show short format.
- `-t`: Show totals only.
- `-T`: Show timestamps in sortable format.
- `-v`: Verbose/diagnostic mode.
- `-x pattern`: Exclude files matching the pattern.

## Examples

```bash
zipinfo archive.zip
```

List all files in the archive with detailed information.

```bash
zipinfo -1 archive.zip
```

List only filenames.

```bash
zipinfo -h archive.zip
```

Show header information and archive totals.

```bash
zipinfo -T archive.zip
```

Show timestamps in sortable (YYYYMMDD.HHMMSS) format.

```bash
zipinfo archive.zip "*.txt"
```

List only files matching the pattern `*.txt`.

```bash
zipinfo -t archive.zip
```

Show only the total count, sizes, and compression ratio.

## Practical Notes

- `zipinfo` is part of the `unzip` package and uses the same engine.
- The default columns show: file type/permissions, size, compressed size, ratio, date, time, CRC-32, and name.
- The compression method column shows: `s` (stored), `d` (deflated), `b` (bzip2), `r` (reduced), etc.
- For a simpler file list, use `unzip -l`.
- For more detailed extraction testing, use `unzip -t`.
