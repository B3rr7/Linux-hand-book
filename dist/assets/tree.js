const treeButtons = [...document.querySelectorAll("[data-tree-path]")];
const treeSearchForm = document.querySelector("[data-tree-search-form]");
const treeSearchInput = document.querySelector("[data-tree-search-input]");
const treeSearchStatus = document.querySelector("[data-tree-search-status]");
const treeStage = document.querySelector("[data-tree-stage]");
const treeScroll = document.querySelector("[data-tree-scroll]");
const treeCable = document.querySelector("[data-tree-cable]");
const treeCablePath = document.querySelector("[data-tree-cable-path]");
const treePanel = document.querySelector("[data-tree-panel]");
const treeClose = document.querySelector("[data-tree-close]");
const treeTitle = document.querySelector("[data-tree-title]");
const treeDescription = document.querySelector("[data-tree-description]");
const treeKind = document.querySelector("[data-tree-kind]");
const treeExample = document.querySelector("[data-tree-example]");

const treeInfo = {
  "/": {
    kind: "Root directory",
    description: "The root of the filesystem. Every file, folder, device, and mounted filesystem appears somewhere under this top-level path.",
    example: "cd /"
  },
  "/bin": {
    kind: "Essential command directory",
    description: "Core commands needed for basic system use and recovery. On many modern systems this may point into /usr/bin.",
    example: "ls /bin"
  },
  "/bin/ls": {
    kind: "Command",
    description: "Lists directory contents. It is one of the most common commands used when moving through the filesystem.",
    example: "ls -lah /"
  },
  "/bin/cp": {
    kind: "Command",
    description: "Copies files and directories from one path to another.",
    example: "cp file.txt backup.txt"
  },
  "/bin/sh": {
    kind: "Shell",
    description: "The system shell interface used by scripts and command execution.",
    example: "sh script.sh"
  },
  "/etc": {
    kind: "Configuration directory",
    description: "Stores system-wide configuration for services, users, networking, package tools, and startup behavior.",
    example: "ls /etc"
  },
  "/etc/ssh": {
    kind: "Configuration directory",
    description: "Contains OpenSSH client and server configuration files.",
    example: "ls /etc/ssh"
  },
  "/etc/passwd": {
    kind: "Configuration file",
    description: "Lists local user accounts and basic account metadata. Password hashes are usually stored separately in /etc/shadow.",
    example: "getent passwd"
  },
  "/etc/shadow": {
    kind: "Protected account file",
    description: "Stores local password hash and password-aging data. It is readable only by privileged users on normal systems.",
    example: "sudo getent shadow"
  },
  "/etc/fstab": {
    kind: "Configuration file",
    description: "Defines filesystems that should be mounted automatically or with known mount options.",
    example: "findmnt --fstab"
  },
  "/etc/hosts": {
    kind: "Configuration file",
    description: "Maps hostnames to IP addresses locally before DNS lookup is needed.",
    example: "cat /etc/hosts"
  },
  "/etc/systemd": {
    kind: "Service configuration directory",
    description: "Contains systemd configuration and unit overrides for services, boot targets, timers, and system behavior.",
    example: "systemctl list-unit-files"
  },
  "/home": {
    kind: "User data directory",
    description: "Contains home directories for regular users. Personal files, shell settings, and app config often live here.",
    example: "ls /home"
  },
  "/home/rani": {
    kind: "User home example",
    description: "An example user home. A real system uses account names from that machine.",
    example: "cd ~"
  },
  "/home/guest": {
    kind: "User home example",
    description: "Another example user home for personal files and user-specific configuration.",
    example: "ls /home/guest"
  },
  "/home/rani/.config": {
    kind: "User configuration directory",
    description: "Common place for per-user application settings following the XDG base-directory style.",
    example: "ls ~/.config"
  },
  "/home/rani/Downloads": {
    kind: "User downloads directory",
    description: "A common user folder for downloaded files. Its exact contents depend on the user.",
    example: "ls ~/Downloads"
  },
  "/root": {
    kind: "Root user home directory",
    description: "Home directory for the root account. It is separate from /home because root may need access even when user home filesystems are unavailable.",
    example: "sudo ls /root"
  },
  "/usr": {
    kind: "Userland software directory",
    description: "Holds most installed programs, libraries, documentation, icons, and shared read-only application data.",
    example: "ls /usr"
  },
  "/usr/bin": {
    kind: "Command directory",
    description: "Contains many normal user commands installed by the system and packages.",
    example: "ls /usr/bin"
  },
  "/usr/sbin": {
    kind: "System command directory",
    description: "Contains non-essential system administration commands installed under the /usr hierarchy.",
    example: "ls /usr/sbin"
  },
  "/usr/lib": {
    kind: "Library directory",
    description: "Contains shared libraries and support files used by installed programs.",
    example: "ls /usr/lib"
  },
  "/usr/include": {
    kind: "Header directory",
    description: "Contains C and C++ header files used when compiling software against system libraries.",
    example: "ls /usr/include"
  },
  "/usr/local": {
    kind: "Local software hierarchy",
    description: "Reserved for software and data installed locally by the administrator, separate from distribution packages.",
    example: "ls /usr/local"
  },
  "/usr/share": {
    kind: "Shared data directory",
    description: "Stores architecture-independent data such as documentation, icons, locale files, and templates.",
    example: "ls /usr/share"
  },
  "/usr/share/man": {
    kind: "Manual page directory",
    description: "Stores manual pages read by the man command.",
    example: "man hier"
  },
  "/var": {
    kind: "Variable data directory",
    description: "Stores data that changes over time, such as logs, caches, queues, databases, and web content.",
    example: "ls /var"
  },
  "/var/log": {
    kind: "Log directory",
    description: "Contains system and service logs used for troubleshooting and auditing.",
    example: "journalctl -xe"
  },
  "/var/cache": {
    kind: "Cache directory",
    description: "Stores cached package data and application caches that can usually be regenerated.",
    example: "du -sh /var/cache"
  },
  "/var/lib": {
    kind: "Variable state directory",
    description: "Stores persistent state data maintained by programs, services, and package managers.",
    example: "ls /var/lib"
  },
  "/var/spool": {
    kind: "Spool directory",
    description: "Stores queued work waiting for later processing, such as mail or print jobs.",
    example: "ls /var/spool"
  },
  "/var/tmp": {
    kind: "Persistent temporary directory",
    description: "Stores temporary files that should usually survive a reboot longer than files in /tmp.",
    example: "ls /var/tmp"
  },
  "/var/www": {
    kind: "Service data directory",
    description: "Common location for web server document roots and hosted site files.",
    example: "ls /var/www"
  },
  "/dev": {
    kind: "Device directory",
    description: "Contains special files that represent disks, terminals, random data, and other device-like interfaces.",
    example: "ls /dev"
  },
  "/dev/sda": {
    kind: "Block device example",
    description: "Represents a disk device on many systems. Actual disk names vary, especially with NVMe or virtual disks.",
    example: "lsblk"
  },
  "/dev/tty": {
    kind: "Terminal device",
    description: "Represents the current controlling terminal for a process.",
    example: "tty"
  },
  "/dev/null": {
    kind: "Special device",
    description: "Discards anything written to it and returns end-of-file when read.",
    example: "command > /dev/null"
  },
  "/proc": {
    kind: "Virtual filesystem",
    description: "Exposes live kernel, system, and process information. Files here are generated by the kernel, not stored on disk.",
    example: "ls /proc"
  },
  "/proc/cpuinfo": {
    kind: "Virtual information file",
    description: "Shows processor details reported by the kernel.",
    example: "cat /proc/cpuinfo"
  },
  "/proc/meminfo": {
    kind: "Virtual information file",
    description: "Shows memory usage and memory capability details reported by the kernel.",
    example: "cat /proc/meminfo"
  },
  "/proc/1234": {
    kind: "Process directory example",
    description: "Example directory for a running process ID. Real numbered directories appear and disappear as processes start and exit.",
    example: "ls /proc/$$"
  },
  "/tmp": {
    kind: "Temporary directory",
    description: "A shared place for short-lived temporary files. Do not use it for important long-term data.",
    example: "mktemp -d"
  },
  "/boot": {
    kind: "Boot directory",
    description: "Contains files needed during the early boot process, commonly including kernels, initramfs images, and bootloader files.",
    example: "ls /boot"
  },
  "/boot/vmlinuz": {
    kind: "Kernel image example",
    description: "A common compressed Linux kernel image name. Exact filenames vary by distribution and kernel version.",
    example: "ls /boot/vmlinuz*"
  },
  "/boot/grub": {
    kind: "Bootloader directory",
    description: "Common location for GRUB bootloader configuration and modules.",
    example: "ls /boot/grub"
  },
  "/sbin": {
    kind: "System command directory",
    description: "Contains commands used for system administration, boot, repair, and maintenance.",
    example: "ls /sbin"
  },
  "/sbin/ip": {
    kind: "Network administration command",
    description: "The ip command manages network interfaces, routes, addresses, and related network state.",
    example: "ip addr"
  },
  "/sbin/fsck": {
    kind: "Filesystem check command",
    description: "The fsck command checks and repairs filesystems. On usr-merged systems this path may be a link into /usr/sbin.",
    example: "sudo fsck -N /dev/sda1"
  },
  "/lib": {
    kind: "Essential library directory",
    description: "Contains essential shared libraries and kernel modules needed by core programs.",
    example: "ls /lib"
  },
  "/lib/modules": {
    kind: "Kernel module directory",
    description: "Stores loadable kernel modules, usually organized by kernel version.",
    example: "ls /lib/modules"
  },
  "/lib/ld-linux.so": {
    kind: "Dynamic linker example",
    description: "Represents the dynamic loader/linker used to start dynamically linked programs. Exact filename varies by architecture.",
    example: "ls /lib*/*ld-linux*"
  },
  "/run": {
    kind: "Runtime directory",
    description: "Stores runtime state created since boot, such as sockets, PID files, locks, and per-user runtime directories.",
    example: "ls /run"
  },
  "/run/user": {
    kind: "Per-user runtime directory",
    description: "Holds runtime files for logged-in users, often exposed through XDG_RUNTIME_DIR.",
    example: "ls /run/user"
  },
  "/run/lock": {
    kind: "Lock directory",
    description: "Stores runtime lock files used to coordinate access to resources.",
    example: "ls /run/lock"
  },
  "/sys": {
    kind: "Virtual kernel filesystem",
    description: "Exposes devices, drivers, and kernel object state through a virtual filesystem.",
    example: "ls /sys"
  },
  "/sys/class": {
    kind: "Device class directory",
    description: "Groups kernel devices by class, such as network, block, input, and power devices.",
    example: "ls /sys/class"
  },
  "/sys/block": {
    kind: "Block device directory",
    description: "Shows block devices known to the kernel, such as disks and loop devices.",
    example: "ls /sys/block"
  },
  "/media": {
    kind: "Removable media directory",
    description: "Common mount point for removable media such as USB drives, memory cards, and external disks.",
    example: "ls /media"
  },
  "/media/usb": {
    kind: "Removable media example",
    description: "Example mount point for a USB drive. Actual names are created by the desktop or administrator.",
    example: "findmnt /media/usb"
  },
  "/mnt": {
    kind: "Manual mount directory",
    description: "A general mount point used by administrators for temporarily attached filesystems.",
    example: "ls /mnt"
  },
  "/mnt/backup": {
    kind: "Manual mount example",
    description: "Example location for a manually mounted backup disk or network filesystem.",
    example: "mount /dev/sdb1 /mnt/backup"
  },
  "/opt": {
    kind: "Optional software directory",
    description: "Used for add-on application software packages that live outside the normal distribution layout.",
    example: "ls /opt"
  },
  "/opt/app": {
    kind: "Optional app example",
    description: "Example self-contained third-party application directory.",
    example: "ls /opt/app"
  },
  "/srv": {
    kind: "Service data directory",
    description: "Contains data served by this system, such as web, FTP, or repository content.",
    example: "ls /srv"
  },
  "/srv/www": {
    kind: "Served web data example",
    description: "Example service data location for website content served by this machine.",
    example: "ls /srv/www"
  }
};

