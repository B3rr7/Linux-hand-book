---
name: fishshell
summary: Friendly interactive shell with autosuggestions and rich completions.
category: Shell
tags: shell, terminal, fish, completion, autosuggestion
popular: false
---

## Additional Notes

Fish (Friendly Interactive SHell) is designed for interactive terminal use. The command to run it is `fish`; `fishshell` is an alternative page name for the same shell. It provides syntax highlighting, autosuggestions, command completions, and a web-based configuration tool without much setup.

## Syntax

```bash
fish [options] [script.fish] [arguments]
fish_config
```

## Parameters

- `options`: Startup options for the Fish shell.
- `script.fish`: Fish script to run.
- `arguments`: Arguments passed to the script.

## Common Options

- `-c COMMAND`: Run a command and exit.
- `-i`: Force interactive mode.
- `-l`, `--login`: Run as a login shell.
- `-n`, `--no-execute`: Parse commands but do not run them.
- `-N`, `--no-config`: Start without loading user configuration.
- `-v`, `--version`: Show version information.

## Examples

```bash
fish
```

Start an interactive Fish shell.

```bash
fish -c "echo hello"
```

Run one command with Fish and exit.

```bash
fish -n script.fish
```

Check a Fish script for syntax errors.

```bash
fish_config
```

Open Fish's browser-based configuration interface.

## Practical Notes

- Fish is not POSIX-compatible, so Bash scripts usually need changes before they run in Fish.
- The main configuration file is `~/.config/fish/config.fish`.
- Use the `fish` page in this handbook for the fuller command reference.
- To make Fish your login shell, install it first and then use `chsh -s "$(command -v fish)"`.
