import "reflect-metadata";
import {createConnection, getRepository} from "typeorm";
import { Order } from "../entity/order";
import { Vaccination } from "../entity/vaccination";
import { IOrder, IVaccination } from "../interfaces/interfaces";
import populateDatabase from "./dbpopulate";

export default function connectToDB(): void{
    createConnection().then(async connection =>{
        console.log("Connected to database.");
        populateDatabase();
        }).catch(error => {
            console.log(`Error connecting t o database. ${error}`);
        });
}

export function orderToDB(orderArray:IOrder[]): void{
    const orderRepo = getRepository(Order);
    const order = orderRepo.create(orderArray);
    orderRepo.save(order).catch((err) => {
        console.log("Error: ", err);
    });
    console.log("Orders added to database.");
}

export function vaccinationToDB(vaccinationArray:IVaccination[]): void{
    const vaccinationRepo = getRepository(Vaccination);
    const vaccination = vaccinationRepo.create(vaccinationArray);
    vaccinationRepo.save(vaccination).catch((err) =>{
        console.log("Error: ", err);
    });
    console.log("Vaccinations added to database.");
}
