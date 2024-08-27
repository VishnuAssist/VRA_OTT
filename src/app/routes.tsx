import { lazy } from "react";
import { Navigate } from "react-router-dom";

import AuthGuard from "./auth/AuthGuard";
import { authRoles } from "./auth/authRoles";

import Loadable from "./components/Loadable";
import MatxLayout from "./components/MatxLayout/MatxLayout";


// import materialRoutes from "./views/material-kit/MaterialRoutes";

"app/views/material-kit/MaterialRoutes"
// SESSION PAGES
const NotFound = Loadable(lazy(() => import("./views/sessions/NotFound")));
const Error401 = Loadable(lazy(() => import("./views/sessions/error401")));
const Error500 = Loadable(lazy(() => import("./views/sessions/error500")));
const JwtLogin = Loadable(lazy(() => import("./views/sessions/JwtLogin")));
const JwtRegister = Loadable(lazy(() => import("./views/sessions/JwtRegister")));
const ForgotPassword = Loadable(lazy(() => import("./views/sessions/ForgotPassword")));
// E-CHART PAGE
const AppEchart = Loadable(lazy(() => import("./views/charts/echarts/AppEchart")));
const Dashboard = Loadable(lazy(() => import("./views/dashboard/Analytics")))
// DASHBOARD PAGE
const Analytics = Loadable(lazy(() => import("./views/dashboard/Analytics")));

const TableManagement = Loadable(lazy(() => import("./views/TableManagement/index")));
const Reservation = Loadable(lazy(() => import("./views/Reservation/index")));
const MenuManagement = Loadable(lazy(() => import("./views/MenuManagement/menus")));
const OrderManagement = Loadable(lazy(() => import("./views/OrderManagement/index")));

const StaffManagement = Loadable(lazy(() => import("./views/Users/Staffmanagement")));
const  Attendence= Loadable(lazy(() => import("./views/Users/Attendance/index")));
const  ShiftManagement= Loadable(lazy(() => import("./views/Users/ShiftManagement/index")));


const  Profile= Loadable(lazy(() => import("./views/profile")));

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      // ...materialRoutes,
      // dashboard route
      { path: "/dashboard/default", element: <Analytics />, auth: authRoles.admin },
      { path: "/dashboard/ui", element: <Dashboard />, auth: authRoles.admin },
      //table
      { path: "/table/tablemanagement", element: <TableManagement />, auth: authRoles.admin },
      // e-chart route
      { path: "/reserve/reservation", element: <Reservation />, auth: authRoles.admin },
      { path: "/menu/menumanagement", element: <MenuManagement />, auth: authRoles.admin },
      { path: "/order/ordermanagement", element: <OrderManagement />, auth: authRoles.admin },
      { path: "/charts/echarts", element: <AppEchart />, auth: authRoles.editor },
      { path: "/users/staffmanagement", element: <StaffManagement />, auth: authRoles.admin },
      { path: "/users/attendence", element: <Attendence />, auth: authRoles.admin },
      { path: "/users/shiftplanner", element: <ShiftManagement />, auth: authRoles.admin },

      { path: "/About/profile", element: <Profile />, auth: authRoles.admin }
    ]
  },

  // session pages route
  { path: "/session/404", element: <NotFound /> },
  { path: "/session/401", element: <Error401 /> },
  { path: "/session/500", element: <Error500 /> },
  { path: "/session/signin", element: <JwtLogin /> },
  { path: "/session/signup", element: <JwtRegister /> },
  { path: "/session/forgot-password", element: <ForgotPassword /> },

  { path: "/", element: <Navigate to="dashboard/default" /> },
  { path: "*", element: <NotFound /> }
];

export default routes;
