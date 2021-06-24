import readOrderSourceFileToArray from "../utils/fileUtils";

export default function populateDatabase():void{

    const antiquaOrder = readOrderSourceFileToArray('Antiqua');
    console.log(antiquaOrder);
    //console.log(readOrderSourceFileToArray('SolarBuddhica'));
    //console.log(readOrderSourceFileToArray('Zerpfy'));

}