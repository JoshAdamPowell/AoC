import FileReader from "../FileReader";
import Day from "../templates/Day";
import util from "util"

export default class Day7 implements Day {
    day = 7
    getPartOne = (): number => {
        const input = FileReader.getStringData(this.day.toLocaleString())
        const files = { "/": {}}
        const currentPath :string[] = []
        for (let i = 0; i < input.length; i++) {
            const currentLine = input[i]
            if (currentLine === "$ cd ..") {
                currentPath.pop();
                continue;
            }
            if (currentLine === "$ ls") continue;
            // matches "cd myFile" or "cd /"
            const regex = /\$ cd (\w+|\/)/
            if (currentLine.match(regex)) {
                const [_, dir] = Array.from(currentLine.match(regex)!)
                currentPath.push(dir)
                continue;
            }
            let currentFile: any = files;
            currentPath.forEach(x => {
                currentFile = currentFile[x]
            })
            // matches "dir myDir"
            const dirRegex = /dir (\w+)/
            if (currentLine.match(dirRegex)) {
                const [_, dirName] = Array.from(currentLine.match(dirRegex)!)
                currentFile[dirName] = {}
                continue;
            }
            // matches 6075 myFile.zip
            const fileRegex = /(\d+) (\w+.\w+)/
            console.log(currentLine)
            const [_, size, name] = Array.from(currentLine.match(fileRegex)!)
            currentFile[name] = size
        }
        console.log(util.inspect(files, false, null, true))
        throw new Error("Method not implemented.");

    }

    getPartTwo = (): number => {
        throw new Error("Method not implemented.");
    }
}