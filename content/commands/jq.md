---
name: jq
summary: Process and transform JSON data from the command line.
category: Text
tags: json, filter, transform, query, data
popular: true
---

## Additional Notes

`jq` is a lightweight JSON processor that lets you parse, filter, map, and transform structured JSON data. It works like `sed` or `awk` but is designed specifically for JSON. It can read from files or pipes and write formatted output to stdout.

It is essential for working with APIs, configuration files, logs, and any JSON-based tooling. You can extract specific fields, reshape objects, filter arrays, and build complex transformations using a simple domain-specific language of filters and operators.

## Syntax

```bash
jq [options] filter [file...]
command | jq [options] filter
```

## Parameters

- `filter`: The jq expression to apply. Enclose in single quotes to prevent shell expansion.
- `file`: One or more JSON files to process. Reads from stdin if no file is given.

## Common Options

- `-c`, `--compact-output`: Output each JSON object on a single line.
- `-r`, `--raw-output`: Output strings directly without JSON quoting. Useful for extracting plain text.
- `-f file`, `--from-file file`: Read the filter from a file.
- `-n`, `--null-input`: Start with `null` input instead of reading stdin. Used with generators.
- `-M`, `--monochrome-output`: Disable colored output.
- `-s`, `--slurp`: Read the entire input stream as one array.
- `--arg name value`: Set a variable for use in the filter.
- `-e`, `--exit-status`: Set exit status to 0 if the last output value is not `false` or `null`.

## Filters

- `.`: Identity operator, outputs the entire input.
- `.key`, `.key1.key2`: Access object properties.
- `.[]`: Iterate over array elements.
- `.[index]`: Access array element by index.
- `.[start:end]`: Array slicing.
- `,`: Combine two filters; outputs the results of both.
- `|`: Pipe output of one filter into another.
- `select(condition)`: Keep elements matching a condition.
- `map(expression)`: Apply an expression to each array element.
- `group_by(expression)`: Group array elements by a key.
- `{foo: .bar}`: Construct a new object with renamed keys.
- `length`: Get the length of strings, arrays, or objects.
- `keys`: Get the keys of an object.

## Examples

```bash
jq '.' file.json
```

Pretty-print a JSON file.

```bash
cat data.json | jq '.users'
```

Extract the `users` array from a JSON object.

```bash
jq -r '.name' package.json
```

Extract the `name` field from `package.json` as raw text (no quotes).

```bash
jq '.users[] | select(.age > 18)' data.json
```

List users older than 18.

```bash
jq '[.users[].name]' data.json
```

Create an array of all user names.

```bash
curl https://api.example.com/data | jq '.results[:5]'
```

Fetch JSON from an API and show only the first 5 results.

```bash
jq -s '.[0] * .[1]' file1.json file2.json
```

Merge two JSON files by slurping them into an array and using the `*` merge operator.

```bash
jq --arg key "foo" '.[$key]' data.json
```

Access a property whose name is stored in a shell variable.

## Practical Notes

- Always wrap jq filters in single quotes to avoid shell interpretation of `$`, `|`, and other special characters.
- Use `-r` when you need plain text output for piping into other commands.
- For large files, `jq` streams input and does not load the entire file into memory.
- Use `jq -e` in scripts to check if a value exists or matches a condition via the exit code.
- Complex filters can be stored in a file with `-f` for reuse.

