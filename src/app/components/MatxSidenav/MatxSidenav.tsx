import React, { ReactNode } from "react";
import { Box, styled, useMediaQuery, useTheme } from "@mui/material";

// Define prop types for the component
interface MatxSidenavProps {
  sx?: object;
  open: boolean;
  children: ReactNode;
  toggleSidenav: () => void;
  width?: string;
}

// STYLED COMPONENTS
const SideNav = styled("div")<{
  theme: any;
  width: string;
}>(({ theme, width }) => ({
  zIndex: 91,
  width: width,
  overflow: "hidden",
  position: "relative",
  transition: "width 250ms ease",
  background: theme.palette.background.default,
  [theme.breakpoints.down("sm")]: {
    top: 0,
    left: 0,
    bottom: 0,
    position: "absolute",
  },
}));

const SideNavOverlay = styled("div")(() => ({
  zIndex: 90,
  width: "100%",
  height: "100%",
  position: "absolute",
  background: "rgba(0, 0, 0, 0.74)",
}));

const MatxSidenav: React.FC<MatxSidenavProps> = ({
  sx,
  open,
  children,
  toggleSidenav,
  width = "220px",
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box height="100%" display="flex">
      <SideNav sx={sx} theme={theme} width={open || !isMobile ? width : "0px"}>
        {children}
      </SideNav>

      {open && isMobile && <SideNavOverlay onClick={toggleSidenav} />}
    </Box>
  );
};

export default MatxSidenav;
