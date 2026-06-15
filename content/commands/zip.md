---
name: zip
summary: Package and compress files into a ZIP archive.
category: Archives
tags: zip, compress, archive, files
popular: true
---

## Additional Notes

`zip` creates ZIP archives, a format widely supported on Linux, macOS, Windows, phones, browsers, and many file managers. Unlike `gzip`, ZIP can store many files and directories in one archive.

Use `zip` when sharing files with mixed operating systems, packaging simple project folders, or creating archives that non-Linux users can open easily.

## Syntax

```bash
zip [options] archive.zip file...
zip [options] archive.zip directory...
```

## Parameters

- `archive.zip`: ZIP archive to create or update.
- `file`: File to add to the archive.
- `directory`: Directory to add, usually with `-r`.
- `options`: Flags for recursion, compression, exclusion, encryption, and updates.

## Common Options

- `-r`: Add directories recursively.
- `-q`: Quiet output.
- `-u`: Update changed or new files in an existing archive.
- `-d`: Delete entries from an archive.
- `-e`: Encrypt the archive with a password prompt.
- `-0`: Store only, no compression.
- `-9`: Best compression.
- `-x PATTERN`: Exclude matching files.

## Examples

```bash
zip notes.zip notes.txt
```

Create a ZIP archive containing one file.

```bash
zip -r site.zip site/
```

Archive a directory recursively.

```bash
zip -r project.zip project/ -x "*.git*" "node_modules/*"
```

Create an archive while excluding unwanted paths.

```bash
zip -u site.zip site/index.html
```

Update an existing archive entry.

```bash
zip -e private.zip notes.txt
```

Create an encrypted ZIP archive using an interactive password prompt.

## Practical Notes

- Use `unzip -l archive.zip` to inspect an archive before extracting it.
- Quote exclude patterns so the shell does not expand them too early.
- For Unix permissions, symlinks, and large backup workflows, `tar` may preserve system details better than ZIP.
