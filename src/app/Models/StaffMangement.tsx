export interface Staff {
    store: any;
    
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
'attendance'?:Attendance[]|null
'leaves'?:Leaves|null
  }

export interface Attendance {
  'attendanceId':number,
  'date':string,
  'checkin':string,
  'checkout':string,
  'status':string,
  'file'?:File
}
export interface Leaves {
  'annualleave':number,
  'casualleave':number,
  'flexileave':number,
  'familycare':number,
  'medicalleave':number,
  'emergencyleave':number,
}