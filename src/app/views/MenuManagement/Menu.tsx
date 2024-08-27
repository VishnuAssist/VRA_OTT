import { Add as AddIcon } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
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
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { addMenu } from "../../Slices/MenuSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const Data = [
  { Categories: "Soup" },
  { Categories: "Appetizer" },
  { Categories: "Desserts" },
  { Categories: "Salad" },
  { Categories: "Drinks" },
];

const MenuItem = () => {
  const { menuList } = useSelector((state: any) => state.menu);
  const { register, handleSubmit, reset, watch } = useForm<any>();
  const dispatch = useDispatch();

  console.log("array", menuList);
  const [form, setForm] = useState(false);
  const openForm = () => {
    setForm(true);
  };
  const closeForm = () => {
    setForm(false);
  };

  const [category, setCategory] = useState(false);
  const openCategory = () => {
    setCategory(true);
  };
  const closeCategory = () => {
    setCategory(false);
  };

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleTabChange = (
    event: React.SyntheticEvent,
    newCategory: string | null
  ) => {
    setSelectedCategory(newCategory);
  };

  const submitData = (data: any) => {
    dispatch(addMenu(data));

    console.log(data);
    reset();
    closeForm();
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
          <Grid container spacing={2}>
            <Grid item md={12} display={"flex"} alignItems={'center'}>
              <IconButton
                aria-label="Add staff"
                color="primary"
                sx={{ height: "50px", borderRadius: "50%" }}
                onClick={openCategory}
              >
                <AddCircleIcon />
              </IconButton>
              <Typography variant="h4">Add Categories</Typography>
            </Grid>
          </Grid>

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
          sx={{ mb: 4, borderBottom: 1, borderColor: "divider" }}
        >
          {Data.map((data, index) => (
            <Tab key={index} label={data.Categories} value={data.Categories} />
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
      <Dialog open={category} onClose={closeCategory}>
        <form onSubmit={handleSubmit(submitData)}>
          <DialogContent>
            <TextField
              type="text"
              id="Categories"
              placeholder="Categories"
              {...register("Categories")}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button color="primary" variant="contained" type="submit">
              Create
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default MenuItem;
