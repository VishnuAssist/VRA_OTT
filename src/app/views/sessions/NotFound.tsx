import { Box, Button, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import image from "../../components/assest/error.png"
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
        <IMG style={{width:800}} src={image} alt="" />

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
