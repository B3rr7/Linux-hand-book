---
name: tar
summary: Create, list, and extract tar archives.
category: Archives
tags: archive, compress, extract, backup, files
popular: true
---

## Additional Notes

`tar` groups files and directories into one archive file. It is commonly used for backups, source-code releases, Linux packages, and compressed archives such as `.tar.gz` or `.tar.xz`.

`tar` itself creates the archive. Compression is added with options such as `-z` for gzip, `-j` for bzip2, or `-J` for xz.

## Syntax

```bash
tar [options] archive.tar files...
tar [options] archive.tar
```

Traditional short options are often combined:

```bash
tar -czvf backup.tar.gz directory/
tar -xzvf backup.tar.gz
```

## Parameters

- `options`: Flags that change how `tar` behaves.
- `archive`: Archive or compressed file to read, create, or extract.
- `files`: Files or directories that should be included or processed.

## Core Actions

- `-c`, `--create`: Create an archive.
- `-x`, `--extract`: Extract an archive.
- `-t`, `--list`: List archive contents.
- `-f FILE`, `--file=FILE`: Use archive file. This is usually required.

## Compression Options

- `-z`, `--gzip`: Use gzip compression, common for `.tar.gz`.
- `-j`, `--bzip2`: Use bzip2 compression, common for `.tar.bz2`.
- `-J`, `--xz`: Use xz compression, common for `.tar.xz`.
- `--zstd`: Use zstd compression when supported.

## Other Useful Options

- `-v`, `--verbose`: Show files while processing.
- `-C DIR`: Change to directory before extracting or adding files.
- `--exclude=PATTERN`: Exclude matching files.
- `-p`, `--preserve-permissions`: Preserve permissions when extracting.
- `--numeric-owner`: Use numeric owner IDs instead of names.

## Examples

```bash
tar -cvf archive.tar project/
```

Create an uncompressed tar archive.

```bash
tar -czvf project.tar.gz project/
```

Create a gzip-compressed archive.

```bash
tar -tzf project.tar.gz
```

List archive contents without extracting.

```bash
tar -xzvf project.tar.gz
```

Extract a gzip-compressed archive.

```bash
tar -xzvf project.tar.gz -C /tmp
```

Extract into `/tmp`.

```bash
tar -czvf home-backup.tar.gz /home/rani --exclude="*.cache"
```

Create a backup while excluding cache files.

## Practical Notes

- The `f` option should be followed by the archive filename.
- Use `tar -tf archive.tar` before extracting unknown archives.
- Be careful extracting archives as root because owners and permissions may matter.
- Use `-C` to control where files are extracted.
- `.tar.gz`, `.tgz`, `.tar.bz2`, and `.tar.xz` are common tar archive formats.
