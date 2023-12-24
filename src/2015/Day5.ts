import FileReader from "../FileReader";
import Day from "../templates/Day";

export default class DayTemplate implements Day{
    // reserved for day variable
    day = 0
    getPartOne = (): number => {
        const input = FileReader.getStringData(this.day.toLocaleString())
        throw new Error("Method not implemented.");
    }

    getPartTwo = (): number => {
        throw new Error("Method not implemented.");
    }
}