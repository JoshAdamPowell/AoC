import FileReader from "../FileReader";
import Day from "../templates/Day";

export default class Day1 implements Day{
    day = 1
    getPartOne = (): number => {
        const elves = this.getSortedElves()
        return elves[elves.length - 1]
    }

    getPartTwo = (): number => {
        const elves = this.getSortedElves()
        return elves[elves.length - 1] + elves[elves.length - 2] + elves[elves.length - 3]
    }

    getSortedElves = (): number[] => {
        const input = FileReader.getNumericData(this.day.toLocaleString())
        const elves = input.reduce((acc, cur) => {
            if (!isNaN(cur)) {
                acc[acc.length - 1] += cur
            } else {
                acc.push(0)
            }
            return acc;
        }, [0])
        elves.sort((a, b) => a - b)
        return elves;
    }
}