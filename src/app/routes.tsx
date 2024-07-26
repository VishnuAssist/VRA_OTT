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
const JwtLogin = Loadable(lazy(() => import("./views/sessions/JwtLogin")));
const JwtRegister = Loadable(lazy(() => import("./views/sessions/JwtRegister")));
const ForgotPassword = Loadable(lazy(() => import("./views/sessions/ForgotPassword")));
// E-CHART PAGE
const AppEchart = Loadable(lazy(() => import("./views/charts/echarts/AppEchart")));
const Dashboard = Loadable(lazy(() => import("./views/Users/Dashboard")))
// DASHBOARD PAGE
const Analytics = Loadable(lazy(() => import("./views/dashboard/Analytics")));
const  StaffManagement= Loadable(lazy(() => import("./views/Users/Staffmanagement")));
const  Attendence= Loadable(lazy(() => import("./views/Users/Attendance/index")));
const  ShifftPlaner= Loadable(lazy(() => import("./views/Users/ShiftPlanner")));
const  Stores= Loadable(lazy(() => import("./views/Settings/Dictionary/index")));
const  Approvals= Loadable(lazy(() => import("./views/MyApprovals/Approvals")));
const  Task= Loadable(lazy(() => import("./views/Settings/Task/index")));
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
      // e-chart route
      { path: "/charts/echarts", element: <AppEchart />, auth: authRoles.editor },
      { path: "/users/staffmanagement", element: <StaffManagement />, auth: authRoles.admin },
      { path: "/users/attendence", element: <Attendence />, auth: authRoles.admin },
      { path: "/users/shiftplanner", element: <ShifftPlaner />, auth: authRoles.admin },
      { path: "/myapproval/Approvals", element: <Approvals />, auth: authRoles.admin },
      { path: "/Settings/dictionary", element: <Stores />, auth: authRoles.admin },
      { path: "/Settings/task", element: <Task />, auth: authRoles.admin },
      { path: "/About/profile", element: <Profile />, auth: authRoles.admin }
    ]
  },

  // session pages route
  { path: "/session/404", element: <NotFound /> },
  { path: "/session/signin", element: <JwtLogin /> },
  { path: "/session/signup", element: <JwtRegister /> },
  { path: "/session/forgot-password", element: <ForgotPassword /> },

  { path: "/", element: <Navigate to="dashboard/default" /> },
  { path: "*", element: <NotFound /> }
];

export default routes;