let selectedTreeButton = null;

const treeAliases = {
  password: "/etc/passwd",
  shadow: "/etc/shadow",
  users: "/etc/passwd",
  root: "/root",
  mount: "/etc/fstab",
  mounts: "/etc/fstab",
  logs: "/var/log",
  log: "/var/log",
  web: "/var/www",
  cpu: "/proc/cpuinfo",
  memory: "/proc/meminfo",
  mem: "/proc/meminfo",
  process: "/proc/1234",
  pid: "/proc/1234",
  disk: "/dev/sda",
  terminal: "/dev/tty",
  trash: "/dev/null",
  temp: "/tmp",
  kernel: "/boot/vmlinuz",
  bootloader: "/boot/grub",
  grub: "/boot/grub",
  services: "/etc/systemd",
  service: "/etc/systemd",
  hosts: "/etc/hosts",
  config: "/etc",
  settings: "/home/rani/.config",
  downloads: "/home/rani/Downloads",
  headers: "/usr/include",
  header: "/usr/include",
  manuals: "/usr/share/man",
  manpages: "/usr/share/man",
  local: "/usr/local",
  modules: "/lib/modules",
  module: "/lib/modules",
  linker: "/lib/ld-linux.so",
  runtime: "/run",
  locks: "/run/lock",
  lock: "/run/lock",
  devices: "/sys/class",
  block: "/sys/block",
  usb: "/media/usb",
  backup: "/mnt/backup",
  optional: "/opt",
  app: "/opt/app",
  spool: "/var/spool",
  state: "/var/lib",
  persistenttemp: "/var/tmp"
};

