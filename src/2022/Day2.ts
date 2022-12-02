import FileReader from "../FileReader";
import Day from "../templates/Day";

export default class Day2 implements Day {
    day = 2
    OPPONENT_ROCK = "A"
    OPPONENT_PAPER = "B"
    OPPONENT_SCISSORS = "C"

    ME_ROCK = "X"
    ME_PAPER = "Y"
    ME_SCISSORS = "Z"

    STRATEGY_WIN = "Z"
    STRATEGY_DRAW = "Y"
    STRATEGY_LOSE = "X"

    getPartOne = (): number => {
        const input = FileReader.getStringData(this.day.toLocaleString())
        return input.reduce((acc, cur) => {
            const [opponent, me] = cur.split(" ")
            acc += this.getBaseScore(me)
            
            acc += this.calculateRound(opponent, me)
            return acc;

        }, 0)
    }

    getPartTwo = (): number => {
        const input = FileReader.getStringData(this.day.toLocaleString())
        return input.reduce((acc, cur) => {
            const [opponent, strategy] = cur.split(" ")
            const myThrow = this.transformStrategyToOutcome(opponent, strategy)
            acc += this.getBaseScore(myThrow)
            acc += this.calculateRound(opponent, myThrow)
            console.log(acc)
            return acc;
        }, 0)
    }


    getBaseScore = (type: string): number => {
        switch (type) {

            case this.ME_ROCK:
                return 1;
            case this.ME_PAPER:
                return 2;
            case this.ME_SCISSORS:
                return 3;
            default:
                console.log(type)
                throw "invalid choice"
        }
    }

    calculateRound = (opponent: string, me: string): number => {
        if (opponent === this.OPPONENT_ROCK) {
            if (me === this.ME_ROCK) {
                return 3;
            }
            if (me === this.ME_PAPER) {
                return 6;
            }
            if (me === this.ME_SCISSORS) {
                return 0;
            }
        }

        if (opponent === this.OPPONENT_PAPER) {
            if (me === this.ME_PAPER) {
                return 3;
            }
            if (me === this.ME_ROCK) {
                return 0;
            }
            if (me === this.ME_SCISSORS) {
                return 6
            }
        }

        if (opponent === this.OPPONENT_SCISSORS) {
            if (me === this.ME_SCISSORS) {
                return 3;
            }
            if (me === this.ME_ROCK) {
                return 6;
            }
            if (me === this.ME_PAPER) {
                return 0;
            }
        }

        throw "invalid round?"
    }

    transformStrategyToOutcome = (opponent: string, strategy: string): string => {
        if (opponent === this.OPPONENT_ROCK) {
            switch (strategy) {
                case this.STRATEGY_WIN:
                    return this.ME_PAPER
                case this.STRATEGY_DRAW:
                    return this.ME_ROCK;
                case this.STRATEGY_LOSE:
                    return this.ME_SCISSORS;
            }
        }
        if (opponent === this.OPPONENT_PAPER) {
            switch (strategy) {
                case this.STRATEGY_DRAW:
                    return this.ME_PAPER;
                case this.STRATEGY_LOSE:
                    return this.ME_ROCK;
                case this.STRATEGY_WIN:
                    return this.ME_SCISSORS
            }
        }
        if (opponent === this.OPPONENT_SCISSORS) {
            switch(strategy) {
                case this.STRATEGY_DRAW:
                    return this.ME_SCISSORS;
                case this.STRATEGY_LOSE:
                    return this.ME_PAPER;
                case this.STRATEGY_WIN:
                    return this.ME_ROCK
            }
        }
        console.log(opponent, strategy)
        throw "what?"
    }
}


