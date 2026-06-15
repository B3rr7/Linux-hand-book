---
name: mkisofs
summary: Create ISO 9660 filesystem images (CD/DVD images).
category: Files
tags: iso, cdrom, image, archive, backup
popular: false
---

## Additional Notes

`mkisofs` generates ISO 9660 filesystem images, which are standard CD-ROM/DVD-ROM disk images. It can create both pure ISO 9660 images and hybrid images supporting extensions like Rock Ridge (Unix permissions and long filenames), Joliet (Windows long filenames), and El Torito (bootable CDs).

On most Linux distributions, `mkisofs` has been replaced by `genisoimage` (from the `cdrkit` package) or `xorriso` (from `libisoburn`). The command syntax is essentially identical across these implementations.

## Syntax

```bash
mkisofs [options] -o output.iso source-directory
```

## Parameters

- `-o output.iso`: Path for the output ISO file.
- `source-directory`: The directory whose contents will become the ISO filesystem root.

## Common Options

- `-R`: Add Rock Ridge extensions for Unix permissions, ownership, and long filenames.
- `-J`: Add Joliet extensions for Windows-compatible long filenames.
- `-j`: Add Joliet-UTF8 extensions for international characters.
- `-r`: Like `-R` but with more relaxed file permissions (readable by everyone).
- `-l`: Allow 31-character filenames (ISO level 2).
- `-T`: Create a `TRANS.TBL` file for name translation.
- `-V label`: Set the volume label (name of the disc).
- `-A appid`: Set the application ID.
- `-p preparer`: Set the preparer name.
- `-P publisher`: Set the publisher name.
- `-b boot-image`: Create a bootable CD with the specified boot image (El Torito).
- `-c boot-catalog`: Specify the boot catalog file.
- `-no-emul-boot`: Use no floppy/hard disk emulation for booting.
- `-boot-load-size size`: Set the number of virtual sectors to load.
- `-boot-info-table`: Modify the boot image with boot information.
- `-graft-points`: Allow files to be placed at different paths using `source=target` notation.
- `-m pattern`: Exclude files matching the pattern.
- `-x pattern`: Exclude files matching the pattern (same as `-m`).
- `-D`: Do not use deep directory relocation; allow deeper directory trees.
- `-iso-level level`: Set ISO 9660 conformance level (1-4).
- `-udf`: Include UDF support.
- `-allow-limited-size`: Allow files larger than 2 GB (uses UDF bridge).

## Examples

```bash
mkisofs -o myproject.iso ./project
```

Create a simple ISO image from a directory.

```bash
mkisofs -r -J -o backup.iso ./data
```

Create an ISO with Rock Ridge and Joliet extensions.

```bash
mkisofs -r -J -V "MyProject" -o project.iso ./src
```

Create an ISO with a volume label.

```bash
mkisofs -r -J -b isolinux/isolinux.bin -c isolinux/boot.cat -no-emul-boot -boot-load-size 4 -boot-info-table -o bootable.iso ./iso-root
```

Create a bootable ISO image (for live CDs/USBs).

```bash
mkisofs -r -J -m "*.git" -m "node_modules" -o code.iso ./code
```

Create an ISO excluding certain patterns.

## Practical Notes

- Modern systems typically use `genisoimage` or `xorriso`. Install `genisoimage` (`apt install genisoimage`) or `xorriso` (`apt install xorriso`).
- For bootable USB instead of CD/DVD, use `dd if=file.iso of=/dev/sdX` or tools like `ventoy`.
- Rock Ridge (`-r` or `-R`) preserves Unix permissions, which is important for scripts and executables on the ISO.
- The volume label (`-V`) is the name displayed when the disc is inserted.

