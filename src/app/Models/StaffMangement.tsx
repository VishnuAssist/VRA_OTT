export interface Staff {
    
    "id": number;
    "username": string;
    "employeeID":string;
    "phone":string;
    "email":string;
    "joinDate":string;
    "position": string;
    "role":string;
    "store": string;
    "status":string;

    "profilePicture"?: string | null ;
    "isActive"?: boolean;
  }