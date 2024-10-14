export interface EmployeeProfile {
  firstName: string;
  middleName?: string;
  lastName: string;
  departmentOrStore: string;
  designation: string;
  country: string;
  city: string;
  email: string;
  mobile: string;
  picture: string;
  grade: number | undefined;
  brand: number | undefined;
  employeeType: 'Regular' | 'Part-time';
  joinDate: string;
  lastWorkingDate?: string;
  isActive: boolean;
  firstLogin?: string;
  lastLogin?: string;
  company: string;
  dateOfBirth: string;
  employeeID: string;
  addressLine1: string;
  addressLine2?: string;
  postalCode: string;
  immediateManager: {
    email: string;
    phone: string;
    designation: string;
  };
}