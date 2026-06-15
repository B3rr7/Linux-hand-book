---
name: rev
summary: Reverse characters in each line of a file.
category: Text
tags: text, reverse, columns, characters, string
popular: false
---

## Additional Notes

`rev` reverses the order of characters on each line of input. The last character becomes the first, the second-to-last becomes the second, and so on. It operates line-by-line and outputs each reversed line.

`rev` is a simple utility in the `util-linux` package. It is useful for specialized text processing tasks like reversing columns, creating palindromes, or solving certain data extraction problems where reversing lines simplifies the work.

## Syntax

```bash
rev [options] [file...]
```

## Parameters

- `file`: One or more files to process. If no file is given, `rev` reads from standard input.

## Common Options

- `-V`, `--version`: Show version information.
- `-h`, `--help`: Show help and exit.

## Examples

```bash
echo "hello" | rev
```

Reverse the word `hello` to `olleh`.

```bash
rev file.txt
```

Reverse every line in `file.txt`.

```bash
cat data.txt | rev
```

Reverse lines from standard input.

```bash
echo "123 456 789" | rev
```

Reverses to `987 654 321`.

```bash
cut -d: -f1 /etc/passwd | rev
```

Reverse each username in the password file.

```bash
echo "racecar" | rev
```

Palindrome test: If the output matches the input, the word is a palindrome.

```bash
rev file.txt | sort | rev
```

Sort lines by their reversed content (equivalent to sorting from right to left).

```bash
paste <(cut -f1 data.txt) <(cut -f2 data.txt | rev)
```

Reverse only the second column in a tab-separated file.

## Practical Notes

- `rev` is line-oriented. It does not reverse the order of lines, only the characters within each line.
- Use `tac` (reverse of `cat`) to reverse the order of lines themselves.
- For reversing fields (words), use `awk '{ for(i=NF; i>0; i--) printf "%s ", $i; printf "\n" }'`.
- `rev` preserves trailing newlines; blank lines remain blank.
- The command is simple but useful in one-liners and pipes where character-level reversal is needed.
- On some systems, `rev` is provided by the `bsdmainutils` or `util-linux` package.
