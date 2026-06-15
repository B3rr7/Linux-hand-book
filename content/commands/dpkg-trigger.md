---
name: dpkg-trigger
summary: Activate dpkg triggers for deferred package operations.
category: Packages
tags: debian, package, dpkg, trigger, activation
popular: false
---

## Additional Notes

`dpkg-trigger` manually activates a dpkg trigger from the command line. Triggers are a mechanism in Debian packaging that allows one package to cause another package to perform an action at a later time, typically during a dpkg run. This is used for operations that must happen after related packages are processed, such as rebuilding shared library caches or updating font indexes.

Normally triggers are activated automatically by dpkg when certain files are installed. However, `dpkg-trigger` can activate a trigger explicitly, which is useful during manual package operations, testing, or when a trigger needs to be fired outside of a normal dpkg transaction.

## Syntax

```bash
dpkg-trigger [options] trigger-name
```

## Parameters

- `trigger-name`: The name of the trigger to activate (as declared in the package's control file).

## Common Options

- `--by-package package`: Specify the package name that is activating the trigger.
- `--no-await`: Do not wait for the triggered processing to complete.
- `--await`: Wait for the triggered processing to complete (default).
- `--check-supported`: Check whether the running dpkg supports triggers.

## Examples

```bash
dpkg-trigger --by-package myapp myapp-trigger
```

Activate the `myapp-trigger` trigger on behalf of `myapp`.

```bash
dpkg-trigger noawait ldconfig
```

Activate the `ldconfig` trigger without waiting for processing.

## Practical Notes

- Most users never need to invoke `dpkg-trigger` directly; it is primarily for package maintainers and debugging.
- Common triggers include `ldconfig` (shared library cache), `man-db` (manual page index), and `fontconfig` (font cache).
- The `noawait` variant (`dpkg-trigger noawait trigger`) allows parallel trigger processing.
- To see which triggers a package supports, examine the `DEBIAN/triggers` file inside its `.deb` archive.
- Triggers are processed at the end of a dpkg run, not immediately upon activation.
