import readOrderSourceFileToArray, { readVaccinationSourceFileToArray } from "../utils/fileUtils";
import { orderToDB, vaccinationToDB } from "./dbconnection";


export default function populateDatabase():void{

    const antiquaOrder = readOrderSourceFileToArray('Antiqua');
    orderToDB(antiquaOrder );
    const solarBuddhicaOrder = readOrderSourceFileToArray('SolarBuddhica');
    orderToDB(solarBuddhicaOrder );
    const zerpfyOrder = readOrderSourceFileToArray('Zerpfy');
    orderToDB(zerpfyOrder );
    const vaccinations = readVaccinationSourceFileToArray('vaccinations');
    vaccinationToDB(vaccinations);
    //console.log(readOrderSourceFileToArray('SolarBuddhica'));
    //console.log(readOrderSourceFileToArray('Zerpfy'));

}