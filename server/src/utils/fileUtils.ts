/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';
import path from 'path';
import lineByLine from 'n-readlines';
const liner = new lineByLine(path.resolve(__dirname, "../../resources/Antiqua.source"));


export default function readFiles(): void{
    const tempArray = [];
    /* fs.readFile(path.resolve(__dirname, "../../resources/Antiqua.source"), 'utf8', (err, data) => {

        if (err) {
            console.log(`Error reading file from disk: ${err}`);
        } else {
            //console.log(data);
            // parse JSON string to JSON object
            const databases = JSON.parse(data);
            console.log(databases);
            // print all databases
            //databases.forEach((db: { name: any; type: any; }) => {
            //    console.log(`${db.name}: ${db.type}`);
            //});
        }
    
    }); */
    
    let line;
    //let lineNumber = 0;

    // eslint-disable-next-line no-cond-assign
    while (line = liner.next()) {
        //console.log('Line ' + lineNumber + ': ' + line);
        tempArray.push(JSON.parse(line.toString()));
        //lineNumber++;
    }

    console.log(tempArray[0]);
}
