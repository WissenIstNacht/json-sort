# Json Sorter

Sort keys of a Json file in ascending order.

## Running the script

From within this directory, run the following command

```
node index.js <input file> [<output file>]
```

## Example

Running the command on the provided example file `example.json`

```
node index.js ./example.json
```

will sort it in place. Adding an output file will create a new file in this directory containing the sorted json (or overwrite it, if it already exists.)

```
node index.js ./example.json ./example_out
```
