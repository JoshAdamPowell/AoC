import FileReader from "../FileReader";
import Day from "../templates/Day";

export default class Day7 implements Day {
    day = 7

    getPartOne = (): number => 
    {        
        const input = FileReader.getStringData(this.day.toLocaleString())
        const trees = input.flatMap((line, i) => {
            return line.split("").map((char, j) => {
                return new Tree(j, i, parseInt(char))
            })
        })
        
        //get visible from left
        for (let y = 0; y <= 98; y++) {
            // outermost trees are always visible, so use -1 to represent no trees.
            let currentHeight = -1;
            for (let x = 0; x <=98; x++) {
                const tree = trees.find(tree => tree.x === x && tree.y === y)
                if (tree && tree?.height! > currentHeight) {
                    tree.visible = true
                    currentHeight = tree.height
                }
            }
        }

        //get visible from right
        for (let y = 0; y <= 98; y++) {
            let currentHeight = -1;
            for (let x = 98; x >= 0; x--) {
                const tree = trees.find(tree => tree.x === x && tree.y === y)
                if (tree && tree?.height! > currentHeight) {
                    tree.visible = true
                    currentHeight = tree.height
                }
            }
        }

        //get visible from top
        for (let x = 0; x <= 98; x++) {
            let currentHeight = -1;
            for (let y = 0; y <= 98; y++) {
                const tree = trees.find(tree => tree.x === x && tree.y === y)
                if (tree && tree?.height! > currentHeight) {
                    tree.visible = true
                    currentHeight = tree.height
                }
            }
        }

        //get visible from bottom
        for (let x = 98; x >= 0; x--) {
            let currentHeight = -1;
            for (let y = 98; y >= 0; y--) {
                const tree = trees.find(tree => tree.x === x && tree.y === y)
                if (tree && tree?.height! > currentHeight) {
                    tree.visible = true
                    currentHeight = tree.height
                }
            }
        }
        return trees.filter(x => x.visible).length

    }    
    
    getPartTwo = (): number => {
        throw new Error("Method not implemented.");    
    }
}

class Tree {
    x: number
    y: number
    height: number
    visible = false

    constructor(x: number, y: number, height: number) {
        this.x = x;
        this.y = y;
        this.height = height;
    }
}