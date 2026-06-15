---
name: ispell
summary: Interactive spelling checker for text files.
category: Text
tags: spell, check, dictionary, text, language
popular: false
---

## Additional Notes

`ispell` is an interactive spell-checking program that scans text files for misspelled words and suggests corrections. It displays suspect words in context and provides a menu of possible corrections, allowing the user to accept, replace, or add words to a personal dictionary.

It supports multiple languages (through dictionary files), handles word boundary detection, and can check specific sections of a file. While largely superseded by `aspell` and `hunspell` on modern systems, `ispell` remains available and useful for checking plain text files, email, and documentation.

## Syntax

```bash
ispell [options] [file...]
```

## Parameters

- `file`: Text file to check. If no file is given, checks standard input.

## Common Options

- `-a`: Pipe mode (used by mailers and text editors for background checking).
- `-b`: Create a backup of the original file with a `.bak` extension.
- `-d file`: Use an alternate dictionary file.
- `-l`: List misspelled words (one per line) without interactive mode.
- `-p file`: Specify a personal word list file.
- `-t`: Treat the input as TeX or LaTeX (skip TeX commands).
- `-n`: Treat the input as nroff/troff (skip formatting commands).
- `-H`: Treat the input as HTML/SGML (skip tags).
- `-x`: Do not create a backup file.
- `-S`: Sort the output of `-l` before printing.
- `-w chars`: Additional word-forming characters.
- `-W n`: Specify the maximum word length for checking reports.
- `-T type`: Assume terminal type `type` for display formatting.

## Interactive Commands

- `R`: Replace the word with a manually typed correction.
- `Space`: Accept the word for this session only.
- `A`: Accept the word for this session.
- `I`: Accept the word and add it to the personal dictionary.
- `U`: Accept the word in lowercase only.
- `L`: Look up a word in the dictionary.
- `0-9`: Replace with one of the numbered suggestions.
- `E`: Edit the file at the current location.
- `Q`: Quit without saving.
- `X`: Save the file and exit.
- `^Z`: Suspend `ispell`.

## Examples

```bash
ispell document.txt
```

Check a text file interactively.

```bash
ispell -l document.txt
```

List all misspelled words without interactive mode.

```bash
ispell -d american-english -p ~/.ispell_words document.txt
```

Use a specific dictionary and personal word list.

```bash
ispell -t thesis.tex
```

Check a LaTeX file, skipping TeX commands.

## Practical Notes

- The personal dictionary is stored in `~/.ispell_default` by default. Use `-p` to specify an alternate location.
- Many editors (like Emacs) use `ispell` (or `aspell` in ispell-compatibility mode) for in-editor spell checking.
- For modern systems, `aspell` and `hunspell` offer better dictionary support and are more actively maintained.
- `ispell` expects ISO 8859-1 encoded text by default; UTF-8 support may be limited.
- The backup file (created with `-b`) has a `.bak` extension.
- The dictionary directory is typically `/usr/lib/ispell/` or `/usr/share/ispell/`.
