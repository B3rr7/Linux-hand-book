---
name: base64
summary: Encode or decode Base64 data.
category: Text
tags: base64, encode, decode, text
popular: true
---

## Additional Notes

`base64` converts binary or text data to and from Base64. Base64 is commonly used when binary data must travel through text-only formats such as JSON, email, environment variables, or simple copy-paste workflows.

It is encoding, not encryption. Anyone can decode Base64.

## Syntax

```bash
base64 [options] [file]
base64 -d [file]
```

## Parameters

- `file`: Input file. If omitted, standard input is used.
- `options`: Decode, wrapping, and ignore-garbage controls.

## Common Options

- `-d`, `--decode`: Decode Base64 input.
- `-w COLS`, `--wrap=COLS`: Wrap encoded lines after COLS characters. Use `-w 0` for no wrapping on GNU systems.
- `-i`, `--ignore-garbage`: Ignore non-alphabet characters while decoding.

## Examples

```bash
echo -n "hello" | base64
```

Encode text without a trailing newline.

```bash
echo "aGVsbG8=" | base64 -d
```

Decode Base64 text.

```bash
base64 image.png > image.b64
```

Encode a binary file into text.

```bash
base64 -d image.b64 > image.png
```

Decode back to the original binary file.

## Practical Notes

- Use `echo -n` when the newline should not be part of encoded data.
- Base64 increases size by roughly one third.
- Do not treat Base64 as secret protection.
