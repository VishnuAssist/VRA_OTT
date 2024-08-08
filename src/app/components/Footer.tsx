import {
  AppBar,
  Box,
  Button,
  Grid,
  styled,
  ThemeProvider,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";

import { Paragraph, Span } from "./Typography";
import useSettings from "../hooks/useSettings";
import { topBarHeight } from "../utils/constant";
import image from "./assest/companyLogo.jpeg";
const AppFooter = styled(Toolbar)(() => ({
  display: "flex",
  alignItems: "center",
  minHeight: topBarHeight,
  "@media (max-width: 499px)": {
    display: "table",
    width: "100%",
    minHeight: "auto",
    padding: "1rem 0",
    "& .container": {
      flexDirection: "column !important",
      "& a": { margin: "0 0 16px !important" },
    },
  },
}));

const FooterContent = styled("div")(() => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: "0px 1rem",
  maxWidth: "1170px",
  margin: "0 auto",
}));

export default function Footer() {
  const theme = useTheme();
  const { settings } = useSettings();

  const footerTheme = settings.themes[settings.footer.theme] || theme;

  return (
    <ThemeProvider theme={footerTheme}>
      <AppBar position="static" sx={{ zIndex: 96, backgroundColor: "#81C9BE" }}>
        <AppFooter>
          <FooterContent>
            <Grid container spacing={2}>
              <Grid item md={9}>
                <Typography fontSize={"15px"} sx={{color:"black"}}>
                  © 2024 - Uretail Assist
                </Typography>
              </Grid>
              <Grid item md={3}>
                <Box sx={{ display: "flex", 
                        alignItems: 'center',gap: 1 }}>
                  <Typography fontSize={"15px"} sx={{color:"black"}}> @ Powered by </Typography>
                  <img
                    src={image}
                    height={"30px"}
                    width={"30px"}
                    style={{ borderRadius: "30%" }}
                  />
                  <a href="https://www.assist360.com.sg/" target="blank" >
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
