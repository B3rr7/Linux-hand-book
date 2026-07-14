---
name: git
summary: Track source code changes and collaborate with repositories.
category: Development
tags: version-control, repository, commit, branch, remote, clone
popular: true
---

## Additional Notes

`git` is a development command used to track source code changes and collaborate with repositories. It supports branching, merging, distributed workflows, and integration with remote hosting services like GitHub and GitLab. Most operations run locally, making it fast even without network access.

A Git repository tracks a project as a series of commits. You change files in the working tree, stage selected changes, then record them as a commit. Remote repositories let you share commits with others.

## Syntax

```bash
git [subcommand] [options] [arguments]
```

## Parameters

- `subcommand`: The Git action, such as `clone`, `add`, `commit`, `push`, or `log`.
- `options`: Flags that change how the subcommand behaves.
- `arguments`: Paths, branch names, commit references, or messages depending on the subcommand.

## Repository Setup

- `init`: Create a new Git repository in the current directory.
- `clone URL [dir]`: Copy a remote repository locally.
- `clone -b BRANCH URL`: Clone and check out a specific branch.
- `remote -v`: Show configured remotes and their URLs.
- `remote add origin URL`: Add a remote named `origin`.

## Daily Workflow

- `status`: Show working tree state and staged changes.
- `add PATH`: Stage a file or directory for the next commit.
- `add -p`: Stage changes interactively, hunk by hunk.
- `add .`: Stage all changes in the current directory.
- `commit -m "MSG"`: Record staged changes with a message.
- `commit -am "MSG"`: Stage tracked files and commit in one step.
- `restore FILE`: Discard unstaged changes to a file.
- `restore --staged FILE`: Unstage a file without losing changes.

## History and Inspection

- `log`: Show commit history.
- `log --oneline`: Show one compact line per commit.
- `log -p FILE`: Show history with the diff for a file.
- `log --graph --oneline --all`: Visualize branches.
- `diff`: Show unstaged changes.
- `diff --staged`: Show staged changes.
- `show COMMIT`: Show a commit and its diff.
- `blame FILE`: Show who changed each line and when.

## Branching and Merging

- `branch`: List local branches.
- `branch NAME`: Create a new branch.
- `switch NAME`: Switch to an existing branch.
- `switch -c NAME`: Create and switch to a new branch.
- `merge NAME`: Merge another branch into the current one.
- `rebase NAME`: Reapply commits on top of another branch.
- `stash`: Temporarily stash uncommited changes.
- `stash pop`: Restore the most recent stash.

## Sharing with Remotes

- `fetch`: Download commits and branches from a remote without merging.
- `pull`: Fetch and merge the current branch's remote tracking branch.
- `push`: Upload local commits to the remote.
- `push -u origin BRANCH`: Push and set the upstream tracking branch.
- `push --tags`: Push tags to the remote.

## Examples

```bash
git init
git add README.md
git commit -m "Add project README"
git log --oneline
```

Create a repo, stage one file, commit it, and review history.

```bash
git clone https://github.com/user/project.git
cd project
git switch -c feature/login
```

Copy a remote project and start a new feature branch.

```bash
git status
git add -p
git commit -m "Fix login validation"
git push -u origin feature/login
```

Review changes, stage them interactively, commit, and publish the branch.

```bash
git pull
git log --oneline --graph --all
```

Sync the latest remote changes and visualize the branch history.

```bash
git diff --staged
git restore --staged config.conf
```

Inspect staged changes, then unstage a file while keeping its edits.

## Practical Notes

- Commit often with small, clear messages; it makes history easier to review.
- Use `git status` and `git diff` before `git add` and `git commit`.
- Prefer `switch` over the older `checkout` for changing branches.
- Run `git pull` before `git push` when others share the branch.
- Use branches for experiments so the main branch stays stable.
- `git stash` is handy when you must switch branches with unfinished work.
