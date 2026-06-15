---
name: diffstat
summary: Display a histogram of diff output changes.
category: Development
tags: diff, statistics, patch, histogram, changes
popular: false
---

## Additional Notes

`diffstat` reads the output of `diff` and produces a histogram showing how many lines were inserted, deleted, or modified in each file. It is often used to summarize the size of patch files or version control diffs.

The output shows each filename followed by a horizontal bar chart of added and removed lines. The total number of insertions, deletions, and modified files is shown at the bottom. It is a quick way to assess the scope of a change set.

## Syntax

```bash
diffstat [options] [file...]
```

## Parameters

- `file`: A diff or patch file to analyze. If omitted, reads from standard input.

## Common Options

- `-c`: Print each changed line prefixed with `+` or `-`.
- `-d`: Suppress display of files with no insertions or deletions.
- `-f format`: Set the output format to `0` (normal), `1` (with relative percentages), `2` (histogram only), `3` (histogram plus relative percentages), `4` (machine-readable CSV), or `5` (XML).
- `-k`: Suppress filenames in the output.
- `-l`: Show only filenames, one per line.
- `-m`: Merge insertions and deletions into a single "modification" count.
- `-n width`: Set the minimum width for filenames (default is the longest filename).
- `-p width`: Override the histogram width (default is the terminal width).
- `-r`: Show relative percentages instead of histograms.
- `-t`: Override the tab size for calculating column alignment.
- `-u`: Print output sorted by percentage of changes.
- `-w`: Wrap lines exceeding terminal width.
- `-K`: Keep the original filenames even when they are temporary.
- `-N`: Do not show the number of inserted/deleted lines.
- `-R`: Assume patch was created with reversed `old` and `new` order.

## Examples

```bash
diff file1.c file2.c | diffstat
```

Show a histogram of changes between two files.

```bash
diffstat patch.diff
```

Summarize the changes in a patch file.

```bash
git diff | diffstat
```

Summarize the unstaged changes in a Git repository.

```bash
diffstat -p 40 -n 20 changes.patch
```

Set the histogram width to 40 characters and minimum filename width to 20.

## Practical Notes

- `diffstat` works with unified, context, and normal diff formats.
- Pipe `git diff`, `svn diff`, or `diff -u` output into `diffstat` for version control summaries.
- Use the `-m` option when you do not care about distinguishing inserts from deletes.
- The CSV output (`-f 4`) is useful for programmatic processing in scripts.
