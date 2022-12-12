import FileReader from "../FileReader";
import Day from "../templates/Day";
export default class Day4 implements Day {

    day = 4
    getPartOne = (): number => {
        const inputRegex = /(\d+)-(\d+),(\d+)-(\d+)/
        const input = FileReader.getStringData(this.day.toLocaleString())
        let overlaps = 0;
        for(let i=0; i<input.length; i++) {
            const [blank, a1, a2, b1, b2] = Array.from(input[i].match(inputRegex)!, x => parseInt(x))
            if (a1 >= b1 && a2 <= b2){
                overlaps++
                continue;
            }
            if (a1 <= b1 && a2 >= b2) {
                overlaps++;
                continue;
            }
        }
        return overlaps
    }

    getPartTwo = (): number => {
        const inputRegex = /(\d+)-(\d+),(\d+)-(\d+)/
        const input = FileReader.getStringData(this.day.toLocaleString())
        let overlaps = 0;
        for(let i=0; i<input.length; i++) {
            const [blank, a1, a2, b1, b2] = Array.from(input[i].match(inputRegex)!, x => parseInt(x))
            if (a2 >= b1 && a1 <= b1){
                overlaps++
                continue;
            }
            if (b2 >= a1 && b1 <= a1) {
                overlaps++;
                continue;
            }
        }
        return overlaps
    }
}