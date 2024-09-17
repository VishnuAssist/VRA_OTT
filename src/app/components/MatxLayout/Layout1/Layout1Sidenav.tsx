import React, { memo } from "react";
import { Hidden, Switch, Box, styled, useTheme } from "@mui/material";
import useSettings from "../../../hooks/useSettings";
// import { SettingsContextType } from "../../../hooks/useSettings";
import Brand from "../../Brand";
import Sidenav from "../../Sidenav";
import { themeShadows } from "../../MatxTheme/themeColors";
import { convertHexToRGB } from "../../../utils/utils";
import { sidenavCompactWidth, sideNavWidth } from "../../../utils/constant";

// Define the type for the styled components props
interface SidebarNavRootProps {
  theme?: any;
  width?: string;
  bg?: string;
  image?: string;
}

interface Layout1SidenavProps {}

const SidebarNavRoot = styled(Box)<SidebarNavRootProps>(({ theme, width, image }) => ({
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
  backgroundImage: `linear-gradient(to bottom, #A29674,#A29674 ), url(${image})`,
  "&:hover": {
    width: sideNavWidth + "px", // Ensure width is a string with units
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
  const { settings, updateSettings } = useSettings() as any;
  const leftSidebar = settings.layout1Settings.leftSidebar;
  const { mode, bgImgURL } = leftSidebar;

  const getSidenavWidth = (): string => {
    switch (mode) {
      case "compact":
        return `${sidenavCompactWidth}px`;

      default:
        return `${sideNavWidth}px`;
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
        <Sidenav children={undefined} />
      </NavListBox>
    </SidebarNavRoot>
  );
};

export default memo(Layout1Sidenav);
