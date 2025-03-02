import {
  AppBar,
  Box,
  Grid,
  styled,
  ThemeProvider,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";


import useSettings from "../hooks/useSettings";
import { footerHeight, topBarHeight } from "../utils/constant";
import image from "./assest/companyLogo.jpeg";
const AppFooter = styled(Toolbar)(() => ({
  display: "flex",
  alignItems: "center",
  minHeight: footerHeight,
  width: "100%",
  "@media (max-width: 499px)": {
    display: "table",
    width: "100%",
    minHeight: "auto",
    // padding: "1rem 0",
    "& .container": {
      flexDirection: "column !important",
      "& a": { margin: "0 0 16px !important" },
    },
  },
}));

const FooterContent = styled("div")(() => ({
  width: "100%",
  // display: "flex",
  // alignItems: "center",
  // padding: "0px 1rem",
  
  // maxWidth: "8170px",
  // margin: "0 auto",
}));

export default function Footer() {
  const theme = useTheme();
  const { settings } = useSettings();

  const footerTheme = settings.themes[settings.footer.theme] || theme;

  return (
    <ThemeProvider theme={footerTheme}>
      <AppBar position="static" sx={{ zIndex: 96, backgroundColor: "#968A66" }}>
        <AppFooter>
          <FooterContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8} md={10} alignItems={"center"}>
                <Typography fontSize={"12px"} fontFamily={"monospace"} sx={{ color: "black" }} >
                  © 2024 - IDBadge!
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} md={2}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography fontSize={"12px"} fontFamily={"monospace"} sx={{ color: "black" }} >
                 
                    @ Powered by{" "}
                  </Typography>
                  <img
                    src={image}
                    height={"30px"}
                    width={"30px"}
                    style={{ borderRadius: "30%" }} 
                  />
                  <a href="https://www.assist360.com.sg/" target="blank">
                    Assist 360
                  </a>
                </Box>
              </Grid>
            </Grid>
          </FooterContent>
        </AppFooter>
      </AppBar>
    </ThemeProvider>
  );
}
