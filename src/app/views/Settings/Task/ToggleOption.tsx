import { Box, ButtonGroup, Card, IconButton, Tab, Tabs, TextField } from "@mui/material";
import React, { useState } from "react";
import TaskTable from "./table";
import TableRowsIcon from "@mui/icons-material/TableRows";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import TableView from "./TableView";
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
const ToggleOption = () => {
  const [selectedView, setSelectedView] = useState<"Table" | "Grid">("Table");

  const handleViewChange = (view: "Table" | "Grid") => {
    setSelectedView(view);
  };


  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Card sx={{ p: 1, height: "100%" }}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          p={2}
        >
          <ButtonGroup sx={{border: "1px solid"}}>
            <IconButton
              sx={{
                backgroundColor: selectedView === "Table" ? "blue" : "inherit",
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


          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab sx={{backgroundColor:"violet"}} color="voilet" label="To Do" {...a11yProps(0)} />
              <Tab sx={{backgroundColor:"orange"}} label="In Progress" {...a11yProps(1)} />
              <Tab sx={{backgroundColor:"green"}} label="Completed" {...a11yProps(2)} />
            </Tabs>
          </Box>


          <TextField
            label="Search"
            variant="outlined"
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
          />
          
        </Box>
        {selectedView ==="Grid"? <TaskTable value={value} CustomTabPanel={CustomTabPanel}/>:<TableView value={value} CustomTabPanel={CustomTabPanel}/>}

        {/* <TaskTable />
        <TableView/> */}
      </Card>
    </>
  );
};

export default ToggleOption;
