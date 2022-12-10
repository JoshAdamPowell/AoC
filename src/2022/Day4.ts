import FileReader from "../FileReader";
import Day from "../templates/Day";
export default class Day4 implements Day {

    day = 4
    getPartOne = (): number => {
        const inputRegex = /(\d+)-(\d+),(\d+)-(\d+)/
        const input = FileReader.getStringData(this.day.toLocaleString())
        let overlaps = 0;
        for(let i=0; i<input.length; i++) {
            const [blank, a1, a2, b1, b2] = input[i].match(inputRegex)!
            const a1n = parseInt(a1)
            const a2n = parseInt(a2)
            const b1n = parseInt(b1)
            const b2n = parseInt(b2)
            if (a1n >= b1n && a2n <= b2n){
                overlaps++
                continue;
            }
            if (a1n <= b1n && a2n >= b2n) {
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
            const [blank, a1, a2, b1, b2] = input[i].match(inputRegex)!
            const a1n = parseInt(a1)
            const a2n = parseInt(a2)
            const b1n = parseInt(b1)
            const b2n = parseInt(b2)
            if (a2n >= b1n && a1n <= b1n){
                overlaps++
                continue;
            }
            if (b2n >= a1n && b1n <= a1n) {
                overlaps++;
                continue;
            }
        }
        return overlaps
    }
}