function normalizeTreeQuery(value) {
  return value.toLowerCase().trim().replace(/\s+/g, " ");
}

function pathName(path) {
  if (path === "/") return "/";
  return path.split("/").filter(Boolean).at(-1) || path;
}

function searchTreePath(query) {
  const normalized = normalizeTreeQuery(query);
  if (normalized === "/") return "/";

  const term = normalized.replace(/\/$/, "");
  if (!term) return null;
  if (treeAliases[term]) return treeAliases[term];

  const paths = Object.keys(treeInfo);
  const exactPath = paths.find((path) => path.toLowerCase() === term);
  if (exactPath) return exactPath;

  const exactName = paths.find((path) => pathName(path).toLowerCase() === term);
  if (exactName) return exactName;

  return paths.find((path) => path.toLowerCase().includes(term) || pathName(path).toLowerCase().includes(term)) || null;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function positionTreePanel() {
  if (!treeStage || !treePanel || !selectedTreeButton || treePanel.hidden) return;

  const padding = 24;
  const stageRect = treeStage.getBoundingClientRect();
  const buttonRect = selectedTreeButton.getBoundingClientRect();
  const panelWidth = treePanel.offsetWidth;
  const panelHeight = treePanel.offsetHeight;
  const selectedCenterX = buttonRect.left + buttonRect.width / 2 - stageRect.left;
  const selectedCenterY = buttonRect.top + buttonRect.height / 2 - stageRect.top;
  const visibleWidth = treeStage.clientWidth;
  const visibleHeight = treeStage.clientHeight;
  const openOnRight = selectedCenterX < visibleWidth / 2;
  const leftInViewport = openOnRight ? visibleWidth - panelWidth - padding : padding;
  const topInViewport = clamp(selectedCenterY - panelHeight / 2, padding, Math.max(padding, visibleHeight - panelHeight - padding));

  treePanel.style.left = `${leftInViewport}px`;
  treePanel.style.top = `${topInViewport}px`;
}

function drawTreeCable() {
  if (!treeStage || !treePanel || !treeCable || !treeCablePath || !selectedTreeButton || treePanel.hidden) return;

  const stageRect = treeStage.getBoundingClientRect();
  const buttonRect = selectedTreeButton.getBoundingClientRect();
  const panelRect = treePanel.getBoundingClientRect();
  const startX = buttonRect.left + buttonRect.width / 2 - stageRect.left;
  const startY = buttonRect.top + buttonRect.height / 2 - stageRect.top;
  const endX = panelRect.left + panelRect.width / 2 - stageRect.left;
  const endY = panelRect.top + panelRect.height / 2 - stageRect.top;
  const bendX = startX + (endX - startX) * 0.52;

  treeCable.style.width = `${treeStage.clientWidth}px`;
  treeCable.style.height = `${treeStage.clientHeight}px`;
  treeCable.setAttribute("viewBox", `0 0 ${treeStage.clientWidth} ${treeStage.clientHeight}`);
  treeCablePath.setAttribute("d", `M ${startX} ${startY} C ${bendX} ${startY}, ${bendX} ${endY}, ${endX} ${endY}`);
}

function syncTreePanel() {
  positionTreePanel();
  drawTreeCable();
}

function updateTreeInfo(path) {
  const info = treeInfo[path] || {
    kind: "Filesystem path",
    description: "This path is part of the Linux filesystem tree.",
    example: `ls ${path}`
  };

  treeTitle.textContent = path;
  treeDescription.textContent = info.description;
  treeKind.textContent = info.kind;
  treeExample.textContent = info.example;

  treeButtons.forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.treePath === path);
    if (button.dataset.treePath === path) selectedTreeButton = button;
  });

  if (treePanel) treePanel.hidden = false;
  if (treeCable) treeCable.hidden = false;
  requestAnimationFrame(syncTreePanel);
}

