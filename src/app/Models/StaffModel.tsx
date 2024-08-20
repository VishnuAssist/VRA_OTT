export interface Staff {
  id?: number;
  username?: string;
  employeeID?: string;
  role?: string;
  email?: string;
  joinDate?: string;
  phone?: string;
  age?: number;

  shiftDetails?: Shift[] | null;
}

export interface Shift {
  mon: boolean;
  tue: boolean;
  wed: boolean;
  thu: boolean;
  fri: boolean;
  sat: boolean;
  sun: boolean;
  shiftID?: number;
  shift?: string;
  startTime?: string;
  endTime?: string;
  day?: string;
}
