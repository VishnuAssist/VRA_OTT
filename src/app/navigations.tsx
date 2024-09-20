import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";

export const navigations = [
  { name: "Dashboard", path: "/dashboard/ui", icon: <DashboardIcon /> },

  // { label: "Users", type: "label" },
  {
    name: "Employee",
    path: "/employee/employeeManagement",
    icon: <PeopleIcon />,
  },
  {
    name: "Brand",
    path: "/brand/brandManagement",
    icon: <BrandingWatermarkIcon />,
  },
  {
    name: "Voucher",
    path: "/voucher/voucherManagement",
    icon: <BrandingWatermarkIcon />,
  },


  { label: "Setting", type: "Setting" },
  {
    name: "Dictionary",
    path: "/Setting/Dictionary",
    icon: <PeopleIcon />,
  },
  {
    name: "Documentation",
    icon: <DocumentScannerIcon />,
    type: "extLink",
    path: "http://demos.ui-lib.com/matx-react-doc/",
  },
];
