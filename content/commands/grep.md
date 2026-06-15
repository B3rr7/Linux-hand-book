---
name: grep
summary: Search text for lines matching a pattern.
category: Text
tags: search, text, pattern, logs, regex, filter
popular: true
---

## Additional Notes

`grep` searches text and prints lines that match a pattern. The name comes from the old editor command for global regular-expression search and print.

It is one of the most useful Linux commands because it works with files, logs, command output, source code, configuration files, and pipelines. You can search simple words or use regular expressions for more flexible matching.

## Syntax

```bash
grep [options] PATTERN [file...]
command | grep [options] PATTERN
```

## Parameters

- `PATTERN`: Text or a regular expression to search for.
- `file`: One or more files to search. If no file is given, `grep` reads standard input.

## Common Options

- `-i`, `--ignore-case`: Match without caring about uppercase or lowercase.
- `-n`, `--line-number`: Show line numbers.
- `-v`, `--invert-match`: Show lines that do not match.
- `-r`, `-R`, `--recursive`: Search inside directories recursively.
- `-l`, `--files-with-matches`: Print only filenames that contain a match.
- `-L`, `--files-without-match`: Print only filenames that do not contain a match.
- `-c`, `--count`: Count matching lines.
- `-o`: Print only the matching part of each line.
- `-w`, `--word-regexp`: Match whole words only.
- `-x`, `--line-regexp`: Match whole lines only.
- `-E`, `--extended-regexp`: Use extended regular expressions.
- `-F`, `--fixed-strings`: Treat the pattern as plain text, not regex.
- `-P`, `--perl-regexp`: Use Perl-compatible regex when supported.
- `-A N`: Show `N` lines after each match.
- `-B N`: Show `N` lines before each match.
- `-C N`: Show `N` lines before and after each match.
- `--color=auto`: Highlight matching text in terminal output.

## Examples

```bash
grep "error" app.log
```

Find lines containing `error` in `app.log`.

```bash
grep -i "timeout" /var/log/syslog
```

Search without case sensitivity.

```bash
grep -n "PermitRootLogin" /etc/ssh/sshd_config
```

Show the line number of SSH configuration matches.

```bash
grep -r "TODO" ./src
```

Search every file under `./src` recursively.

```bash
grep -Ev "^#|^$" config.conf
```

Show non-comment and non-empty lines.

```bash
ps aux | grep nginx
```

Filter command output for lines containing `nginx`.

```bash
grep -C 3 "failed password" /var/log/auth.log
```

Show matching authentication log lines with three lines of context before and after.

```bash
grep -l "database_url" ./*.env
```

List only files that contain the searched text.

## Regex Basics

- `^text`: Match `text` at the beginning of a line.
- `text$`: Match `text` at the end of a line.
- `.`: Match any single character.
- `.*`: Match any amount of text.
- `[abc]`: Match one character from a set.
- `[^abc]`: Match one character not in the set.
- `[0-9]`: Match a digit.
- `word1|word2`: With `-E`, match either pattern.

## Practical Notes

- Quote patterns so the shell does not change them before `grep` receives them.
- Use `grep -F` for plain strings when regex characters like `.` or `*` should not be special.
- Use `grep -r` carefully in large directories; it can search many files.
- For source code, tools like `ag`, `ack`, or `ripgrep` are often faster, but `grep` is available almost everywhere.
- When searching logs, combine `grep` with `tail`, `journalctl`, or `less`.
