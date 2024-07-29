import { Box, ButtonGroup, Card, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import TableRowsIcon from "@mui/icons-material/TableRows";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import Viewtable from "./table";
import GroupTable from "./TableGroupStaff";

const ToggleOption = () => {
  const [selectedView, setSelectedView] = useState<"Table" | "Grid">("Table");

  const handleViewChange = (view: "Table" | "Grid") => {
    setSelectedView(view);
  };

  return (
    <>
      <Card sx={{ p: 4, height: "100%", border: "1px solid #24665D" }}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          p={2}
        >
          <TextField label="Search" />

          <ButtonGroup sx={{border: "1px solid"}}>
            <IconButton
              sx={{
                backgroundColor: selectedView === "Table" ? "gray" : "inherit",
                color: selectedView === "Table" ? "white" : "black",
              }}
              onClick={() => handleViewChange("Table")}
            >
              <TableRowsIcon />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: selectedView === "Grid" ? "blue" : "inherit",
                color: selectedView === "Grid" ? "white" : "black",
              }}
              onClick={() => handleViewChange("Grid")}
            >
              <ViewModuleIcon />
            </IconButton>
          </ButtonGroup>
        </Box>
        {selectedView ==="Grid"? <GroupTable/>:<Viewtable />}
        {/* <TaskTable view={selectedView} /> */}
      </Card>
    </>
  );
};

export default ToggleOption;
