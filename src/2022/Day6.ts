import FileReader from "../FileReader";
import Day from "../templates/Day";

export default class Day6 implements Day {
    day = 6
    getPartOne = (): number => {
        const input = Array.from(FileReader.getStringData(this.day.toLocaleString())[0])
        for (let i = 3; i < input.length; i++) {
            if (input[i] === input[i - 1]) continue;
            if (input[i] === input[i - 2]) continue;
            if (input[i] === input[i - 3]) continue;
            if (input[i - 1] === input[i - 2]) continue;
            if (input[i - 1] === input[i - 3]) continue;
            if (input[i - 2] === input[i - 3]) continue;
            return i + 1
        }
        throw new Error("Not found");
    }

    getPartTwo = (): number => {
        const input = Array.from(FileReader.getStringData(this.day.toLocaleString())[0])
        for (let i = 13; i < input.length; i++) {
            const testString = input.slice(i - 13, i + 1)
            const result = this.areAllCharactersUnique(testString)
            if (result) {
                return i + 1
            }

        }
        throw new Error("Method not implemented.");
    }

    areAllCharactersUnique = (input: string[]): boolean => {
        const uniqueLetters = new Set();
            for (let i = 0; i < input.length; i++) {
                const oldLength = uniqueLetters.size
                uniqueLetters.add(input[i])
                const newLength = uniqueLetters.size
                if (oldLength !== newLength) {
                    continue;
                }
                return false;
            }
        return true;
    }
}