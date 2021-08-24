const fs = require("fs")
const sorter = require("json-keys-sort")

console.log("hi")

const args = process.argv
const path = args[2]
console.log(path)

fs.readFile(path, (err, data) => {
    const json = JSON.parse(data)
    console.log(json)
    const json_sorted = sorter.sort(json, true)
    console.log(json_sorted)
    const jsonText = JSON.stringify(json_sorted, null, 2)
    fs.writeFile(path, jsonText, () => console.log("DONE!"))
})
