import FileReader from "../FileReader";
import Day from "../templates/Day";

export default class DayTemplate implements Day{
    day = 1

    getPartOne = (): number => {
        const input = FileReader.getStringData(this.day.toLocaleString())
        const numbers = input.map(line => {
            const numbersOnly = line.replace(/\D/g, "").split("");
            const first = numbersOnly.shift()?.toString() || ""
            const last = numbersOnly.pop()?.toString() || first;
            return parseInt(first + last);
        })
        const result = numbers.reduce((acc, curr) => {
            return acc + curr;
        })
        return result;
    }

    getPartTwo = (): number => {
        const input = FileReader.getStringData(this.day.toLocaleString())
        const numbers = input.map((line, i) => {

            line = line.replaceAll("eight", "e8t");
            line = line.replaceAll("one", "o1e");
            line = line.replaceAll("two", "t2o");
            line = line.replaceAll("three", "t3e");
            line = line.replaceAll("four", "f4r");
            line = line.replaceAll("five", "f5e");
            line = line.replaceAll("six", "s6x");
            line = line.replaceAll("seven", "s7n");
            line = line.replaceAll("nine", "n9e");
            const numbersOnly = line.replace(/\D/g, "").split("");
            const first = numbersOnly.shift()?.toString() || ""
            const last = numbersOnly.pop()?.toString() || first;
            return parseInt(first + last);

        })
        const result = numbers.reduce((acc, curr) => {
            return acc + curr;
        }, 0)
        return result;
    }
}