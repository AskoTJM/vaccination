export type healthCareDistrict = "HYKS" | "KYS" | "OYS" | "TAYS" | "TYKS";
export type vaccineNames = "Zerpfy" | "Antiqua" | "SolarBuddhica";
export type genderTypes = "male" | "females" | "nonbinary";

export interface IOrder {
    "id": string,
    "healthCareDistrict": healthCareDistrict,
    "orderNumber": number,
    "responsiblePerson": string,
    "injections": number,
    "arrived": string,
    "vaccine": vaccineNames
}


export interface IVaccination {
    "vaccination-id": string,
    "gender": genderTypes,
    "sourceBottle": IOrder,
    "injected": string
}



