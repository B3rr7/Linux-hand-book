---
name: cmp
summary: Compare two files byte by byte.
category: Text
tags: compare, file, binary, diff
popular: false
---

## Additional Notes

`cmp` compares two files byte by byte and reports the first difference. It works for both text and binary files.

Use it when you need a quick answer to whether files are identical, or where the first byte-level difference occurs.

## Syntax

```bash
cmp [options] file1 file2 [skip1 [skip2]]
```

## Parameters

- `file1`: First file to compare.
- `file2`: Second file to compare.
- `skip1`: Optional number of bytes to skip in file1.
- `skip2`: Optional number of bytes to skip in file2.
- `options`: Output and byte-display controls.

## Common Options

- `-s`: Silent mode. Use exit status only.
- `-l`: Print byte numbers and differing byte values.
- `-b`: Print differing bytes.
- `-i SKIP`: Skip initial bytes. Some versions support `SKIP1:SKIP2`.
- `-n LIMIT`: Compare at most LIMIT bytes.

## Examples

```bash
cmp file1.bin file2.bin
```

Report the first byte difference.

```bash
cmp -s file1 file2 && echo same || echo different
```

Use exit status in a script.

```bash
cmp -l old.bin new.bin | head
```

Show byte-level differences.

```bash
cmp -n 512 boot-a.img boot-b.img
```

Compare only the first 512 bytes.

## Practical Notes

- Use `diff` for readable text differences.
- Use `sha256sum` when comparing files across systems or at different times.
- `cmp -s` is useful in scripts because it produces no normal output.
