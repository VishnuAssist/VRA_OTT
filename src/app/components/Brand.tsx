import { Box, styled } from "@mui/material";

import { Span } from "./Typography";

import image from "./assest/logo.png";

import useSettings from "../hooks/useSettings";

// STYLED COMPONENTS
const BrandRoot = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px 18px 20px 29px"
}));

const StyledSpan = styled(Span)(({ mode  }:{mode:string}) => ({
  fontSize: 18,
  marginLeft: ".5rem",
  display: mode === "compact" ? "none" : "block"
}));

export default function Brand({ children }:any) {
  const { settings } = useSettings();
  const leftSidebar = settings.layout1Settings.leftSidebar;
  const { mode } = leftSidebar;

  return (
    <BrandRoot>
      <Box display="flex" alignItems="center">
        {/* <MatxLogo /> */}
        <img src={image} alt="LOGO File" height={"35px"} width={"45px"} />
        <StyledSpan mode={mode} >
          ID Badge!
        </StyledSpan>
      </Box>

      <Box className="sidenavHoverShow" sx={{ display: mode === "compact" ? "none" : "block" }}>
        {children || null}
      </Box>
    </BrandRoot>
  );
}
