# Json Sorter

Sort keys of a Json file in alphabetical order.

## Running the script

To sort an input file and write the output to a copy of that file, run the following command from within this directory

```bash
# using node
node index.js <input file>

# using npm (exec)
npx ./

# or simply as executable
./index.js
```

The script takes arguments. For more information, run

```
node index.js -h
```

## Example

Running the command on the provided example file `example.json`

```bash
node index.js ./example.json
```

will sort the file and write it to a new file called `example_copy.json`. If the copy already exists, it will be overwritten.

Adding an output file will create a new file in this directory containing the sorted json (or overwrite it, if it already exists).

```bash
node index.js ./example.json ./example_out
```
