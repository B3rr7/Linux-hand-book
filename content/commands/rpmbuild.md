---
name: rpmbuild
summary: Build RPM packages from spec files.
category: Packages
tags: rpm, build, package, spec, development
popular: false
---

## Additional Notes

`rpmbuild` builds binary and source RPM packages from a `.spec` file. The spec file defines metadata, build instructions, install steps, file lists, and changelogs for the package. It is the primary tool for creating RPM packages on Red Hat-based distributions.

The build process typically involves: preparing the source code, compiling it, installing the compiled files into a build root, and packaging the result into an RPM. `rpmbuild` supports several build stages, allowing developers to stop after any phase for debugging.

## Syntax

```bash
rpmbuild [options] spec_file.spec
```

## Parameters

- `spec_file.spec`: The spec file defining the package to build.

## Common Options

- `-ba`: Build both binary and source RPMs.
- `-bb`: Build a binary RPM only.
- `-bs`: Build a source RPM only.
- `-bp`: Execute the `%prep` stage (unpack sources and apply patches).
- `-bc`: Execute the `%build` stage after `%prep`.
- `-bi`: Execute the `%install` stage after `%build`.
- `-bl`: Verify the `%files` list.
- `--rebuild`: Rebuild a binary RPM from a source RPM.
- `--recompile`: Recompile a source RPM without creating a new package.
- `--target ARCH`: Specify the target architecture.
- `--define 'macro value'`: Define a macro for the build.
- `--clean`: Clean up build root after building.
- `--sign`: Sign the package with GPG after building.

## Examples

```bash
rpmbuild -ba mypackage.spec
```

Build both binary and source RPMs from the spec file.

```bash
rpmbuild -bb mypackage.spec
```

Build only the binary RPM.

```bash
rpmbuild --rebuild mypackage.src.rpm
```

Rebuild a binary RPM from an existing source RPM.

```bash
rpmbuild -bp --clean mypackage.spec
```

Run only the `%prep` stage and clean up afterwards.

## Practical Notes

- Build requirements (`BuildRequires`) must be installed on the build system.
- The build root is typically cleaned before each build.
- RPM build requires a working directory structure under `~/rpmbuild/` (SOURCES, SPECS, BUILD, RPMS, SRPMS).
- Use `rpmdev-setuptree` to create the default build directory structure.
- Signing packages requires a configured GPG key.
