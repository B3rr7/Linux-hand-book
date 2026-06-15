---
name: fish
summary: The Friendly Interactive Shell.
category: Processes
tags: shell, terminal, fish, autosuggestion, completion
popular: true
---

## Additional Notes

Fish is a modern command-line shell designed with user-friendliness as a primary goal. Unlike bash or zsh, fish requires no configuration for basic features: it provides syntax highlighting, autosuggestions, tab completions, and a web-based configuration interface out of the box. It is not POSIX-compliant, meaning bash scripts may need adaptation to run under fish.

Key design differences from bash include: no `~/.bashrc` or `~/.profile` (fish uses `~/.config/fish/config.fish`), a different scripting syntax (e.g. `if test -f file` instead of `if [ -f file ]`), and functions being the primary means of defining commands.

## Syntax

```bash
fish [options] [file] [arguments]
```

## Parameters

- `file`: A script file to execute. If no file is given, fish runs interactively.
- `arguments`: Arguments passed to the script or interactive session.

## Common Options

- `-c command`: Run the specified command(s) and exit.
- `-i`: Force interactive mode.
- `-l`, `--login`: Run as a login shell.
- `-n`, `--no-execute`: Parse but do not execute commands (syntax check).
- `-N`, `--no-config`: Do not load configuration files.
- `-v`, `--version`: Show version and exit.

## Features

- **Autosuggestions**: Fish suggests commands as you type, based on history and completions. Accept with `Ctrl+F` or right arrow.
- **Syntax highlighting**: Commands are colorized as you type: valid commands in blue, invalid in red, options in cyan, etc.
- **Tab completions**: Extensive completions for many commands, generated from man pages.
- **Web configuration**: `fish_config` opens a web UI for themes, prompts, and settings.
- **Prompt**: A friendly, informative prompt with git integration out of the box.
- **Functions**: The primary way to define commands. `function name; body; end`.
- **Universal variables**: Variables shared across all fish sessions.

## Examples

```bash
fish
```

Start an interactive fish shell.

```bash
fish -c "echo Hello"
```

Run a command with fish without entering an interactive shell.

```bash
fish script.fish
```

Execute a fish script.

```bash
fish -n script.fish
```

Check syntax of a fish script without executing it.

```bash
fish -N
```

Start fish without loading user configuration.

```bash
fish_config
```

Open the web-based configuration interface.

## Configuration

Fish reads configuration from `~/.config/fish/config.fish`. Key directories:

- `~/.config/fish/config.fish`: Main configuration file.
- `~/.config/fish/functions/`: Directory for automatically loaded functions.
- `~/.config/fish/completions/`: Directory for custom completions.
- `~/.config/fish/fish_variables`: Stores universal variables.

Example `config.fish`:

```fish
set -gx PATH $PATH ~/.local/bin
set -gx EDITOR vim
alias ll "ls -lah"
starship init fish | source
```

## Practical Notes

- Fish is not POSIX-compliant. If you need strict POSIX compatibility, use bash or dash.
- Switch between fish and bash temporarily with `bash` or `exec bash`.
- To make fish your default shell: `chsh -s $(which fish)`.
- Many bash-specific syntax elements (like `$(())`, `[[ ]]`, `export`) do not work in fish. Use `set -x`, `test`, and `set -gx` instead.
- The `fisher` plugin manager adds easy plugin installation.
- Fish's scripting language is cleaner than bash but less portable; scripts written in fish will not run in other shells.
