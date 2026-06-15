import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const sourceDir = process.argv[2] || "/tmp/linux-command-source/command";
const targetDir = path.join(process.cwd(), "content", "commands");

const explicit = new Map([
  ["ab", ["Benchmark Apache HTTP server performance.", "Network"]],
  ["ack", ["Search source code with an ack-style text searcher.", "Text"]],
  ["ag", ["Search source code quickly with The Silver Searcher.", "Text"]],
  ["apachectl", ["Control and inspect the Apache HTTP server.", "System"]],
  ["apropos", ["Search manual page names and descriptions.", "Help"]],
  ["ar", ["Create, modify, and inspect Unix archive files.", "Development"]],
  ["arch", ["Print the machine hardware architecture.", "System"]],
  ["at", ["Schedule a command to run once at a later time.", "System"]],
  ["atq", ["List queued jobs scheduled with at.", "System"]],
  ["atrm", ["Remove jobs scheduled with at.", "System"]],
  ["badblocks", ["Check a disk device for bad blocks.", "Disk"]],
  ["batch", ["Run commands later when system load permits.", "System"]],
  ["bc", ["Run an arbitrary precision calculator language.", "Shell"]],
  ["break", ["Exit from a shell loop.", "Shell"]],
  ["builtin", ["Run a shell builtin explicitly.", "Shell"]],
  ["cal", ["Display a calendar in the terminal.", "System"]],
  ["chattr", ["Change extended file attributes on Linux filesystems.", "Files"]],
  ["chcon", ["Change SELinux security context for files.", "Security"]],
  ["chfn", ["Change user finger information.", "Permissions"]],
  ["chpasswd", ["Update passwords in batch mode.", "Permissions"]],
  ["chroot", ["Run a command with a different root directory.", "System"]],
  ["chsh", ["Change a user's login shell.", "Permissions"]],
  ["command", ["Run a command while bypassing shell functions.", "Shell"]],
  ["continue", ["Resume the next iteration of a shell loop.", "Shell"]],
  ["cpio", ["Copy files into or out of cpio archives.", "Archives"]],
  ["declare", ["Declare shell variables and attributes.", "Shell"]],
  ["depmod", ["Generate kernel module dependency files.", "System"]],
  ["dhclient", ["Request or renew an IP address using DHCP.", "Network"]],
  ["diff3", ["Compare three files line by line.", "Text"]],
  ["dircolors", ["Configure colors used by ls.", "Shell"]],
  ["dirs", ["Display the shell directory stack.", "Shell"]],
  ["dos2unix", ["Convert text files from DOS line endings to Unix format.", "Text"]],
  ["e2fsck", ["Check ext2, ext3, and ext4 filesystems.", "Disk"]],
  ["eject", ["Eject removable media.", "Disk"]],
  ["enable", ["Enable or disable shell builtins.", "Shell"]],
  ["ethtool", ["Display or change Ethernet device settings.", "Network"]],
  ["exec", ["Replace the shell with another command.", "Shell"]],
  ["exit", ["Exit the current shell or script.", "Shell"]],
  ["expand", ["Convert tabs to spaces.", "Text"]],
  ["expr", ["Evaluate expressions in shell scripts.", "Shell"]],
  ["false", ["Return an unsuccessful exit status.", "Shell"]],
  ["fc", ["Edit and rerun shell history commands.", "Shell"]],
  ["fgrep", ["Search fixed strings in text.", "Text"]],
  ["filefrag", ["Report file fragmentation.", "Disk"]],
  ["finger", ["Show user information.", "System"]],
  ["firewall-cmd", ["Manage firewalld firewall rules.", "Network"]],
  ["fmt", ["Reformat paragraph text.", "Text"]],
  ["fold", ["Wrap input lines to a specified width.", "Text"]],
  ["fping", ["Ping multiple hosts efficiently.", "Network"]],
  ["ftp", ["Transfer files with the File Transfer Protocol.", "Network"]],
  ["gcc", ["Compile C and related source code.", "Development"]],
  ["gdb", ["Debug programs with the GNU Debugger.", "Development"]],
  ["getcap", ["Show file capabilities.", "Security"]],
  ["getenforce", ["Show the current SELinux enforcement mode.", "Security"]],
  ["getent", ["Query system databases such as passwd, group, and hosts.", "System"]],
  ["getfacl", ["Display file access control lists.", "Permissions"]],
  ["gpasswd", ["Administer group passwords and membership.", "Permissions"]],
  ["gpg", ["Encrypt, decrypt, sign, and verify data with GnuPG.", "Security"]],
  ["grub2-mkconfig", ["Generate a GRUB 2 bootloader configuration.", "System"]],
  ["halt", ["Stop the system.", "System"]],
  ["hdparm", ["View or tune hard disk parameters.", "Disk"]],
  ["help", ["Show help for shell builtins.", "Help"]],
  ["hping3", ["Craft and send custom TCP/IP packets.", "Network"]],
  ["htop", ["Display an interactive process viewer.", "Processes"]],
  ["htpasswd", ["Manage Apache password files.", "Security"]],
  ["hwclock", ["Read or set the hardware clock.", "System"]],
  ["ifdown", ["Bring a network interface down.", "Network"]],
  ["ifstat", ["Show network interface statistics.", "Network"]],
  ["ifup", ["Bring a network interface up.", "Network"]],
  ["info", ["Read GNU info documentation.", "Help"]],
  ["init", ["Initialize or change system runlevel on init systems.", "System"]],
  ["inotifywait", ["Wait for filesystem events.", "Files"]],
  ["insmod", ["Insert a kernel module.", "System"]],
  ["install", ["Copy files and set attributes.", "Files"]],
  ["ipcalc", ["Calculate IP network information.", "Network"]],
  ["ipcrm", ["Remove System V IPC objects.", "System"]],
  ["ipcs", ["Show System V IPC objects.", "System"]],
  ["iperf", ["Measure network throughput.", "Network"]],
  ["journalctl", ["Read and filter systemd journal logs.", "Logs"]],
  ["last", ["Show recent login sessions.", "System"]],
  ["lastb", ["Show failed login attempts.", "Security"]],
  ["lastlog", ["Show last login information for users.", "System"]],
  ["ldconfig", ["Configure dynamic linker runtime bindings.", "System"]],
  ["ldd", ["Print shared library dependencies.", "Development"]],
  ["let", ["Evaluate arithmetic expressions in the shell.", "Shell"]],
  ["locale", ["Show or set locale information.", "System"]],
  ["locate", ["Find files using a filename database.", "Files"]],
  ["logger", ["Write messages to the system log.", "Logs"]],
  ["login", ["Start a user login session.", "Permissions"]],
  ["logrotate", ["Rotate, compress, and manage log files.", "Logs"]],
  ["look", ["Display lines beginning with a string.", "Text"]],
  ["lp", ["Print files.", "Printing"]],
  ["lpq", ["Show print queue status.", "Printing"]],
  ["lpr", ["Print files with BSD-style printing commands.", "Printing"]],
  ["lprm", ["Remove jobs from a print queue.", "Printing"]],
  ["lpstat", ["Show printer and print job status.", "Printing"]],
  ["lsof", ["List open files and the processes using them.", "Processes"]],
  ["lspci", ["List PCI devices.", "System"]],
  ["lsusb", ["List USB devices.", "System"]],
  ["ltrace", ["Trace library calls made by a process.", "Development"]],
  ["make", ["Build software from Makefiles.", "Development"]],
  ["mdadm", ["Manage Linux software RAID arrays.", "Disk"]],
  ["mktemp", ["Create temporary files or directories safely.", "Files"]],
  ["more", ["View text one screen at a time.", "Text"]],
  ["mysql", ["Open a MySQL client session.", "Databases"]],
  ["mysqldump", ["Back up MySQL databases.", "Databases"]],
  ["nmcli", ["Manage NetworkManager connections.", "Network"]],
  ["passwd", ["Change a user's password.", "Permissions"]],
  ["popd", ["Remove a directory from the shell directory stack.", "Shell"]],
  ["pushd", ["Add a directory to the shell directory stack.", "Shell"]],
  ["read", ["Read input into shell variables.", "Shell"]],
  ["reboot", ["Restart the system.", "System"]],
  ["return", ["Return from a shell function.", "Shell"]],
  ["scp", ["Copy files between machines over SSH.", "Network"]],
  ["set", ["Show or set shell options and positional parameters.", "Shell"]],
  ["shift", ["Shift shell positional parameters.", "Shell"]],
  ["shopt", ["Set Bash shell options.", "Shell"]],
  ["shutdown", ["Shut down or reboot the system.", "System"]],
  ["source", ["Run shell commands from a file in the current shell.", "Shell"]],
  ["strace", ["Trace system calls and signals.", "Development"]],
  ["sync", ["Flush filesystem buffers.", "Disk"]],
  ["test", ["Evaluate conditional expressions.", "Shell"]],
  ["time", ["Measure command execution time.", "Shell"]],
  ["times", ["Show shell and child process times.", "Shell"]],
  ["true", ["Return a successful exit status.", "Shell"]],
  ["ulimit", ["Show or set shell resource limits.", "Shell"]],
  ["umask", ["Set default file permission mask.", "Permissions"]],
  ["unalias", ["Remove shell aliases.", "Shell"]],
  ["unset", ["Unset shell variables or functions.", "Shell"]],
  ["users", ["Show logged-in users.", "System"]],
  ["wall", ["Broadcast a message to logged-in users.", "System"]],
  ["whereis", ["Locate binary, source, and manual files.", "Shell"]],
  ["yes", ["Repeatedly print a string.", "Shell"]]
]);

