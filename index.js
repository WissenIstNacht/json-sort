const fs = require("fs/promises")
const sorter = require("json-keys-sort")

const args = process.argv
const path = args[2]

console.info("Reading Json from file at: " + path)

fs.readFile(path)
	.then((data) => {
		const json = JSON.parse(data)
		console.log("The following object was read from file:")
		console.log(json)
		return sorter.sort(json, true)
	})
	.then((json_sorted) => {
		console.log(json_sorted)
		const jsonText = JSON.stringify(json_sorted, null, 2)
		fs.writeFile(path, jsonText)
	})
	.then(() => {
		console.log("DONE!")
	})
	.catch((e) => console.error("The following error occurred", e))
