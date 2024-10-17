import { useEffect, useRef, memo } from "react";
import { ThemeProvider, useMediaQuery, Box, styled, useTheme, BoxProps } from "@mui/material";
import Scrollbar from "react-perfect-scrollbar";
import { Outlet } from "react-router-dom";
import Header from "../../../views/HeaderStatus/Header";
import useSettings from "../../../hooks/useSettings";

import Layout1Topbar from "./Layout1Topbar";
import Layout1Sidenav from "./Layout1Sidenav";

import Footer from "../../Footer";
import { MatxSuspense } from "../..";
import { SecondarySidebar } from "../../SecondarySidebar";
import SidenavTheme from "../../MatxTheme/SidenavTheme/SidenavTheme";

// import { sidenavCompactWidth, sideNavWidth } from "../../../utils/constant";

// STYLED COMPONENTS
const Layout1Root = styled(Box)(({ theme }) => ({
  display: "flex",
  background: theme.palette.background.default,
}));

const ContentBox = styled(Box)(() => ({
  height: "100%",
  display: "flex",
  overflowY: "auto",
  overflowX: "hidden",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const StyledScrollBar = styled(Scrollbar)(() => ({
  height: "100%",
  position: "relative",
  display: "flex",
  flexGrow: "1",
  flexDirection: "column",
}));

interface LayoutContainerProps extends BoxProps {
  width: string | number;
  open: boolean;
}

const LayoutContainer = styled(Box)<LayoutContainerProps>(({ width, open }) => ({
  height: "100vh",
  display: "flex",
  flexGrow: "1",
  flexDirection: "column",
  verticalAlign: "top",
  marginLeft: width,
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s ease",
  marginRight: open ? 50 : 0,
}));

const Layout1 = () => {
  const { settings, updateSettings } = useSettings();
  const { layout1Settings, secondarySidebar } = settings;
  const topbarTheme = settings.themes[layout1Settings.topbar.theme];
  const {
    leftSidebar: { mode: sidenavMode, show: showSidenav },
  } = layout1Settings;

  // const getSidenavWidth = () => {
  //   switch (sidenavMode) {
  //     // case "full":
  //     //   return sideNavWidth;

  //     // case "compact":
  //     //   return sidenavCompactWidth;

  //     // default:
  //     //   return sideNavWidth;
  //   }
  // };

  // const sidenavWidth = getSidenavWidth();
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  const ref = useRef({ isMdScreen, settings });
  const layoutClasses = `theme-${theme.palette.mode}`;

  useEffect(() => {
    let { settings } = ref.current;
    let sidebarMode = settings.layout1Settings.leftSidebar.mode;
    if (settings.layout1Settings.leftSidebar.show) {
      let mode = isMdScreen ? "close" : sidebarMode;
      updateSettings({ layout1Settings: { leftSidebar: { mode } } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMdScreen]);

  return (
    <Layout1Root className={layoutClasses}>
      {showSidenav && sidenavMode !== "close" && (
        <SidenavTheme>
          <Layout1Sidenav />
        </SidenavTheme>
      )}

      <LayoutContainer width={0} open={secondarySidebar.open}>
        {layout1Settings.topbar.show && layout1Settings.topbar.fixed && (
          <ThemeProvider theme={topbarTheme}>
            <Layout1Topbar fixed={true} className="elevation-z8" />
          </ThemeProvider>
        )}

        {settings.perfectScrollbar ? (
          <StyledScrollBar>
            {layout1Settings.topbar.show && !layout1Settings.topbar.fixed && (
              <ThemeProvider theme={topbarTheme}>
                <Layout1Topbar />
              </ThemeProvider>
            )}

            <Box flexGrow={1} position="relative">
              {/* <Header/> */}
              <MatxSuspense>
                <Box px={5}>
                  <Outlet />
                </Box>
              </MatxSuspense>
            </Box>

            {settings.footer.show && !settings.footer.fixed && <Footer />}
          </StyledScrollBar>
        ) : (
          <ContentBox>
            {layout1Settings.topbar.show && !layout1Settings.topbar.fixed && (
              <ThemeProvider theme={topbarTheme}>
                <Layout1Topbar />
              </ThemeProvider>
            )}

            <Box flexGrow={1} position="relative">
            {/* <Header/> */}
              <MatxSuspense>
                <Box px={5} mt={3}>
                  <Outlet />
                </Box>
              </MatxSuspense>
            </Box>

            {settings.footer.show && !settings.footer.fixed && <Footer />}
          </ContentBox>
        )}

        {settings.footer.show && settings.footer.fixed && <Footer />}
      </LayoutContainer>

      {settings.secondarySidebar.show && <SecondarySidebar />}
    </Layout1Root>
  );
};

export default memo(Layout1);