const categoryRules = [
  ["Packages", /^(apt|apt-|aptitude|apk|dnf|dpkg|yum|rpm|pacman|snap|flatpak|createrepo)/],
  ["Network", /(arp|dns|domain|dhcp|ftp|host|if|ip|net|ping|route|ssh|tcp|tftp|trace|wget|curl|nmap|firewall|iptables|hping|iperf|nmcli)/],
  ["Permissions", /(user|group|passwd|chage|chfn|chsh|chmod|chown|chgrp|gpasswd|sudo|su|umask|getfacl|setfacl)/],
  ["Disk", /(blk|disk|dump|e2|fdisk|fsck|hdparm|lv|mount|part|quota|raid|swap|sync|tune2fs|xfs|mkfs)/],
  ["Archives", /(7z|arj|bz|compress|cpio|gz|rar|tar|unzip|xz|zip)/],
  ["Text", /(awk|cat|col|comm|csplit|diff|ed|egrep|expand|fgrep|fmt|fold|grep|head|iconv|less|look|more|paste|sed|sort|split|tail|tr|uniq|wc)/],
  ["Development", /(as|gcc|gcov|gdb|git|ld|ltrace|make|obj|patch|strace)/],
  ["Security", /(cap|chcon|getenforce|getsebool|gpg|openssl|selinux|semanage|setenforce|sha|md5|htpasswd)/],
  ["Processes", /(atop|bg|fg|jobs|kill|nice|nohup|pgrep|pkill|ps|pstree|renice|top|wait)/],
  ["Shell", /(alias|bind|break|builtin|command|continue|declare|dirs|disown|enable|eval|exec|exit|fc|help|let|popd|pushd|read|return|set|shift|shopt|source|test|time|times|trap|true|false|type|ulimit|unalias|unset|yes)/],
  ["Printing", /^(cancel|cups|lp|lpr|lpq|lprm|lpstat)/],
  ["Logs", /(journal|last|logger|logrotate|syslog)/],
  ["Databases", /(mysql|psql|redis|mongo)/]
];

