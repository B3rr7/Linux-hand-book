---
name: bind
summary: Show or change Bash Readline key bindings.
category: Shell
tags: bash, readline, keyboard, shell
popular: false
---

## Additional Notes

`bind` is a Bash builtin for inspecting and changing Readline key bindings. Readline controls command-line editing shortcuts used by Bash and many other interactive programs.

Use it to view keyboard shortcuts, bind keys to editing functions, or customize interactive shell behavior.

## Syntax

```bash
bind [options] [keyseq:function]
bind [options] [readline-command]
```

## Parameters

- `keyseq`: Key sequence in Readline syntax.
- `function`: Readline editing function.
- `readline-command`: Configuration command like those used in `~/.inputrc`.
- `options`: Listing, query, and binding controls.

## Common Options

- `-P`: List function names and bindings.
- `-p`: Print bindings in reusable form.
- `-q FUNCTION`: Query which keys invoke a function.
- `-r KEYSEQ`: Remove a binding.
- `-x KEYSEQ:COMMAND`: Bind a key sequence to a shell command.
- `-f FILE`: Read bindings from a file.

## Examples

```bash
bind -P | less
```

List Readline functions and key bindings.

```bash
bind -q backward-kill-word
```

Show keys bound to a function.

```bash
bind '"\C-x\C-l": clear-screen'
```

Bind Ctrl+X Ctrl+L to clear the screen.

```bash
bind -p > readline-bindings.txt
```

Export current bindings.

## Practical Notes

- `bind` affects the current Bash session unless saved in startup files.
- For persistent Readline settings, use `~/.inputrc`.
- Key sequence quoting is easy to get wrong; test interactively first.
