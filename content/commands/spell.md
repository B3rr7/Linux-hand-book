---
name: spell
summary: Check text for spelling errors.
category: Text
tags: spell, spelling, text, dictionary
popular: false
---

## Additional Notes

`spell` is a spell-checking program that reads text from standard input and outputs words that are not found in the system dictionary. It is a legacy Unix command that has been largely replaced by more modern spelling tools like `aspell` and `hunspell`.

The command applies a set of rules including dictionary lookup, morphological analysis, and suffix/prefix stripping. Words not recognized by any of these methods are printed one per line on standard output. On many modern Linux distributions, `spell` is a compatibility wrapper around `aspell` or `hunspell`.

## Syntax

```bash
spell [options] [file...]
```

## Parameters

- `file`: Text file(s) to spell-check. If omitted, reads from standard input.

## Common Options

- `-b`: Use British English dictionary instead of American English.
- `-l`: Show all misspelled words in a list (default behavior).
- `-i`: Ignore include files.
- `-n`: Show the line number of each misspelled word.
- `-v`: Show all words, including correctly spelled ones (verbose).
- `-x`: Show suggestions for misspelled words (if supported by backend).
- `-d dict`: Use an alternative dictionary file.

## Examples

```bash
spell document.txt
```

Check `document.txt` and output all misspelled words.

```bash
cat report.txt | spell
```

Check text piped from a file via standard input.

```bash
spell -b document.txt
```

Check spelling using British English dictionary.

```bash
spell -v document.txt
```

Show all words found in the document.

## Practical Notes

- `spell` is not installed by default on many modern distributions. Install `aspell` or `hunspell` as alternatives.
- The output is a list of potentially misspelled words, one per line.
- System dictionaries are typically located in `/usr/share/dict/` or `/var/lib/hunspell/`.
- Proper nouns, technical terms, and acronyms may appear as false positives.
- For interactive spell-checking, use `aspell check file` or a text editor with spell-check built in.
