---
name: php
summary: PHP: Hypertext Preprocessor command-line interpreter.
category: Development
tags: php, scripting, web, cli, language, programming
popular: true
---

## Additional Notes

`php` is the command-line interface (CLI) for executing PHP scripts. PHP is a widely-used general-purpose scripting language that is especially suited for web development. The CLI version allows running PHP scripts from the terminal, performing batch processing, writing system administration tools, and testing code without a web server.

PHP is one of the most popular languages for server-side web development, powering major platforms like WordPress, Drupal, Laravel, Symfony, and Facebook (via HHVM historically). The CLI version includes the same language engine as the web module but with features tailored for command-line use, such as built-in web server mode, interactive shell, and support for Unix signals.

## Syntax

```bash
php [options] [script-file] [arguments...]
php [options] -r 'code' [arguments...]
php [options] -a
```

## Parameters

- `script-file`: The PHP script to execute.
- `arguments`: Command-line arguments passed to the script. Available in `$argv` and `$argc`.

## Common Options

- `-r 'code'`: Run PHP code directly from the command line without `<?php` tags.
- `-f file`: Parse and execute a file. This is the default behavior.
- `-a`: Start the interactive PHP shell (read-eval-print loop).
- `-l`: Syntax check (lint) a PHP file without executing it.
- `-w`: Strip comments and whitespace from the source code.
- `-i`: Print PHP information (`phpinfo()` equivalent) and exit.
- `-m`: List all compiled and loaded PHP modules.
- `-n`: Load no php.ini file.
- `-c path`: Look for php.ini in the specified path.
- `-d key=value`: Define a custom INI entry.
- `-e`: Generate extended information for the debugger/profiler.
- `-S addr:port`: Start the built-in web server on the specified address and port.
- `-t document-root`: Specify the document root for the built-in web server.
- `-B code`: Execute code before processing input (with `-R` or `-F`).
- `-R code`: Execute code for each input line.
- `-E code`: Execute code after processing input.
- `-F file`: Parse and execute a file for each input line.
- `-h`, `--help`: Show help.
- `-v`, `--version`: Show PHP version information.
- `--ini`: Show PHP configuration file names and paths.

## Examples

```bash
php -v
```

Show the PHP version.

```bash
php -m
```

List all loaded PHP modules.

```bash
php -i | grep php.ini
```

Show PHP configuration and search for the config file path.

```bash
php -r 'echo "Hello, World!\n";'
```

Run a PHP one-liner that prints a greeting.

```bash
php -l script.php
```

Check a PHP file for syntax errors without executing it.

```bash
php script.php
```

Execute a PHP script file.

```bash
php -a
```

Start the interactive PHP shell.

```bash
php -S localhost:8000 -t /var/www/html
```

Start the built-in PHP development web server.

```bash
php -d memory_limit=256M -d max_execution_time=60 script.php
```

Run a script with custom PHP configuration values.

```bash
php -r 'print_r(get_loaded_extensions());'
```

Print all loaded PHP extensions.

```bash
php -n script.php
```

Run a script without loading any php.ini configuration (all defaults).

```bash
php -B 'print "Starting\n";' -R 'print strtoupper("$argn\n");' -E 'print "Done\n";'
```

Process each input line: print before, uppercase each line, print after.

```bash
php --ini
```

Show which configuration files PHP is using.

```bash
#!/usr/bin/env php
<?php
echo "Command-line args:\n";
foreach ($argv as $i => $arg) {
    echo "  \$argv[$i] = $arg\n";
}
```

A standard PHP CLI script shebang line and argument processing.

## Practical Notes

- The built-in web server (`-S`) is for development only. It is single-threaded and not intended for production use.
- Use `php -l` (lint) as part of a pre-commit hook or CI pipeline to catch syntax errors before they reach production.
- The interactive shell (`-a`) requires the `readline` extension for line editing and history.
- For running scheduled tasks, use `php /path/to/script.php` in cron jobs. The CLI version has different ini settings from the web module (e.g., no time limit by default).
- Common CLI INI file is `/etc/php/8.x/cli/php.ini` on Debian/Ubuntu. Check with `php --ini`.
- PHP CLI scripts can access `$argv` (argument array) and `$argc` (argument count) for command-line argument handling.
- Use `php -r` for quick tests, but be careful with quoting on the shell command line.
- The `-d` option allows setting any php.ini directive at runtime without modifying configuration files.
