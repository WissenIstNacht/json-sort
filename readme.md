# Json Sorter

Sort keys of a Json file in ascending order.

## Running the script

From within this directory, run the following command

```
node index.js <input file> [<output file>]
```

The output file is optional. If not provided, the output will be written to a
copy of the input file.

## Example

Running the command on the provided example file `example.json`

```
node index.js ./example.json
```

will sort the file and write it to a new file called `example_copy.json`. If the copy already exists, it will be overwritten.

Adding an output file will create a new file in this directory containing the
sorted json (or overwrite it, if it already exists).

```
node index.js ./example.json ./example_out
```
