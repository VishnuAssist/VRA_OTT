import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns";

import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";

export const navigations = [
  { name: "Dashboard", path: "/dashboard/default", icon: <DashboardIcon /> },
  { name: "Dashboard", path: "/dashboard/ui", icon: <DashboardIcon /> },
  // { label: "PAGES", type: "label" },
  // {
  //   name: "Session/Auth",
  //   icon: "security",
  //   children: [
  //     { name: "Sign in", iconText: "SI", path: "/session/signin" },
  //     { name: "Sign up", iconText: "SU", path: "/session/signup" },
  //     { name: "Forgot Password", iconText: "FP", path: "/session/forgot-password" },
  //     { name: "Error", iconText: "404", path: "/session/404" }
  //   ]
  // },

  { label: "Table Management", type: "label" },

  {
    name: "Table Booking",
    path: "/table/tablemanagement",
    icon: <PeopleIcon />,
  },

  { label: "Menu Management", type: "label" },

  { name: "Menu", path: "/index/Menuanagement", icon: <PeopleIcon /> },

  { name: "Menu", path: "/index/Orderanagement", icon: <PeopleIcon /> },


  
  { label: "Order Management", type: "label" },

  {
    name: "Order Modifications",
    path: "/order/Ordermanagement",
    icon: <PeopleIcon />,
  },
  // {
  //   name: "Order Status",
  //   path: "/order/Ordermanagement",
  //   icon: <PeopleIcon />,
  // },

  { label: "Users", type: "label" },

  {
    name: "Staff Management",
    path: "/users/staffmanagement",
    icon: <PeopleIcon />,
  },
  { name: "Attendence", path: "/users/attendence", icon: <BookmarkIcon /> },
  {
    name: "Shift Management",
    path: "/users/shiftplanner",
    icon: <FollowTheSignsIcon />,
  },

  // { label: "Components", type: "label" },
  // {
  //   name: "Components",
  //   icon: "favorite",
  //   badge: { value: "30+", color: "secondary" },
  //   children: [
  //     { name: "Auto Complete", path: "/material/autocomplete", iconText: "A" },
  //     { name: "Buttons", path: "/material/buttons", iconText: "B" },
  //     { name: "Checkbox", path: "/material/checkbox", iconText: "C" },
  //     { name: "Dialog", path: "/material/dialog", iconText: "D" },
  //     { name: "Expansion Panel", path: "/material/expansion-panel", iconText: "E" },
  //     { name: "Form", path: "/material/form", iconText: "F" },
  //     { name: "Icons", path: "/material/icons", iconText: "I" },
  //     { name: "Menu", path: "/material/menu", iconText: "M" },
  //     { name: "Progress", path: "/material/progress", iconText: "P" },
  //     { name: "Radio", path: "/material/radio", iconText: "R" },
  //     { name: "Switch", path: "/material/switch", iconText: "S" },
  //     { name: "Slider", path: "/material/slider", iconText: "S" },
  //     { name: "Snackbar", path: "/material/snackbar", iconText: "S" },
  //     { name: "Table", path: "/material/table", iconText: "T" }
  //   ]
  // },
  // {
  //   name: "Charts",
  //   icon: "trending_up",
  //   children: [{ name: "Echarts", path: "/charts/echarts", iconText: "E" }]
  // },
  {
    name: "Documentation",
    icon: <DocumentScannerIcon />,
    type: "extLink",
    path: "http://demos.ui-lib.com/matx-react-doc/",
  },
];
