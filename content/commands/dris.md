---
name: dris
summary: Display directory stack entries, kept for upstream compatibility.
category: Shell
tags: shell, directory, stack, navigation
popular: false
---

## Additional Notes

`dris` is an alternative name for the `dirs` command in some shells. It displays the directory stack. On most systems, `dirs` is the standard name. If `dris` is unavailable, use `dirs` to inspect the directory stack used by `pushd` and `popd`.

## Syntax

```bash
dris [options]
dirs [options]
```

## Parameters

- `options`: Directory-stack display options when supported.
- `index`: Stack position to display when the shell supports indexed directory-stack output.

## Common Options

- `+N`: Show the Nth entry counting from the left.
- `-N`: Show the Nth entry counting from the right.
- `-l`: Show full directory paths instead of abbreviated paths.

## Examples

```bash
dirs
```

Show the current directory stack.

```bash
dirs -l
```

Show full paths in the directory stack.

```bash
pushd /etc
pushd /var/log
dirs
popd
```

Build and inspect a directory stack using standard shell builtins.

## Practical Notes

- Try `type dris` or `command -v dris` to check whether your shell provides it.
- In Bash, Zsh, and many other shells, `dirs` is the standard directory-stack command.
- Directory stacks are usually changed with `pushd` and `popd`.
- If you arrived here from an upstream command list, check `dirs` for the common spelling.
