import Day4 from './2022/Day4';
import Day3 from './2022/Day3';
import Day2 from './2022/Day2';
import Day1 from './2022/Day1';
import Day from './templates/Day';


const DayFactory = (day: string): Day => {
    switch(day) {
        case '3': return new Day3();
        case '1': return new Day1();
        case '2': return new Day2();
        case '4': return new Day4();

        default:
            throw new Error(`Day ${day} not found`);
    }

}

export default DayFactory;