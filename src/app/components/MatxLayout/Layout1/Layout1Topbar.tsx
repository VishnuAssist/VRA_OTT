import { memo, useState } from "react";
// import { Link } from "react-router-dom";
import {
  Box,
  styled,
  Avatar,
  // useTheme,
  MenuItem,
  Typography,
  useMediaQuery,
  TextField,
  InputAdornment,
  // IconButton,
  // useMediaQuery
} from "@mui/material";

import { NotificationProvider } from "../../../contexts/NotificationContext";

import useAuth from "../../../hooks/useAuth";
// import useSettings from "../../../hooks/useSettings";

import { Span } from "../../Typography";
// import ShoppingCart from "../../ShoppingCart";
import { MatxMenu } from "../..";
import { NotificationBar } from "../../NotificationBar";
// import { themeShadows } from "../../MatxTheme/themeColors";
import logo from "../../../components/assest/logo.png"
import { topBarHeight } from "../../../utils/constant";
import Profile from "../../../views/profile/profile";
import {  Search as SearchIcon,
} from "@mui/icons-material";
import {
  // Menu,
  Person,
  Settings,
  // WebAsset,
  // MailOutline,
  // StarOutline,
  PowerSettingsNew
} from "@mui/icons-material";
import Header from "../../../views/HeaderStatus/Header";
// STYLED COMPONENTS
// const StyledIconButton = styled(IconButton)(({ theme }) => ({
//   color: theme.palette.text.primary
// }));

const TopbarRoot = styled("div")({
  top: 0,
  zIndex: 96,
  height: topBarHeight,
  // boxShadow: themeShadows[8],
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
  background: theme.colors.primary.dark,
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
  // const theme = useTheme();
  // const { settings, updateSettings } = useSettings();
  const { logout } = useAuth();

  const [open, setOpen] = useState(false);

  const openBox = () =>{
setOpen(true)
  }
  const handleClose = () => {
    setOpen(false);
  };
  // const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  // const updateSidebarMode = (sidebarSettings:any) => {
  //   updateSettings({ layout1Settings: { leftSidebar: { ...sidebarSettings } } });
  // };

  // const handleSidebarToggle = () => {
  //   let { layout1Settings } = settings;
  //   let mode;
  //   if (isMdScreen) {
  //     mode = layout1Settings.leftSidebar.mode === "close" ? "mobile" : "close";
  //   } else {
  //     mode = layout1Settings.leftSidebar.mode === "full" ? "close" : "full";
  //   }
  //   updateSidebarMode({ mode });
  // };
 
  const isMobileOrTablet = useMediaQuery((theme:any) => theme.breakpoints.down('md'));
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
    <TopbarRoot>
      <TopbarContainer>
      <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
          
          <Box 
            display="flex" 
            alignItems="center" 
            gap={1} 
            sx={{
              // ml: '10%', 
              flexGrow: 1,
              // '@media (max-width: 960px)': {
              //   ml: '5%',
              // },
              // '@media (max-width: 600px)': {
              //   ml: '0', 
              // },
            }}
          >
            <Avatar src={logo} alt="IDBadge Logo" sx={{ width: 60, height: 60 }} />
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold',fontFamily:"sans-serif" }}>
              netflix
            </Typography>
          </Box>
       
          {!isMobileOrTablet && <Header />}
       
          
        </Box>

        <Box display="flex" alignItems="center" gap={2} sx={{
          // border:"1px solid black",
          borderRadius:"15px"}}>
          {/* <MatxSearchBox /> */}
          <TextField
  variant="outlined"
  placeholder="Search"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  size="small"
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon color="action" />
      </InputAdornment>
    ),
  }}
  sx={{
    width: "250px",
    px: 1,
    mx:1,
    backgroundColor: "#F8F4E1",
    // border: "2px solid black",
    borderRadius: "15px",
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none', // remove default outlined border
      },
    },
  }}
/>


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

            <StyledItem onClick={openBox}>
              {/* <Link to="/About/profile"> */}
                <Person />
                <Span>Profile</Span>
              {/* </Link> */}
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


  
    <Profile open ={open} handleClose={handleClose}/>
    </>
  );
};

export default memo(Layout1Topbar);