const tagByCategory = {
  Archives: ["archive", "compress", "extract"],
  Databases: ["database", "client", "backup"],
  Development: ["development", "debug", "build"],
  Disk: ["disk", "filesystem", "storage"],
  Files: ["files", "directories", "path"],
  Help: ["help", "manual", "reference"],
  Logs: ["logs", "system", "troubleshoot"],
  Network: ["network", "connectivity", "admin"],
  Packages: ["package", "install", "update"],
  Permissions: ["user", "permissions", "admin"],
  Printing: ["printer", "queue", "jobs"],
  Processes: ["process", "monitor", "signal"],
  Security: ["security", "policy", "verify"],
  Shell: ["shell", "script", "builtin"],
  System: ["system", "admin", "inspect"],
  Text: ["text", "filter", "format"]
};

const escapeFence = (value) => value.replaceAll("`", "\\`");

function infer(command) {
  if (explicit.has(command)) return explicit.get(command);
  for (const [category, pattern] of categoryRules) {
    if (pattern.test(command)) return [`Reference entry for the ${command} command.`, category];
  }
  return [`Reference entry for the ${command} command.`, "System"];
}

function markdown(command) {
  const [summary, category] = infer(command);
  const tags = tagByCategory[category] || tagByCategory.System;
  const escaped = escapeFence(command);
  return `---
name: ${command}
summary: ${summary}
category: ${category}
tags: ${tags.join(", ")}
popular: false
---

## Common Options

- \`--help\`: Show command help when supported.
- \`--version\`: Show version information when supported.

## Examples

\`\`\`bash
${escaped} --help
man ${escaped}
\`\`\`

## Notes

This page was added from the expanded linux-command coverage list so the command is searchable in the handbook. Options vary by distribution and package version, so use \`man ${escaped}\`, \`${escaped} --help\`, or the package documentation for exact syntax.
`;
}

let sourceFiles;
try {
  sourceFiles = (await readdir(sourceDir)).filter((file) => file.endsWith(".md"));
} catch {
  console.error(`Source directory not found: ${sourceDir}. Pass the correct path as the first argument.`);
  process.exit(1);
}

const targetFiles = new Set((await readdir(targetDir)).filter((file) => file.endsWith(".md")));

const explicitMissing = [...explicit.keys()].filter((cmd) => !targetFiles.has(`${cmd}.md`));
for (const cmd of explicitMissing) {
  await writeFile(path.join(targetDir, `${cmd}.md`), markdown(cmd), "utf8");
  targetFiles.add(`${cmd}.md`);
}

let created = 0;

for (const file of sourceFiles) {
  if (targetFiles.has(file)) continue;
  const command = path.basename(file, ".md");
  await writeFile(path.join(targetDir, file), markdown(command), "utf8");
  created += 1;
}

created += explicitMissing.length;

console.log(`Created ${created} command pages from missing coverage (${explicitMissing.length} from explicit map).`);