function selectTreePath(path, { scroll = false } = {}) {
  const button = treeButtons.find((item) => item.dataset.treePath === path);
  if (!button) return false;

  if (scroll) {
    button.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
  }

  updateTreeInfo(path);
  return true;
}

function closeTreeInfo() {
  if (treePanel) treePanel.hidden = true;
  if (treeCable) treeCable.hidden = true;
  selectedTreeButton = null;
  treeButtons.forEach((button) => {
    button.classList.remove("is-selected");
  });
}

if (treeButtons.length && treeStage && treeScroll && treePanel && treeTitle && treeDescription && treeKind && treeExample) {
  treeButtons.forEach((button) => {
    button.addEventListener("click", () => updateTreeInfo(button.dataset.treePath || "/"));
  });

  treeSearchForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = treeSearchInput?.value || "";
    const match = searchTreePath(query);

    if (!match || !selectTreePath(match, { scroll: true })) {
      if (treeSearchStatus) treeSearchStatus.textContent = `No tree match for "${query.trim()}". Try passwd, fstab, ls, log, dev, or proc.`;
      return;
    }

    if (treeSearchStatus) treeSearchStatus.textContent = `${query.trim()} is stored at ${match}.`;
  });

  treeClose?.addEventListener("click", closeTreeInfo);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeTreeInfo();
  });

  document.addEventListener("pointerdown", (event) => {
    if (treePanel.hidden) return;
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (treePanel.contains(target) || treeSearchForm?.contains(target) || treeButtons.some((button) => button.contains(target))) return;
    closeTreeInfo();
  });

  window.addEventListener("resize", syncTreePanel);
  treeScroll.addEventListener("scroll", drawTreeCable);
}
