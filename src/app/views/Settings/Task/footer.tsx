import { AppBar, Button, ThemeProvider, Toolbar, Typography, styled, useTheme } from "@mui/material";
import { Paragraph, Span } from '../../../components/Typography'
import { topBarHeight } from '../../../utils/constant';
import useSettings from "../../../hooks/useSettings";


// STYLED COMPONENTS
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
      "& a": { margin: "0 0 16px !important" }
    }
  }
}));

const FooterContent = styled("div")(() => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: "0px 1rem",
  maxWidth: "1170px",
  margin: "0 auto"
}));

export default function FooterForUretail() {
  const theme = useTheme();
  const { settings } = useSettings();

  const footerTheme = settings.themes[settings.footer.theme] || theme;

  return (
    <ThemeProvider theme={footerTheme}>
      <AppBar  position="static" sx={{ zIndex: 96,backgroundColor:"#08592f" }}>
        <AppFooter>
          <FooterContent>
            <Typography sx={{fontSize:"15px"}}> Welcome to Uretail</Typography>
        
            <Span m="auto"></Span>

            <Paragraph m={0}>
              Design and Developed by <a href="https://www.assist360.com.sg/" target="blank" >Assist 360</a>
            </Paragraph>
          </FooterContent>
        </AppFooter>
      </AppBar>
    </ThemeProvider>
  );
}

