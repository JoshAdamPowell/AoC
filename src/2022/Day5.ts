import FileReader from "../FileReader";
import Day from "../templates/Day";

export default class Day5 implements Day {
    day = 5
    // I want the stacks array to be one-indexed so theres an empty array first
    stacks = [[], Array.from("WTHPJCF").reverse(),
    Array.from("HBJZFVRG").reverse(),
    Array.from("RTPH").reverse(),
    Array.from("THPNSZ").reverse(),
    Array.from("DCJHZFVN").reverse(),
    Array.from("ZDWFGMP").reverse(),
    Array.from("PDJSWZVM").reverse(),
    Array.from("SDN").reverse(),
    Array.from("MFSZD").reverse()]

    getPartOne = (): string => {
    //    const regex =  /move (\d+) from (\d+) to (\d+)/
    //    const input = FileReader.getStringData(this.day.toLocaleString())
    //    input.forEach(x => {
    //     const [_, amount, from, to] = Array.from(x.match(regex)!, x => parseInt(x))
    //     for (let i =0; i < amount; i++) {
    //         console.log(this.stacks[from])
    //         const moving = this.stacks[from].pop()
    //         this.stacks[to].push(moving!)
    //     }
    //    })
    //    console.log(this.stacks)
       throw "fuck off"
    }

    getPartTwo = (): number => {
        const regex =  /move (\d+) from (\d+) to (\d+)/
        const input = FileReader.getStringData(this.day.toLocaleString())
        input.forEach(x => {
         const [_, amount, from, to] = Array.from(x.match(regex)!, x => parseInt(x))
         const moving = this.stacks[from].splice(this.stacks[from].length - amount, amount)
         this.stacks[to] = this.stacks[to].concat(moving)

        //  for (let i =0; i < amount; i++) {
        //      console.log(this.stacks[from])
        //      const moving = this.stacks[from].pop()
        //      this.stacks[to].push(moving!)
        //  }
        })
        console.log(this.stacks)
        throw "fuck off"
    }
}