import FileReader from "../FileReader";
import Day from "../templates/Day";

export default class Day3 implements Day {
    day = 3
    getPartOne = (): number => {
        const input = FileReader.getStringData(this.day.toLocaleString())
        let result = 0;
        input.forEach(line => {
            const [first, second] = this.splitStringInTwo(line)
            const common = this.findCommonChar(first, second)
            result += this.getPointsFromLetter(common)
        })

        return result;
    }

    getPartTwo = (): number => { 
        const input = FileReader.getStringData(this.day.toLocaleString())
        let result = 0;
        for (let i=0; i< input.length; i = i+3) {
            const common = this.findCommonCharOfThree(Array.from(input[i]), Array.from(input[i+1]), Array.from(input[i+2]))
            result += this.getPointsFromLetter(common)
        }
        return result
    }

    splitStringInTwo = (inp: string): [string[], string[]] => {
        const stringAsArray = Array.from(inp)
        const second = stringAsArray.splice(stringAsArray.length/2)
        return [stringAsArray, second]
    }

    findCommonChar = (a: string[], b: string[]): string => {
        for (let i=0; i<a.length; i++) {
            for( let j=0; j<b.length; j++){
                if(a[i] === b[j]) {
                    return a[i]
                }
            }
        }
        throw "oops"
    }

    findCommonCharOfThree = (a:string[], b:string[], c: string[]) => {
        for (let i=0; i<a.length; i++) {
            for( let j=0; j<b.length; j++){
                for (let k=0; k<c.length; k++) {
                    if(a[i] === b[j] && b[j] == c[k]) {
                        return a[i]
                    }
                }
            }
        }
        throw "oops"
    }

    getPointsFromLetter = (letter: string): number => {
        if (letter === letter.toLocaleLowerCase()) {
            return letter.charCodeAt(0) - 96
        }
        return letter.charCodeAt(0) - 38
    }
}