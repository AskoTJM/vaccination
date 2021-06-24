/* eslint-disable @typescript-eslint/no-explicit-any */
import path from 'path';
import lineByLine from 'n-readlines';
import { IOrder, IVaccination } from '../interfaces/interfaces';

export default function readOrderSourceFileToArray(fileToRead: string): IOrder[]{
    const liner = new lineByLine(path.resolve(__dirname, `../../resources/${fileToRead}.source`));
    const orderTempArray : Array<IOrder> = [];
            
    let line = liner.next();
    while (line) {
        orderTempArray.push(JSON.parse(line.toString()));
        line = liner.next()
    }
    return orderTempArray;
}

export function readVaccinationSourceFileToArray(fileToRead: string): IVaccination[]{
    const liner = new lineByLine(path.resolve(__dirname, `../../resources/${fileToRead}.source`));
    const vaccinationTempArray : Array<IVaccination> = [];
            
    let line = liner.next();
    while (line) {
        vaccinationTempArray.push(JSON.parse(line.toString()))
        line = liner.next();
    }
    return vaccinationTempArray;
}
