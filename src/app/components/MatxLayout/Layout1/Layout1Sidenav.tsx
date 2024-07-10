import React, { memo } from "react";
import { Hidden, Switch, Box, styled, useTheme } from "@mui/material";

import useSettings, { SettingsContextType } from "../../../hooks/useSettings";
import Brand from "../../Brand";
import Sidenav from "../../Sidenav";
import { themeShadows } from "../../MatxTheme/themeColors";
import { convertHexToRGB } from "../../../utils/utils";
import { sidenavCompactWidth, sideNavWidth } from "../../../utils/constant";

// Define the type for the styled components props
interface SidebarNavRootProps {
  theme: any;
  width: string;
  bg: string;
  image: string;
}

interface Layout1SidenavProps {}

const SidebarNavRoot = styled(Box)<SidebarNavRootProps>(({ theme, width, bg, image }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  width: width,
  boxShadow: themeShadows[8],
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top",
  backgroundSize: "cover",
  zIndex: 111,
  overflow: "hidden",
  color: theme.palette.text.primary,
  transition: "all 250ms ease-in-out",
  backgroundImage: `linear-gradient(to bottom, #24665d,#24665d ), url(${image})`,
  "&:hover": {
    width: sideNavWidth,
    "& .sidenavHoverShow": { display: "block" },
    "& .compactNavItem": {
      width: "100%",
      maxWidth: "100%",
      "& .nav-bullet": { display: "block" },
      "& .nav-bullet-text": { display: "none" }
    }
  }
}));

const NavListBox = styled(Box)({
  height: "100%",
  display: "flex",
  flexDirection: "column"
});

const Layout1Sidenav: React.FC<Layout1SidenavProps> = () => {
  const theme = useTheme();
  const { settings, updateSettings } = useSettings() as SettingsContextType;
  const leftSidebar = settings.layout1Settings.leftSidebar;
  const { mode, bgImgURL } = leftSidebar;

  const getSidenavWidth = (): string => {
    switch (mode) {
      case "compact":
        return sidenavCompactWidth;

      default:
        return sideNavWidth;
    }
  };

  const primaryRGB = convertHexToRGB(theme.palette.primary.main);

  const updateSidebarMode = (sidebarSettings: Partial<typeof leftSidebar>) => {
    updateSettings({ layout1Settings: { leftSidebar: { ...sidebarSettings } } });
  };

  const handleSidenavToggle = () => {
    updateSidebarMode({ mode: mode === "compact" ? "full" : "compact" });
  };

  return (
    <SidebarNavRoot image={bgImgURL} bg={primaryRGB} width={getSidenavWidth()}>
      <NavListBox>
        <Brand>
          <Hidden smDown>
            <Switch
              onChange={handleSidenavToggle}
              checked={leftSidebar.mode !== "full"}
              color="secondary"
              size="small"
            />
          </Hidden>
        </Brand>
        <Sidenav />
      </NavListBox>
    </SidebarNavRoot>
  );
};

export default memo(Layout1Sidenav);
