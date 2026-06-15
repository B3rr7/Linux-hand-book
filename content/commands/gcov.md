---
name: gcov
summary: Analyze code coverage from compiled programs.
category: Development
tags: coverage, testing, gcc, profiling, analysis
popular: false
---

## Additional Notes

`gcov` is a code coverage analysis tool that works with programs compiled by GCC. It reports how many times each line of source code was executed during a test run. It is used to identify untested code paths and measure test coverage.

To use `gcov`, compile your program with special flags (`-fprofile-arcs -ftest-coverage`), run the program to generate coverage data files (`.gcda`), then run `gcov` on the source files. The output shows execution counts per line, highlighting which lines were never executed.

## Syntax

```bash
gcov [options] source-file...
```

## Parameters

- `source-file`: The source code file to analyze (e.g., `file.c`).

## Common Options

- `-a`, `--all-blocks`: Show information for every basic block, not just executed lines.
- `-b`, `--branch-probabilities`: Include branch probability statistics.
- `-c`, `--branch-counts`: Show branch counts instead of percentages.
- `-f`, `--function-summaries`: Show coverage summary for each function.
- `-i`, `--intermediate-format`: Output data in an intermediate text format for further processing.
- `-l`, `--long-file-names`: Use long output filenames for header files.
- `-n`, `--no-output`: Do not create output files.
- `-o directory|file`, `--object-directory directory|file`: Specify the directory containing the `.gcda` and `.gcno` data files.
- `-p`, `--preserve-paths`: Preserve original source path structure in output.
- `-r`, `--relative-only`: Show only coverage data relative to the current directory.
- `-s directory`, `--source-prefix directory`: Strip the specified prefix from source file paths.
- `-u`, `--unconditional-branches`: Include unconditional branches in branch statistics.
- `-v`, `--version`: Show version information.

## Examples

```bash
gcc -fprofile-arcs -ftest-coverage program.c -o program
./program
gcov program.c
```

Compile with coverage instrumentation, run the program, and analyze coverage.

```bash
gcov -b program.c
```

Include branch probability information in the coverage report.

```bash
gcov -f program.c
```

Show per-function coverage summaries.

```bash
gcov -o build/ program.c
```

Specify a different directory for the coverage data files.

## Practical Notes

- The source file must be compiled with `-fprofile-arcs -ftest-coverage`. Linking with `-lgcov` or `--coverage` is also recommended.
- The first run with instrumentation creates `.gcno` files. Each program execution updates `.gcda` files.
- The output is a `.gcov` file alongside the source, showing line counts prefixed in the left column.
- Running the same program multiple times accumulates coverage data in the `.gcda` files.
- For modern workflows, consider `gcovr` or `lcov` which provide HTML reports and summary output.
- The `--coverage` compiler flag is a shortcut that enables both `-fprofile-arcs` and `-ftest-coverage`.
