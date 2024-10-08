import AddStore from "./Table";
// import HeaderStats from "../HeaderStatus/HeaderStats";
import Header from "../HeaderStatus/Header";
import { Box } from "@mui/material";

const index = () => {
  return (
    <div>

     
      <Header />

      <Box sx={{background:"#c64595", m:"2px" , p:"20px",borderRadius: "8px"}}>
      {/* <HeaderStats /> */}

      <AddStore />
      </Box>
    </div>
  );
};

export default index;
