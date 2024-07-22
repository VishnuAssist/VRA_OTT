import { Box, Button, ButtonGroup, Typography,useTheme } from "@mui/material"

interface PageHeaderProps {
  setType: (type: string) => void;
  Type : string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ setType,Type }) => {
  const handleTypeChange = (newType: string) => {
    setType(newType);
  };
  const theme = useTheme()
  return (
    <>
    <Box display="flex" justifyContent="space-between" flexWrap="wrap" >
    <Typography variant='h2'>Approvals</Typography>
    {/* <Button variant="contained">Add</Button> */}
    </Box>
    <Box display={'flex'} justifyContent={"space-between"} flexWrap={"wrap"}>
          <Typography variant="h5" component="h3" gutterBottom>
            {Type}
          </Typography>
          {/* <ToggleButtonGroup
            value={Tabs}
            exclusive
          >
            <ToggleButton
              disableRipple
              value="watch_list_columns"
              sx={{ display: "flex", justifyContent: "space-between" }}
            > */}
            <ButtonGroup>
              <Button variant="contained" onClick={()=>handleTypeChange("Leave Request")} sx={{bgcolor:theme.colors.secondary.dark}} >Leave</Button>
              <Button variant="contained" onClick={()=>handleTypeChange("MC")} sx={{bgcolor:theme.colors.info.dark}}>MC</Button>
              <Button variant="contained" onClick={()=>handleTypeChange("Commision")}sx={{bgcolor:theme.colors.warning.dark}}>Commision</Button>
              </ButtonGroup>
            {/* </ToggleButton>
          </ToggleButtonGroup> */}
        
       </Box>
    </>
  )
}

export default PageHeader