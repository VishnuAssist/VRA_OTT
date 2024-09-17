import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmployeeProfile } from '../Models/EmployeeModel';

export interface EmployeeState {
  userList: EmployeeProfile[];
  selectedUser: EmployeeProfile | null;
}

const initialState: EmployeeState = {
  userList: [
    {
      firstName: "John",
      middleName: "Michael",
      lastName: "Doe",
      departmentOrStore: "IT",
      designation: "Senior Software Engineer",
      country: "United States",
      city: "New York",
      email: "john.doe@example.com",
      mobile: "+1 (555) 123-4567",
      picture: "https://example.com/images/john-doe.jpg",
      grade: "L5",
      brand: "TechCorp",
      employeeType: "Regular",
      joinDate: "2020-03-15",
      isActive: true,
      firstLogin: "2020-03-16T09:00:00Z",
      lastLogin: "2023-06-10T14:30:00Z",
      company: "TechCorp Inc.",
      dateOfBirth: "1985-07-22",
      employeeID: "EMP123456",
      addressLine1: "123 Main St",
      addressLine2: "Apt 4B",
      postalCode: "10001",
      immediateManager: {
        email: "jane.smith@example.com",
        phone: "+1 (555) 987-6543",
        designation: "Engineering Manager"
      }
    },
    {
      firstName: "Emily",
      lastName: "Johnson",
      departmentOrStore: "Marketing",
      designation: "Marketing Specialist",
      country: "Canada",
      city: "Toronto",
      email: "emily.johnson@example.com",
      mobile: "+1 (555) 234-5678",
      picture: "https://example.com/images/emily-johnson.jpg",
      grade: "L3",
      brand: "BrandMasters",
      employeeType: "Regular",
      joinDate: "2021-09-01",
      isActive: true,
      company: "BrandMasters Ltd.",
      dateOfBirth: "1992-11-30",
      employeeID: "EMP789012",
      addressLine1: "456 Queen St W",
      postalCode: "M5V 2B3",
      immediateManager: {
        email: "michael.brown@example.com",
        phone: "+1 (555) 876-5432",
        designation: "Marketing Director"
      }
    },
    {
      firstName: "Raj",
      middleName: "Kumar",
      lastName: "Patel",
      departmentOrStore: "Sales",
      designation: "Sales Associate",
      country: "India",
      city: "Mumbai",
      email: "raj.patel@example.com",
      mobile: "+91 98765 43210",
      picture: "https://example.com/images/raj-patel.jpg",
      grade: "L2",
      brand: "GlobalSales",
      employeeType: "Part-time",
      joinDate: "2022-01-10",
      lastWorkingDate: "2023-12-31",
      isActive: false,
      firstLogin: "2022-01-11T10:15:00Z",
      lastLogin: "2023-05-30T18:45:00Z",
      company: "GlobalSales Corp.",
      dateOfBirth: "1998-03-05",
      employeeID: "EMP345678",
      addressLine1: "789 Linking Road",
      addressLine2: "Bandra West",
      postalCode: "400050",
      immediateManager: {
        email: "priya.sharma@example.com",
        phone: "+91 98765 56789",
        designation: "Sales Manager"
      }
    }
  ],
  selectedUser: null,
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<EmployeeProfile>) => {
      const id = Math.random().toString(36).substr(2, 9);
      const newEmployee = { ...action.payload, employeeID: `EMP${id}` };
      state.userList.push(newEmployee);
    },
    updateEmployee: (state, action: PayloadAction<EmployeeProfile>) => {
      const index = state.userList.findIndex(
        (employee) => employee.employeeID === action.payload.employeeID
      );
      if (index !== -1) {
        state.userList[index] = action.payload;
      }
    },
    removeEmployee: (state, action: PayloadAction<{ id: string }>) => {
      state.userList = state.userList.filter(
        (employee) => employee.employeeID !== action.payload.id
      );
    },
    setSelectedEmployee: (state, action: PayloadAction<EmployeeProfile | null>) => {
      state.selectedUser = action.payload;
    },
    updateEmployeeImage: (state, action: PayloadAction<{ id: string; imageUrl: string }>) => {
      const employee = state.userList.find(emp => emp.employeeID === action.payload.id);
      if (employee) {
        employee.picture = action.payload.imageUrl;
      }
    },
  },
});

export const {
  addEmployee,
  updateEmployee,
  removeEmployee,
  setSelectedEmployee,
  updateEmployeeImage,
} = employeeSlice.actions;

export default employeeSlice.reducer;