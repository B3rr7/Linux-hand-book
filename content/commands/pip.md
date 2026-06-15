---
name: pip
summary: Package installer for Python packages (PyPI).
category: Development
tags: python, packages, pypi, install, dependencies, virtualenv
popular: true
---

## Additional Notes

`pip` is the standard package manager for Python. It downloads and installs packages from the Python Package Index (PyPI) and other package indexes. It handles dependencies, manages package versions, and supports virtual environments.

`pip` is essential for Python development. It installs libraries, frameworks, and tools, manages requirements files for reproducible environments, upgrades or removes packages, and lists installed packages. Modern Python installations include `pip` by default, though it may need to be installed separately on older systems or minimal containers.

## Syntax

```bash
pip [subcommand] [options]
pip3 [subcommand] [options]
```

## Parameters

- `subcommand`: The operation to perform, such as `install`, `uninstall`, `list`, `show`, `search`, `freeze`, `check`.

## Common Subcommands and Options

- `install package`: Install a package. Use `package==version` for a specific version.
- `install -r requirements.txt`: Install all packages listed in a requirements file.
- `install --upgrade package`: Upgrade a package to the latest version.
- `install --user package`: Install for the current user only (no system-wide installation).
- `uninstall package`: Remove a package.
- `uninstall -y package`: Remove without confirmation prompts.
- `list`: List installed packages.
- `list --outdated`: Show packages with newer versions available.
- `list --format columns/json/freeze`: Format the output.
- `show package`: Display detailed information about an installed package.
- `freeze`: Output installed packages in requirements file format.
- `check`: Verify installed packages have compatible dependencies.
- `search query`: Search PyPI for packages (note: PyPI search is deprecated in newer pip).
- `download package`: Download packages without installing them.
- `cache list`: List pip's cached package files.
- `cache purge`: Clear pip's cache.
- `--proxy proxy`: Use a proxy server.
- `--index-url url`: Use a different package index.
- `--extra-index-url url`: Add an additional package index.
- `--no-deps`: Do not install package dependencies.
- `--target dir`: Install to a specific directory.
- `-q`, `--quiet`: Reduce output verbosity.
- `-v`, `--verbose`: Increase output verbosity.

## Examples

```bash
pip install requests
```

Install the latest version of the `requests` library.

```bash
pip install django==4.2
```

Install a specific version of Django.

```bash
pip install -r requirements.txt
```

Install all packages listed in a requirements file.

```bash
pip install --upgrade pip
```

Upgrade pip itself to the latest version.

```bash
pip uninstall requests
```

Uninstall the `requests` package.

```bash
pip list
```

List all installed Python packages.

```bash
pip list --outdated
```

Show packages that have newer versions available.

```bash
pip show flask
```

Show detailed information about the installed Flask package.

```bash
pip freeze > requirements.txt
```

Save all installed packages to a requirements file.

```bash
pip install --user ansible
```

Install Ansible for the current user only.

```bash
pip check
```

Verify that all installed packages have compatible dependencies.

```bash
pip download pandas --dest ./packages
```

Download the pandas package and its dependencies for offline installation.

```bash
pip install --proxy http://proxy.example.com:8080 requests
```

Install through an HTTP proxy.

## Practical Notes

- On systems with Python 2 and Python 3 installed, use `pip3` to install for Python 3 and `pip2` for Python 2.
- Always use virtual environments (via `venv` or `virtualenv`) to isolate project dependencies: `python3 -m venv myenv && source myenv/bin/activate`.
- Use `pip install --upgrade pip` periodically to keep pip current.
- The `requirements.txt` file format: `package==version` for pinned versions, `package>=min-version` for minimums.
- For faster installations, consider `pip install` with the `--no-cache-dir` flag in CI environments.
- Do not use `sudo pip install` on system Python; it conflicts with the system package manager. Use `--user` or a virtual environment instead.
- Consider using `uv`, `rye`, or `poetry` as modern alternatives that improve on pip's workflow.
- See `pip install -e .` (editable install) for packages in development mode, which links your source code directly.
