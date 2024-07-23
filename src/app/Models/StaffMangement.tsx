export interface Staff {
    
    "id": number;
    "username": string;
    "employeeID":string;
    "phone":string;
    "email":string;
    "joinDate":string;
    "position": string;
    "role":string;
    "storecode": string;
    "status":string;

    "profilePicture"?: string | null ;
    "isActive"?: boolean;
  }