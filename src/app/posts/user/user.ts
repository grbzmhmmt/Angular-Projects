import { Company } from "./company";
import { Address } from "./address";

export class User {
    id: number;
    name: string;
    username: string;
    email: String;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}