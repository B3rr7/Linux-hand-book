---
name: pstree
summary: Display a tree of running processes.
category: Processes
tags: processes, tree, hierarchy, parent, children
popular: true
---

## Additional Notes

`pstree` displays running processes as a tree structure, showing parent-child relationships. The root of the tree is typically `systemd` (or `init` on older systems), with branches showing spawned child processes and threads.

The tree view makes it easy to understand process hierarchies at a glance. It reveals which processes launched which others, helps identify orphaned processes, and shows the structure of complex applications like web servers and container runtimes that fork many children.

## Syntax

```bash
pstree [options] [pid-or-user]
```

## Parameters

- `pid-or-user`: Show the tree starting from a specific PID, or show all trees for processes owned by a specific user.

## Common Options

- `-p`, `--show-pids`: Show PIDs in addition to process names.
- `-n`, `--numeric-sort`: Sort output by PID number instead of alphabetically.
- `-a`, `--arguments`: Show command-line arguments.
- `-A`: Use ASCII characters for tree drawing.
- `-G`: Use VT100 line-drawing characters.
- `-U`: Use UTF-8 (Unicode) line-drawing characters.
- `-h`, `--highlight-all`: Highlight the current process and its ancestors.
- `-H pid`: Highlight the specified PID and its ancestors.
- `-l`, `--long`: Do not truncate long lines.
- `-s`, `--show-parents`: Show parent processes of the specified PID.
- `-S`, `--ns-changes`: Show namespace changes (useful for containers).
- `-t`, `--thread-names`: Show thread names.
- `-T`, `--hide-threads`: Hide threads (show only processes).
- `-u`, `--uid-changes`: Show UID transitions.
- `-Z`, `--security-context`: Show SELinux security context.
- `-g`: Show process group IDs.
- `-c`: Disable compact mode (shows all children separately).
- `--color`: Colorize output by process age or attributes.

## Examples

```bash
pstree
```

Show the full process tree.

```bash
pstree -p
```

Show process tree with PIDs.

```bash
pstree -a
```

Show process tree with command-line arguments.

```bash
pstree -p 1234
```

Show the tree rooted at PID 1234.

```bash
pstree username
```

Show all processes owned by a specific user.

```bash
pstree -pan 1
```

Show the full tree from init/systemd with PIDs and arguments, sorted numerically.

```bash
pstree -s 1234
```

Show only the parent chain of PID 1234.

```bash
pstree -S $(pidof docker)
```

Show process tree with namespace changes for Docker.

```bash
pstree -p -h 1234
```

Show the tree and highlight PID 1234.

## Practical Notes

- The process tree starts at PID 1 (`systemd` or `init`). Zombie and orphaned processes appear without proper parents.
- Use `pstree -p` when you need to find a specific PID. Pipe to `grep` for searching.
- Threads are shown inside curly braces `{thread_name}`. Use `-T` to hide threads.
- The `-s` option is useful for finding the parent chain of a problematic process.
- For containers, `-S` shows which processes are in different namespaces, helping identify container boundaries.
- `pstree` is part of the `psmisc` package (`ps`, `pstree`, `killall`, `fuser`, `prtstat`).
