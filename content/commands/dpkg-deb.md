---
name: dpkg-deb
summary: Pack, unpack, and inspect Debian package archives.
category: Packages
tags: debian, package, dpkg, archive, inspect
popular: false
---

## Additional Notes

`dpkg-deb` is the low-level tool for manipulating `.deb` package archives. It can create, unpack, extract, and inspect the contents and metadata of Debian binary packages. It works directly on `.deb` files without consulting the dpkg database.

While `dpkg` manages installed packages, `dpkg-deb` handles the archive format itself. It is used to examine package contents, extract files from a package, or build a package during development. Most users interact with `dpkg-deb` indirectly through `dpkg` or higher-level tools like `apt`.

## Syntax

```bash
dpkg-deb [options] command archive
```

## Parameters

- `command`: The operation to perform (e.g., `--info`, `--contents`, `--extract`, `--build`).
- `archive`: Path to a `.deb` file or, for `--build`, a directory containing a `DEBIAN` control subdirectory.

## Common Commands

- `-I`, `--info archive [control-fields]`: Show package metadata (name, version, description, dependencies).
- `-c`, `--contents archive`: List the files contained in the package.
- `-x`, `--extract archive directory`: Extract the package contents into the specified directory.
- `-X`, `--vextract archive directory`: Extract and show filenames as they are extracted.
- `-e`, `--control archive directory`: Extract control information (maintainer scripts, control file) into a directory.
- `-R`, `--raw-extract archive directory`: Extract both files and control information together.
- `-b`, `--build directory archive`: Build a `.deb` package from a directory tree.
- `-W`, `--show archive`: Show information using a configurable output format.
- `--fsys-tarfile archive`: Extract the filesystem tarfile from the archive without decompression.

## Common Options

- `-z level`: Set the compression level when building (0-9, default is 9).
- `-Z type`: Set the compression type (`gzip`, `xz`, `zstd`, `none`).
- `-S`: Preserve file status when extracting.
- `--uniform-compression`: Use the same compression type for all members.
- `--deb-format format`: Specify output archive format (`2.0` or `3.0`).

## Examples

```bash
dpkg-deb -I package.deb
```

Show the control information (metadata) of a Debian package.

```bash
dpkg-deb -c package.deb
```

List all files inside a `.deb` archive.

```bash
dpkg-deb -x package.deb ./extracted
```

Extract the package files into the `./extracted` directory.

```bash
dpkg-deb -b ./mypackage mypackage.deb
```

Build a `.deb` from a directory containing a `DEBIAN/` control directory.

## Practical Notes

- To extract only the control scripts (preinst, postinst, prerm, postrm), use `dpkg-deb -e`.
- When building packages, the source directory must contain a `DEBIAN/control` file at minimum.
- Use `dpkg-deb --fsys-tarfile package.deb | tar t` for the full tarfile listing.
- Installed packages can be examined with `dpkg --contents` and `dpkg --info` instead of using the `.deb` file directly.
