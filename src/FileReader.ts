import fs from "fs";
import dotenv from 'dotenv'
dotenv.config()

export default class FileReader {

    static getStringData = (fileName: string): string[] => {
        dotenv.config()

        const path = `src/data/${process.env.YEAR}${fileName}.txt`;
        const file = fs.readFileSync(path, "utf-8");
        const regex = /\n/
        return file.split(regex)
    }

    static getNumericData = (fileName: string): number[] => {

        const stringData = FileReader.getStringData(fileName);
        return stringData.map(d => parseInt(d));
        
    }
}
