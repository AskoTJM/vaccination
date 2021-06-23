import "reflect-metadata";
import {createConnection} from "typeorm";
import { Order } from "../entity/order";

export default function connectToDB(): void{
    createConnection().then(async connection =>{
        console.log("Connected to database.");
        }).catch(error => {
            console.log(`Error connecting t o database. ${error}`);
        });
}