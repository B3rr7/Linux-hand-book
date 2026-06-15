---
name: shuf
summary: Generate random permutations of input lines.
category: Text
tags: shuffle, random, sort, text
popular: false
---

## Additional Notes

`shuf` (shuffle) writes a random permutation of its input lines to standard output. It reads from files or standard input and produces output with lines in a random order. It can also generate random numbers within a range when no input file is provided.

The randomness is suitable for most non-cryptographic purposes. `shuf` is useful for randomizing playlist orders, sampling data, splitting datasets for training/testing, or any situation where you need to randomize line-based data.

## Syntax

```bash
shuf [options] [file]
shuf -e [options] arguments...
shuf -i LO-HI [options]
```

## Parameters

- `file`: Input file to read from. If omitted or `-`, reads from standard input.
- `arguments`: Literal values to use as input lines (with `-e`).
- `LO-HI`: Range of integers to generate (with `-i`).

## Common Options

- `-n`, `--head-count count`: Output only the first `count` lines of the random permutation (sampling).
- `-o`, `--output file`: Write output to `file` instead of standard output.
- `--random-source file`: Use `file` as a source of random bytes (default: `/dev/urandom` or similar).
- `-r`, `--repeat`: Allow output lines to be repeated (sampling with replacement).
- `-z`, `--zero-terminated`: Use null bytes instead of newlines as line delimiters.
- `-e`, `--echo`: Treat each argument as an input line.
- `-i`, `--input-range LO-HI`: Generate numbers from `LO` to `HI` (inclusive).

## Examples

```bash
shuf playlist.txt
```

Shuffle the lines in `playlist.txt` and print them in random order.

```bash
shuf -n 5 data.txt
```

Select 5 random lines from `data.txt` without repetition.

```bash
shuf -i 1-100
```

Generate the numbers 1 through 100 in random order.

```bash
shuf -e apple banana cherry
```

Shuffle the given words.

```bash
shuf -n 3 -r -i 1-10
```

Pick 3 random numbers between 1 and 10, allowing repeats.

```bash
shuf data.txt -o shuffled.txt
```

Shuffle lines in `data.txt` and save the result to `shuffled.txt`.

## Practical Notes

- Without `-r`, each input line appears at most once in the output.
- Use `-n` to sample a subset of lines without shuffling the entire input.
- For reproducible results, use `--random-source` with a fixed file.
- `shuf` is part of the GNU coreutils package.
- For large files, `shuf` reads the entire file into memory.
