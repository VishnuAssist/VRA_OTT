import { Box, Button, ButtonGroup, Card, Grid, Tab, Tabs, ToggleButton, ToggleButtonGroup, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import Pageheading from "./pageheading";


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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


interface PageHeaderProps {
  setType: (type: string) => void;
  Type: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ setType, Type }) => {
  
  

  const handleTypeChange = (newType: string) => {
    setType(newType);
    
  };
  const [selectedView, setSelectedView] = useState<"Table" | "Grid">("Table");

  const handleViewChange = (view: "Table" | "Grid") => {
    setSelectedView(view);
  };

  const theme = useTheme();
  return (
    <>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        <Typography variant="h2">Approvals</Typography>
        <ToggleButtonGroup
            value={Tabs}
            exclusive
          >
            <ToggleButton
              disableRipple
              value="watch_list_columns"
              sx={{ display: "flex", justifyContent: "space-between" }}
            > 
        <ButtonGroup>
          <Button
            variant="contained"
            onClick={() => handleTypeChange("Leave Request")}
            sx={{ bgcolor: theme.colors.secondary.dark }}
          >
            Leave
          </Button>
          <Button
            variant="contained"
            onClick={() => handleTypeChange("MC")}
            sx={{ bgcolor: theme.colors.info.dark }}
          >
            MC
          </Button>
          <Button
            variant="contained"
            onClick={() => handleTypeChange("Commision")}
            sx={{ bgcolor: theme.colors.warning.dark }}
          >
            Commision
          </Button>
        </ButtonGroup>
        </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      
      {/* <Card sx={{ p: 1, height: "100%" }}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          <Grid container spacing={2}>
            
           
            
            <Grid item xs={12} sm={8} md={6} lg={6}>
            <Box >
              <Tabs
               
                onClick={() => handleTypeChange("Leave Request")}
                aria-label="basic tabs example"
              >
                <Tab
                onClick={() => handleTypeChange("MC")}
                  sx={{
                    ":focus": {
                      backgroundColor: "violet",
                      // color: "#FDE5F4",
                    },
                  }}
                  label="Leaves"
                  {...a11yProps(0)}
                />
                <Tab
                 onClick={() => handleTypeChange("Commision")}
                  sx={{
                    ":focus": {
                      backgroundColor: "orange",
                      // color: "#FDE5F4",
                      
                    },
                  
                  }}
                  label="MC"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{
                    ":focus": {
                      backgroundColor: "green",
                      // color: "#FDE5F4",
                    },
                  }}
                  label="Commision"
                  {...a11yProps(2)}
                />
              </Tabs>
            </Box>
            </Grid>
            

          </Grid>
        </Box>
        
      </Card>
      <Pageheading value={value} CustomTabPanel={CustomTabPanel} /> */}
    </>
  );
};

export default PageHeader;
