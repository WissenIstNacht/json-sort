const fs = require("fs/promises")
const sorter = require("json-keys-sort")

const args = process.argv
const path = args[2]
const pathOut = args[3]
const LCINFO = "\x1b[36m%s\x1b[0m" //cyan

console.info(LCINFO, "Reading Json from file at: " + path)
console.log("")

fs.readFile(path)
	.then((data) => {
		const json = JSON.parse(data)
		console.log(LCINFO, "The following object was read from file:")
		console.log(json)
		console.log("")

		return sorter.sort(json, true)
	})
	.then((json_sorted) => {
		console.log(LCINFO, "This object will be written to file:")
		console.log(json_sorted)
		console.log("")

		const jsonText = JSON.stringify(json_sorted, null, 2)
		if (!pathOut) {
			const parts = path.split(".json")
			const copiedPath = parts[0] + "_copy.json"
			console.info(LCINFO, "Writing Json from file at: " + copiedPath)
			console.log("")

			return fs.writeFile(copiedPath, jsonText)
		} else {
			console.info(LCINFO, "Writing Json from file at: " + pathOut)
			console.log("")

			return fs.writeFile(pathOut, jsonText)
		}
	})
	.then(() => {
		console.log(LCINFO, "DONE!")
	})
	.catch((e) => console.error("The following error occurred", e))
