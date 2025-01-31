import { lazy } from "react";
import { Navigate } from "react-router-dom";

import AuthGuard from "./auth/AuthGuard";
import { authRoles } from "./auth/authRoles";

import Loadable from "./components/Loadable";
import MatxLayout from "./components/MatxLayout/MatxLayout";

// import materialRoutes from "./views/material-kit/MaterialRoutes";

("app/views/material-kit/MaterialRoutes");
// SESSION PAGES
const NotFound = Loadable(lazy(() => import("./views/sessions/NotFound")));
const Error401 = Loadable(lazy(() => import("./views/sessions/error401")));
const Error500 = Loadable(lazy(() => import("./views/sessions/error500")));
const JwtLogin = Loadable(lazy(() => import("./views/sessions/LoginPage")));
const JwtRegister = Loadable(
  lazy(() => import("./views/sessions/JwtRegister"))
);
const ForgotPassword = Loadable(
  lazy(() => import("./views/sessions/ForgotPassword"))
);
// E-CHART PAGE
const AppEchart = Loadable(
  lazy(() => import("./views/charts/echarts/AppEchart"))
);
const Dashboard = Loadable(lazy(() => import("./views/dashboard")));
// DASHBOARD PAGE
const Analytics = Loadable(lazy(() => import("./views/dashboard/Analytics")));

const EmployeeManagements = Loadable(
  lazy(() => import("./views/EmployeeMangement"))
);
const BrandManagements = Loadable(
  lazy(() => import("./views/BrandManagement"))
);
const VoucherManagement = Loadable(
  lazy(() => import("./views/Voucher"))
);
const VoucherHistory = Loadable(
  lazy(() => import("./views/VoucherHistory"))
);
const Dictionary = Loadable(
  lazy(() => import("./views/Dictionary/index"))
);



const Home = Loadable(
  lazy(() => import("./views/Home"))
);
const Movies = Loadable(
  lazy(() => import("./views/Movies"))
);
const TvShows = Loadable(
  lazy(() => import("./views/TvShows"))
);
const Actors = Loadable(
  lazy(() => import("./views/Actors"))
);



const Profile = Loadable(lazy(() => import("./views/profile")));

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
      {
        path: "/dashboard/default",
        element: <Analytics />,
        auth: authRoles.admin,
      },
      { path: "/dashboard/ui", element: <Dashboard />, auth: authRoles.admin },

      {
        path: "/charts/echarts",
        element: <AppEchart />,
        auth: authRoles.editor,
      },

      {
        path: "/employee/employeeManagement",
        element: <EmployeeManagements />,
        auth: authRoles.admin,
      },
      {
        path: "/brand/brandManagement",
        element: <BrandManagements />,
        auth: authRoles.admin,
      },
      {
        path: "/voucher/voucherManagement",
        element: <VoucherManagement />,
        auth: authRoles.admin,
      },
      {
        path: "/voucher/voucherHistory",
        element: <VoucherHistory />,
        auth: authRoles.admin,
      },

      {
        path: "/Setting/Dictionary",
        element: <Dictionary />,
        auth: authRoles.admin,
      },
     
      {
        path: "/Home",
        element: <Home />,
        auth: authRoles.admin,
      },
      {
        path: "/Movies",
        element: <Movies />,
        auth: authRoles.admin,
      },
      {
        path: "/TvShows",
        element: <TvShows />,
        auth: authRoles.admin,
      },
      {
        path: "/Actors",
        element: <Actors />,
        auth: authRoles.admin,
      },

      { path: "/About/profile", element: <Profile />, auth: authRoles.admin },
    ],
  },

  // session pages route
  { path: "/session/404", element: <NotFound /> },
  { path: "/session/401", element: <Error401 /> },
  { path: "/session/500", element: <Error500 /> },
  { path: "/session/signin", element: <JwtLogin /> },
  { path: "/session/signup", element: <JwtRegister /> },
  { path: "/session/forgot-password", element: <ForgotPassword /> },

  { path: "/", element: <Navigate to="/session/signin" /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
