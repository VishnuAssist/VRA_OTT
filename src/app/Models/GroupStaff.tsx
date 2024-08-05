import { Staff } from "./StaffMangement";

export interface GroupStaff {
    users: string;
    "id": number;
    "groupname": string;
    "staffs":Staff[];
    "description":string;
    
}