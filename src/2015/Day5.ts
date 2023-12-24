import FileReader from "../FileReader";
import Day from "../templates/Day";

export default class DayTemplate implements Day{
    // reserved for day variable
    day = 5

    isStringNice = (str: string): boolean => {
        const vowelRegex = /[aeiou]/g
        const vowels = [...str.matchAll(vowelRegex)];
        const amountOfVowels = vowels.length
        if (amountOfVowels < 3) {
            return false;
        }
        
        if (!this.doesStringHavePair(str)) {
            return false;
        }
        
        if (this.doesStringContainCursedWords(str)) {
            return false;
        }

        return true;
    }

    doesStringHavePair = (str: string): boolean => {
        const letters = str.split("")
        for (let i = 0; i < letters.length; i++) {
            if (letters[i] === letters[i + 1]) {
                return true;
            }
        }
        return false;
    }

    doesStringContainCursedWords = (str: string): boolean => {
        const curses = ["ab", "cd", "pq", "xy"];
        
        for (let i = 0; i <= curses.length; i++) {
            if (str.includes(curses[i])) {
                return true;
            }
        }
        return false;
    }

    isStringActuallyNiceThough = (str: string): boolean => {
        if (!this.doesStringContainDoublePair(str)) {
            return false;
        }
        
        if (!this.doesStringContainAnXYXCombo(str)) {
            return false;
        }
        return true;
    }

    doesStringContainAnXYXCombo = (str: string): boolean => {
        const letters = str.split("");
        for (let i = 0; i < letters.length - 1; i++) {
            if (letters[i] === letters[i + 2]) {
                return true;
            }
        }
        return false;
    }

    doesStringContainDoublePair = (str: string): boolean => {
        const letters = str.split("");
        for (let i = 0; i < letters.length; i++) {
            const strToCheck = letters[i] + letters [i + 1];
            if (str.includes(strToCheck, i + 2)) {
                return true;
            }
        }
        return false;
    }

    getPartOne = (): number => {
        const input = FileReader.getStringData(this.day.toLocaleString())
        const niceStrings = input.filter((x) => this.isStringNice(x))
        return niceStrings.length;
    }

    getPartTwo = (): number => {
        const input = FileReader.getStringData(this.day.toLocaleString())
        const niceStrings = input.filter((x) => this.isStringActuallyNiceThough(x))
        return niceStrings.length;
    }
}