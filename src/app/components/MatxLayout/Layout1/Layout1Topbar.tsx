import { memo } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  styled,
  Avatar,
  useTheme,
  MenuItem,
  IconButton,
  useMediaQuery
} from "@mui/material";

import { NotificationProvider } from "../../../contexts/NotificationContext";

import useAuth from "../../../hooks/useAuth";
import useSettings from "../../../hooks/useSettings";

import { Span } from "../../Typography";
// import ShoppingCart from "../../ShoppingCart";
import { MatxMenu, MatxSearchBox } from "../..";
import { NotificationBar } from "../../NotificationBar";
import { themeShadows } from "../../MatxTheme/themeColors";

import { topBarHeight } from "../../../utils/constant";

import {
  Menu,
  Person,
  Settings,
  // WebAsset,
  // MailOutline,
  // StarOutline,
  PowerSettingsNew
} from "@mui/icons-material";

// STYLED COMPONENTS
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary
}));

const TopbarRoot = styled("div")({
  top: 0,
  zIndex: 96,
  height: topBarHeight,
  boxShadow: themeShadows[8],
  transition: "all 0.3s ease"
});

const TopbarContainer = styled(Box)(({ theme }) => ({
  padding: "8px",
  paddingLeft: 18,
  paddingRight: 20,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: theme.colors.primary.light,
  [theme.breakpoints.down("sm")]: { paddingLeft: 16, paddingRight: 16 },
  [theme.breakpoints.down("xs")]: { paddingLeft: 14, paddingRight: 16 }
}));

const UserMenu = styled(Box)({
  padding: 4,
  display: "flex",
  borderRadius: 24,
  cursor: "pointer",
  alignItems: "center",
  "& span": { margin: "0 8px" }
});

const StyledItem = styled(MenuItem)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  minWidth: 185,
  "& a": {
    width: "100%",
    display: "flex",
    alignItems: "center",
    textDecoration: "none"
  },
  "& span": { marginRight: "10px", color: theme.palette.text.primary }
}));

// const IconBox = styled("div")(({ theme }) => ({
//   display: "inherit",
//   [theme.breakpoints.down("md")]: { display: "none !important" }
// }));

const Layout1Topbar = (_Fixed:any) => {
  const theme = useTheme();
  const { settings, updateSettings } = useSettings();
  const { logout } = useAuth();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  const updateSidebarMode = (sidebarSettings:any) => {
    updateSettings({ layout1Settings: { leftSidebar: { ...sidebarSettings } } });
  };

  const handleSidebarToggle = () => {
    let { layout1Settings } = settings;
    let mode;
    if (isMdScreen) {
      mode = layout1Settings.leftSidebar.mode === "close" ? "mobile" : "close";
    } else {
      mode = layout1Settings.leftSidebar.mode === "full" ? "close" : "full";
    }
    updateSidebarMode({ mode });
  };

  return (
    
    <TopbarRoot>
      <TopbarContainer>
        <Box display="flex">
          {/* <StyledIconButton onClick={handleSidebarToggle}>
            <Menu />
          </StyledIconButton> */}

          {/* <IconBox>
            <StyledIconButton>
              <MailOutline />
            </StyledIconButton> */} 

            {/* <StyledIconButton>
              <WebAsset />
            </StyledIconButton> */}

            {/* <StyledIconButton>
              <StarOutline />
            </StyledIconButton>
          </IconBox> */}
        </Box>

        <Box display="flex" alignItems="center" gap={2}>
          <MatxSearchBox />

          <NotificationProvider>
            <NotificationBar />
          </NotificationProvider>

          {/* <ShoppingCart container={undefined} /> */}

          <MatxMenu
            menuButton={
              <UserMenu>
                {/* <Hidden xsDown>
                  <Span>
                    Hi <strong>{""}</strong>
                  </Span>
                </Hidden> */}
                
                <Avatar src={""} sx={{ cursor: "pointer" }} />
                
              </UserMenu>
            }>
            {/* <StyledItem>
              <Link to="/">
                <Home />
                <Span>Home</Span>
              </Link>
            </StyledItem> */}

            <StyledItem>
              <Link to="/About/profile">
                <Person />
                <Span>Profile</Span>
              </Link>
            </StyledItem>

            <StyledItem>
              <Settings />
              <Span>Settings</Span>
            </StyledItem>

            <StyledItem onClick={logout}>
              <PowerSettingsNew />
              <Span>Logout</Span>
            </StyledItem>
          </MatxMenu>
        </Box>
      </TopbarContainer>
    </TopbarRoot>
  );
};

export default memo(Layout1Topbar);
