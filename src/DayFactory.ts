import Day1 from "./2023/Day1";
import Day from './templates/Day';

const DayFactory = (day: string): Day => {
        switch (day) {
                case '1':
                        return new Day1();
                default: throw new Error(`Day ${day} not found`);
        }
}

export default DayFactory;