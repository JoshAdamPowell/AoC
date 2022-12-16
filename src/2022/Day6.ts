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
        throw new Error("Method not implemented.");
    }

    getPartTwo = (): number => {
        throw new Error("Method not implemented.");
    }
}