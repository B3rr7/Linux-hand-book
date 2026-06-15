---
name: perl
summary: Practical Extraction and Report Language interpreter.
category: Development
tags: scripting, text processing, regex, cpan, programming, language
popular: true
---

## Additional Notes

`perl` is a high-level, general-purpose programming language interpreter. It excels at text processing, system administration, web development, network programming, and automation. Perl combines features from C, shell scripting, sed, and awk, and includes powerful built-in regular expression support.

Perl is widely used for system administration scripts, log file parsing, report generation, CGI web programming, bioinformatics, and as a glue language connecting different systems and tools. It has a vast ecosystem of modules available through CPAN (Comprehensive Perl Archive Network), which provides pre-built solutions for virtually any programming task.

Perl follows the philosophy of "There's More Than One Way To Do It" (TMTOWTDI), which gives programmers flexibility but also means Perl code can vary significantly in style. Perl 5 is the mainstream production version, while Perl 7/Raku represents a separate language evolution.

## Syntax

```bash
perl [options] [programfile] [arguments]
perl -e 'program code' [arguments]
```

## Parameters

- `programfile`: A Perl script file to execute.
- `arguments`: Command-line arguments passed to the script in `@ARGV`.

## Common Options

- `-e 'code'`: Execute Perl code directly from the command line.
- `-n`: Automatically loop over input lines (like `sed -n`).
- `-p`: Loop over input lines and print each one (like `sed`).
- `-i[extension]`: Edit files in-place, optionally with a backup extension.
- `-w`: Enable warnings for potentially problematic constructs.
- `-W`: Enable all warnings unconditionally.
- `-c`: Check syntax without executing the program.
- `-0777`: Slurp mode: read entire input as a single string.
- `-a`: Auto-split mode. Split input lines into `@F` array.
- `-F pattern`: Specify the split pattern for `-a`.
- `-l`: Automatic line-ending processing (chomp on input, add on output).
- `-M module`: Load a Perl module.
- `-d`: Run under the Perl debugger.
- `-I directory`: Add a directory to `@INC` (module search path).
- `-T`: Enable taint mode for security-conscious scripts.
- `-v`: Show Perl version and configuration.

## Examples

```bash
perl -e 'print "Hello, world!\n"'
```

Run a one-liner that prints a greeting.

```bash
perl -n -e 'print if /error/' app.log
```

Print lines from a log file containing `error`.

```bash
perl -pe 's/old/new/g' file.txt
```

Replace all occurrences of `old` with `new` in a file.

```bash
perl -i.bak -pe 's/foo/bar/g' config.txt
```

Replace text in-place with a `.bak` backup file.

```bash
perl -n -a -F: -e 'print $F[0]' /etc/passwd
```

Print the first field of each line in `/etc/passwd` (split by `:`).

```bash
perl -c script.pl
```

Check the syntax of a Perl script without executing it.

```bash
perl -MData::Dumper -e 'print Dumper(\@INC)'
```

Print the Perl module search path using the Data::Dumper module.

```bash
perl -0777 -pe 's/\n+/ /g' file.txt
```

Read the entire file as one line and replace newlines with spaces.

```bash
perl -e 'use LWP::Simple; print get("https://example.com")'
```

Fetch a web page using the LWP library.

```bash
perl -e 'print scalar localtime;'
```

Print the current date and time.

```bash
#!/usr/bin/perl
use strict;
use warnings;
my $count = 0;
while (my $line = <>) {
    chomp $line;
    $count++ if $line =~ /error/i;
}
print "Found $count errors\n";
```

A full Perl script that counts error lines from input.

## Practical Notes

- Always start Perl scripts with `use strict;` and `use warnings;` to catch common errors and typos.
- CPAN modules are installed with `cpan`, `cpanm`, or the system package manager (e.g., `libfoo-perl` on Debian/Ubuntu).
- The one-liner pattern `perl -pe ''` is the most common for sed-like substitutions. Add `-i` for in-place editing.
- Perl's `@ARGV` array holds command-line arguments. Shift them with `my $arg = shift` inside a script.
- For regular expressions, use `=~` to match and `!~` to negate. Capture groups use `$1`, `$2`, etc.
- Use `perldoc perlrun` for full documentation on command-line options and `perldoc perlre` for regex details.
- Perl can handle binary data, but be careful with null bytes and character encoding. Use `binmode` for binary filehandles.
- The taint mode (`-T`) is recommended for CGI scripts and code that processes untrusted input.
