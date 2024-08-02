import {
  Box,
  ButtonGroup,
  Card,
  Grid,
  IconButton,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
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
        >
          <Grid container spacing={2}>
            
            <Grid item xs={4} sm={2} md={6} lg={6}  >
            <ButtonGroup sx={{ border: "1px solid" }}>
              <IconButton
                sx={{
                  backgroundColor:
                    selectedView === "Table" ? "blue" : "inherit",
                  color: selectedView === "Table" ? "white" : "black",
                }}
                size="small"
                onClick={() => handleViewChange("Table")}
              >
                <TableRowsIcon />
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: selectedView === "Grid" ? "blue" : "inherit",
                  color: selectedView === "Grid" ? "white" : "black",
                }}
                size="small"
                onClick={() => handleViewChange("Grid")}
              >
                <ViewModuleIcon />
              </IconButton>
            </ButtonGroup>
            </Grid>
            <Grid item xs={8} sm={4} md={2} lg={2} >
            <TextField 
            size="small"
              label="Search"
              variant="outlined"
              // value={searchQuery}
              // onChange={(e) => setSearchQuery(e.target.value)}
              
            />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  sx={{
                    ":focus": {
                      backgroundColor: "violet",
                      // color: "#FDE5F4",
                    },
                  }}
                  label="To Do"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{
                    ":focus": {
                      backgroundColor: "orange",
                      // color: "#FDE5F4",
                      
                    },
                  
                  }}
                  label="In Progress"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{
                    ":focus": {
                      backgroundColor: "green",
                      // color: "#FDE5F4",
                    },
                  }}
                  label="Completed"
                  {...a11yProps(2)}
                />
              </Tabs>
            </Box>
            </Grid>
            

          </Grid>
        </Box>
        {selectedView === "Grid" ? (
          <TaskTable value={value} CustomTabPanel={CustomTabPanel} />
        ) : (
          <TableView value={value} CustomTabPanel={CustomTabPanel} />
        )}

        {/* <TaskTable />
        <TableView/> */}
      </Card>
    </>
  );
};

export default ToggleOption;
