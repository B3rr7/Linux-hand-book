---
name: iconv
summary: Convert text between character encodings.
category: Text
tags: text, encoding, unicode, convert
popular: false
---

## Additional Notes

`iconv` is a text-processing command used to convert text between character encodings. It is commonly used in data pipelines to normalize encodings before processing or storage.

The available encoding list depends on the installed iconv library on your system. Use `iconv -l` to list all supported encodings.

## Syntax

```bash
iconv [options] [file...]
```

## Parameters

- `options`: Flags that change how `iconv` behaves.
- `file`: Text file to read or process.

## Common Options

- `-f ENCODING`: Source encoding.
- `-t ENCODING`: Target encoding.
- `-o FILE`: Write output to a file.

## Examples

```bash
iconv -f ISO-8859-1 -t UTF-8 old.txt > new.txt
iconv -f UTF-16 -t UTF-8 input.txt -o output.txt
```

## Practical Notes

Use `file -i` to inspect likely text encoding before converting.
