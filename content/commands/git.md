---
name: git
summary: Track source code changes and collaborate with repositories.
category: Development
tags: version-control, repository, commit, branch
popular: true
---

## Additional Notes

`git` is a development command used to track source code changes and collaborate with repositories. It supports branching, merging, distributed workflows, and integration with remote hosting services like GitHub and GitLab. Most operations run locally, making it fast even without network access.

## Syntax

```bash
git [options] [arguments]
```

## Parameters

- `options`: Flags that change how `git` behaves.
- `source-or-target`: File, binary, object, or project target to inspect or process.
- `arguments`: Tool-specific build, debug, or inspection parameters.

## Common Options

- `status`: Show working tree state.
- `add PATH`: Stage changes.
- `commit`: Record staged changes.
- `log`: Show commit history.
- `branch`: List or manage branches.
- `checkout` or `switch`: Change branches.

## Examples

```bash
git status
git add README.md
git commit -m "Update docs"
git log --oneline
```

## Practical Notes

Git has many subcommands. Start with `status`, `add`, `commit`, `log`, `diff`, `branch`, and `switch`.
