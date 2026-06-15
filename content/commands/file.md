---
name: file
summary: Identify a file's type from its contents.
category: Files
tags: file, type, inspect, mime
popular: true
---

## Additional Notes

`file` guesses what a file is by inspecting its contents, metadata, and magic numbers. This is often more reliable than trusting the filename extension.

Use `file` when investigating unknown downloads, scripts, binaries, archives, images, device files, or data produced by another program.

## Syntax

```bash
file [options] file...
```

## Parameters

- `file`: Path to inspect.
- `options`: Output, symlink, MIME, and special-file handling flags.

## Common Options

- `-b`: Brief output. Do not print the filename before the result.
- `-i`: Show MIME type information.
- `--mime-type`: Print only the MIME type.
- `--mime-encoding`: Print only the MIME encoding.
- `-L`: Follow symbolic links.
- `-s`: Read block or character special files.
- `-z`: Try to inspect compressed files.
- `-k`: Keep going after the first match when possible.

## Examples

```bash
file image.png
```

Identify a file by content.

```bash
file -i archive.tar.gz
```

Show MIME-style output.

```bash
file --mime-type script.sh
```

Print only the MIME type.

```bash
file -L symlink
```

Inspect the target of a symbolic link.

```bash
find . -type f -maxdepth 1 -exec file {} +
```

Identify multiple files in a directory.

## Practical Notes

- `file` is a guess, not a security guarantee.
- Extensions can lie; content signatures are usually better.
- Use `file -i` when scripts or web servers need MIME-type information.
