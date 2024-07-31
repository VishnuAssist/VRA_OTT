import { Box, Button, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import pic from "../../components/assest/error401.png"
// STYLED COMPONENTS
const FlexBox = styled(Box)({
  display: "flex",
  alignItems: "center"
  
});

const JustifyBox = styled(FlexBox)({
  maxWidth: 320,
  flexDirection: "column",
  justifyContent: "center"
});

const IMG = styled("img")({
  width: "100%",
  marginBottom: "32px"
});

const NotFoundRoot = styled(FlexBox)({
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh !important"
  
});

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <NotFoundRoot>
      
      <JustifyBox >
        <Typography sx={{fontSize:40,fontWeight:"bold"}} variant="h6">Page Not Found</Typography>
        <IMG style={{width:500}} src={pic} alt="" />
        <Typography sx={{fontSize:25,fontWeight:"bold"}} variant="h6">Unauthorized Server error</Typography>
        <p>Your credentials do not match to log on</p>
        <p>Click here from previous page</p>
        <Button
          color="primary"
          variant="contained"
          sx={{ textTransform: "capitalize" }}
          onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </JustifyBox>
    </NotFoundRoot>
  );
}
