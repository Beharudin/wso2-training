import * as dmUtils from "./dm-utils";
declare var DM_PROPERTIES: any;

/*
 * title : "root",
 * inputType : "JSON",
 */
interface Root {
    customer: {
        firstName: string;
        lastName: string;
        age: number;
        phones: string[];
        amount: string;
    };
}

/**
 * outputType:unknown
 */
interface OutputRoot {
    name: string;
    age: number;
    primaryPhone: string;
    phoneCount: number;
    amount: number;
}

/**
 * functionName : map_S_root_S_Root
 * inputVariable : inputroot
 */
export function mapFunction(input: Root): OutputRoot {
    return {
        name: input.customer.firstName + " " + input.customer.lastName,
        age: input.customer.age,
        primaryPhone: input.customer.phones[0],
        phoneCount: input.customer.phones.length,
        amount: parseFloat(input.customer.amount),
    };
}
