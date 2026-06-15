---
name: lha
summary: Extract and create LZH/LHA compressed archives.
category: Files
tags: archive, compress, lzh, lha, extract
popular: false
---

## Additional Notes

`lha` is an archiver for the LZH (Lempel-Ziv-Huffman) compression format, which was historically common on MS-DOS, Amiga, and early Windows systems. It can create, extract, and list LZH archives.

While largely superseded by `zip`, `tar.gz`, and `7z` on modern systems, `lha` is still useful for extracting legacy archives from old BBS archives, shareware collections, and retrocomputing projects.

## Syntax

```bash
lha <command> [options] archive [file...]
```

## Parameters

- `command`: The operation to perform (see common commands below).
- `archive`: The LZH archive file to operate on.
- `file`: One or more files to extract or add.

## Common Commands

- `x`: Extract files from the archive, preserving directory structure.
- `e`: Extract files from the archive, ignoring directory structure.
- `l`: List the contents of the archive.
- `v`: Verbose listing with details (compression ratio, path, etc.).
- `t`: Test the integrity of the archive.
- `a`: Add files to the archive.
- `u`: Update files in the archive.
- `d`: Delete files from the archive.

## Common Options

- `-w dir`: Set the working directory for extraction.
- `-m`: Do not restore file modification times.
- `-q`: Quiet mode, suppress most messages.

## Examples

```bash
lha l archive.lzh
```

List the contents of `archive.lzh`.

```bash
lha x archive.lzh
```

Extract all files from `archive.lzh`, preserving paths.

```bash
lha e archive.lzh
```

Extract all files into the current directory, ignoring paths.

```bash
lha t archive.lzh
```

Test the archive for integrity.

```bash
lha a archive.lzh file.txt
```

Add `file.txt` to `archive.lzh`.

## Practical Notes

- Command letters are not preceded by a dash. The first argument is the command letter.
- Modern alternatives include `7z` (7-Zip), which can also extract LZH files.
- The LZH format is less efficient than modern compression and is rarely used for new archives.

