/* eslint-disable @typescript-eslint/no-explicit-any */
import path from 'path';
import lineByLine from 'n-readlines';
import { IOrder, IVaccination } from '../interfaces/interfaces';

export default function readSourceFileToArray(fileToRead: string): IOrder[] | IVaccination[]{
    const liner = new lineByLine(path.resolve(__dirname, `../../resources/${fileToRead}.source`));

    const orderTempArray : Array<IVaccination> = [];
    const vaccinationTempArray : Array<IOrder> = [];
            
    let line;
    let loop = true;
    while (loop) {
        line = liner.next()
        if(line === false) {
            loop = false;
            break;
        }
        fileToRead === "vaccinations"
            ? vaccinationTempArray.push(JSON.parse(line.toString()))
            : orderTempArray.push(JSON.parse(line.toString()));
    }
    return (fileToRead === "vaccinations")
            ? vaccinationTempArray
            :  orderTempArray;
}
