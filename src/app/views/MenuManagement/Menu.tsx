import {
  Add as AddIcon,
  Edit as EditIcon,
  Visibility as ViewIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import AddMenuForm from "./AddMenuForm";
import { useSelector } from "react-redux";
import { Menu } from "../../Models/MenuModel";

const Data = [
    { Categories: "Soup" },
    { Categories: "Appetizer" },
    { Categories: "Desserts" },
    { Categories: "Salad" },
    { Categories: "Drinks" },
  ];

const MenuItem = () => {
  const { menuList } = useSelector((state: any) => state.menu);
  console.log("array", menuList);
  const [form, setForm] = useState(false);
  const openForm = () => {
    setForm(true);
  };
  const closeForm = () => {
    setForm(false);
  };

   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  
  const handleTabChange = (event: React.SyntheticEvent, newCategory: string | null) => {
    setSelectedCategory(newCategory);
  };
  return (
    <>
      <Box sx={{ p: 4, m: 4 }} component={Paper}>
        <Box display="flex" justifyContent="space-between" mb={4}>
          <TextField
            variant="outlined"
            placeholder="Search"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
            style={{ marginTop: 16, width: "240px" }}
          />
          <IconButton
            aria-label="Add staff"
            color="primary"
            sx={{ height: "50px", border: "2px solid" }}
            onClick={openForm}
          >
            <AddIcon />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 4 }} />

        <Tabs
        value={selectedCategory}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="Categories Tabs"
        sx={{ mb: 4, borderBottom: 1, borderColor: 'divider' }}
      >
        {Data.map((data, index) => (
          <Tab
            key={index}
            label={data.Categories}
            value={data.Categories}
          />
        ))}
      </Tabs>

        <Grid container spacing={2}>
          {menuList &&
            menuList.map((menuDetails: Menu) => (
              <Grid
                item
                md={2}
                lg={4}
                container
                sx={{
                  height: "350px",
                  backgroundColor: "#fff",
                  border: "1px solid",
                  borderRadius: "2%",
                }}
              >
                <Grid item xs={12} md={12} textAlign={"center"}>
                  <img
                    // src={menuDetails?.menuImage ?? ""}
                    src="https://img.freepik.com/free-photo/delicious-lobster-gourmet-seafood_23-2151713033.jpg?size=626&ext=jpg&ga=GA1.1.310686908.1724125842&semt=ais_hybrid"
                    alt={menuDetails?.menuName}
                    style={{
                      width: "250px",
                      height: "250px",
                      borderRadius: "20%",
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={12} textAlign={"center"}>
                  <Typography variant="h3">{menuDetails?.menuName}</Typography>
                </Grid>
                <Grid item xs={12} md={12} textAlign={"center"}>
                  <Typography variant="h5">
                    {menuDetails?.ingredients}
                  </Typography>
                </Grid>
                <Grid item md={10}>
                  <Typography variant="h5">{menuDetails?.deals}</Typography>
                </Grid>

                <Grid item md={2}>
                  <Typography variant="h5">{menuDetails?.price}</Typography>
                </Grid>
              </Grid>
            ))}
        </Grid>
      </Box>
      <AddMenuForm form={form} closeForm={closeForm} />
    </>
  );
};

export default MenuItem;
