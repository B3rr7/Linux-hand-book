---
name: reposync
summary: Synchronize yum/dnf repositories to a local directory.
category: Administration
tags: repositories, yum, dnf, mirror, sync, rpm
popular: false
---

## Additional Notes

`reposync` downloads the contents of yum or dnf repositories to a local directory, creating a local mirror. It retrieves all RPM packages and associated metadata from one or more remote repositories and stores them for offline or local use.

System administrators use `reposync` to create local repository mirrors for faster package installations across a network, air-gapped environments that cannot access the internet, or to preserve specific package versions for reproducibility. The synced repository can then be served via HTTP, FTP, or a local file path.

## Syntax

```bash
reposync [options]
```

## Parameters

- `options`: Flags that change how `reposync` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-p dir`, `--download_path=dir`: Directory to download packages to.
- `-r repo`, `--repoid=repo`: Synchronize only the specified repository ID.
- `-a arch`, `--arch=arch`: Download packages for the specified architecture.
- `-l`, `--allow-path`: Allow download to paths outside the repository root.
- `-n`, `--newest-only`: Download only the newest version of each package.
- `-u`, `--umount`: Unmount repositories after synchronization.
- `-c config`: Use a specific yum/dnf configuration file.
- `-d`, `--delete`: Delete packages from the local mirror that are no longer in the remote repository.
- `-e cache_dir`, `--cachedir=cache_dir`: Specify the cache directory.
- `--download-metadata`: Download repository metadata.
- `-g`, `--gpgcheck`: Check GPG signatures on downloaded packages.
- `--norepopath`: Do not add the repository path to the download directory.
- `-q`, `--quiet`: Quiet mode.
- `-v`, `--verbose`: Verbose output.
- `--help`: Show help.

## Examples

```bash
reposync -p /var/www/html/repos
```

Sync all enabled repositories to a local directory.

```bash
reposync -r base -p /repo/mirror
```

Sync only the `base` repository.

```bash
reposync -r base -r updates -p /repo -n
```

Sync only the newest packages from `base` and `updates`.

```bash
reposync -p /repo --download-metadata
```

Sync packages and also download repository metadata.

```bash
reposync -p /repo -a x86_64
```

Sync only x86_64 architecture packages.

```bash
reposync -p /repo -d
```

Sync and delete local packages not in the remote repository.

```bash
reposync -c /etc/yum.repos.d/custom.repo -p /repo
```

Sync using a specific repository configuration file.

## Practical Notes

- After running `reposync`, run `createrepo` (or `createrepo_c`) on the downloaded directory to generate repository metadata: `createrepo /path/to/repo`.
- For CentOS/RHEL 8+ with DNF, use `dnf reposync` which has a similar interface.
- The `-n` option saves significant disk space and time, especially on large repositories with many package versions.
- For a complete offline mirror, also sync GPG keys and distribute them to client machines.
- Serve the synced repository with a web server (Apache, Nginx) or share via NFS.
- On client machines, create a `.repo` file pointing to `file:///path/to/repo` or `http://mirror-server/repo`.
- `reposync` is part of the `yum-utils` package on RHEL/CentOS 7 and the `dnf-utils` or `dnf-plugins-core` package on CentOS 8+.
