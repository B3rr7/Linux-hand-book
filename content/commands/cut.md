---
name: cut
summary: Extract columns, fields, or character ranges from text.
category: Text
tags: text, columns, fields, delimiter, extract
popular: true
---

## Additional Notes

`cut` extracts parts of each input line. It is useful for simple column or delimiter-based text extraction.

For more complex field logic, use `awk`.

## Syntax

```bash
cut [options] [file...]
```

## Parameters

- `options`: Flags that change how `cut` behaves.
- `file`: Text file to read or process.

## Common Options

- `-d CHAR`: Set field delimiter.
- `-f LIST`: Select fields.
- `-c LIST`: Select character positions.
- `-b LIST`: Select byte positions.
- `--complement`: Select everything except the chosen fields or characters.
- `-s`: With `-f`, do not print lines without the delimiter.

## Field Lists

- `1`: Field 1.
- `1,3`: Fields 1 and 3.
- `1-3`: Fields 1 through 3.
- `2-`: Field 2 through the end.
- `-4`: Beginning through field 4.

## Examples

```bash
cut -d: -f1 /etc/passwd
```

Print usernames from `/etc/passwd`.

```bash
cut -d, -f1,3 data.csv
```

Print fields 1 and 3 from comma-separated data.

```bash
cut -c1-10 file.txt
```

Print the first 10 characters of each line.

```bash
echo "a:b:c" | cut -d: -f2
```

Print the second colon-separated field.

```bash
cut -d: -f1 --complement /etc/passwd
```

Print all fields except the first.

## Practical Notes

- `cut` works best with simple, consistent delimiters.
- The default field delimiter is a tab, not any whitespace.
- For repeated spaces or complex conditions, use `awk`.
- For real CSV with quoted commas, use a proper CSV parser.
