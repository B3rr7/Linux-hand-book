---
name: diff
summary: Compare files line by line.
category: Text
tags: compare, files, patch, changes, merge
popular: true
---

## Additional Notes

`diff` compares files line by line and prints the differences. It supports several output formats: normal, context (`-c`), and unified (`-u`). Unified diffs are the most common because they are compact and can be applied with `patch`.

`diff` compares text. To compare directories recursively, add `-r`; to produce a reusable patch, use `-u` and redirect the output to a file.

## Syntax

```bash
diff [options] FILE1 FILE2
```

## Parameters

- `options`: Flags that change how `diff` behaves.
- `FILE1`, `FILE2`: The files (or directories, with `-r`) to compare.

## Common Options

- `-u`: Unified diff output (the standard patch format).
- `-c`: Context diff output with surrounding lines.
- `-r`: Compare directories recursively.
- `-q`: Report only whether files differ, not the details.
- `-y`: Side-by-side output.
- `-i`: Ignore case differences.
- `-w`: Ignore all whitespace.
- `-B`: Ignore blank lines.
- `--color`: Colorize output when supported.
- `--from-file=FILE`: Compare `FILE` against every following argument.

## Examples

```bash
diff old.txt new.txt
```

Show normal-format differences between two files.

```bash
diff -u old.txt new.txt
```

Show a unified diff with a few context lines.

```bash
diff -u old.txt new.txt > changes.patch
```

Save a unified diff as a patch file.

```bash
diff -qr dir-a dir-b
```

Recursively report which files differ between two directories without showing the content.

```bash
diff -y file1 file2
```

Show the two files side by side.

```bash
diff -uw script.sh script.new
```

Compare while ignoring whitespace differences.

## Applying a Patch

```bash
patch < changes.patch
```

Apply a unified diff created earlier with `diff -u`.

```bash
patch -R < changes.patch
```

Reverse an already-applied patch.

## Practical Notes

- Unified diffs from `diff -u` are readable and are what `git diff` produces.
- Use `-r` to diff whole directory trees; combine with `-q` for a quick "what changed" list.
- `patch` applies `diff -u` output; keep the original file name for `patch` to find it.
- Use `-w`/`-i` when you only care about real logic changes, not formatting.
