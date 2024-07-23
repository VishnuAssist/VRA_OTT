import { Box,  Button,  Typography } from "@mui/material"
import LayersIcon from "@mui/icons-material/Layers";
import { useState } from "react";
import ScheduleModel from "./ScheduleModel";

function PageHeader() {
    const [open , setOpen] = useState(false)
    const openSchedule = () =>{
        setOpen(true)
    }
    const closeSchedule = () =>{
        setOpen(false)
    }
  return (
    <>
    <Box sx={{display:"flex" , justifyContent:"space-between"}}>
                <Typography sx={{ fontSize: 23, fontWeight: "bold" }}>Shift Planner</Typography>
                <Button
              variant="contained"
              startIcon={<LayersIcon fontSize="small" />}
              onClick={openSchedule}
              sx={{ px: 10, py: 1.7 }}
            >
              Schedule
            </Button>
            </Box>
            <ScheduleModel schedule={open} closeSchedule={closeSchedule}/>
            </>
  )
}

export default PageHeader