import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Autocomplete,
  Box,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Rating,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";

import { Menu } from "../../Models/MenuModel";
import { addMenu, removeMenu } from "../../Slices/MenuSlice";
import { useForm } from "react-hook-form";
import DeleteAlert from "../../components/DeleteAlert";
import AddMenuForm from "../Settings/MenuDictionary/AddMenuForm";
import AddMenuFromDictionary from "./AddMenuFromDictionary";

const Data = [
  { Categories: "Today Special" },
  { Categories: "HotSeller" },
  { Categories: "Soup" },
  { Categories: "Appetizer" },
  { Categories: "Desserts" },
  { Categories: "Salad" },
  { Categories: "Drinks" },
];

const MenuItem = () => {
  const { menuList } = useSelector((state: any) => state.menu);
  const { register, handleSubmit, reset } = useForm<any>();
  const dispatch = useDispatch();

  const [form, setForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredMenuList, setFilteredMenuList] = useState(menuList);
  const [searchTerm, setSearchTerm] = useState('');
  const [value, setValue] = React.useState<number | null>(2);
 
  
  

  const openForm = () => setForm(true);
  const closeForm = () => setForm(false);
  

  const [alertdeleteStore, setAlertDeleteStore] = useState(false);
 const [userToDelete, setUserToDelete] = useState<Menu | null>(null);

 const deleteStore = () => {
   if (userToDelete) {
    
     dispatch(removeMenu({ id: userToDelete.id }));
     setAlertDeleteStore(false);
     setUserToDelete(null);
   }
 };
 const openDelete = (user: Menu) => {
   setAlertDeleteStore(true);
   setUserToDelete(user);
 };
 const closeDelete = () => {
   setAlertDeleteStore(false);
   setUserToDelete(null);
 };

  const handleTabChange = (event: React.SyntheticEvent, newCategory: string | null) => {
    setSelectedCategory(newCategory);
  };

  const submitData = (data: any) => {
    dispatch(addMenu(data));
    reset();
    closeForm();
  };

  const handleSearch = (event: any, newValue: string) => {
    setSearchTerm(newValue);
    if (newValue) {
      const filteredList = menuList.filter((menu: Menu) =>
        menu.menuName.toLowerCase().includes(newValue.toLowerCase())
      );
      setFilteredMenuList(filteredList);
    } else {
      setFilteredMenuList(menuList);
    }
  };

  const filteredByCategory = selectedCategory
    ? filteredMenuList.filter((menuDetails: Menu) => {
        if (selectedCategory === "HotSeller") {
          return menuDetails?.HotSeller === "High";
        }
        return menuDetails.Categories === selectedCategory;
      })
    : filteredMenuList;

    const[addMenus,setAddMenus]=useState(false)
    const openAddMenu=()=>{
      setAddMenus(true)
    }
    const closeAddMenu=()=>{
      setAddMenus(false)
    }
  return (
    <>
      <Box sx={{  m: 4 }} component={Paper}>
        <Box display="flex" justifyContent="space-between" mb={4}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Autocomplete
                freeSolo
                options={menuList.map((option: Menu) => option.menuName)}
                onInputChange={(_, newValue) => handleSearch(_, newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search Menu"
                    variant="outlined"
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <IconButton
                aria-label="Add staff"
                color="primary"
                sx={{ height: "50px", border: "2px solid" }}
                onClick={openForm}
              >
                <AddIcon />
              </IconButton>
            </Grid>
            {/* <Grid item xs={6} sm={6} md={6} lg={6}display={"flex"} alignItems={"center"}>
              <IconButton
                aria-label="Add staff"
                color="primary"
                sx={{ height: "50px", borderRadius: "50%" }}
                onClick={openAddMenu}
              >
                <AddCircleIcon />
              </IconButton>
              <Typography variant="h4">Add Menu</Typography>
            </Grid> */}
            
          </Grid>
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
          {filteredByCategory &&
            filteredByCategory.map((menuDetails: Menu) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={menuDetails.id}>
                <Paper
                  sx={{
                    backgroundColor: "#fff",
                    border: "1px solid",
                    boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)",
                    ":hover": {
                      boxShadow: "4px 4px 16px rgba(0, 0, 0, 0.2)",
                    },
                    borderRadius: "8px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Grid item xs={12} textAlign={"end"}>
                    <IconButton
                      color="error"
                      aria-label="delete"
                      onClick={() => openDelete(menuDetails)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                  <Grid item xs={12} textAlign="center">
                    <img
                      src={menuDetails?.staticImage}
                      alt={menuDetails?.menuName}
                      style={{
                        maxWidth: "100%",
                        height: "150px",
                        objectFit: "cover",
                        borderRadius: "12%",
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      p: 1,
                      backgroundColor: "#ebedee",
                    }}
                  >
                    <Typography
                      fontSize={18}
                      fontWeight={700}
                      textAlign="center"
                      sx={{ height: "45px" }}
                    >
                      {menuDetails?.menuName}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      p: 1,
                      backgroundColor: "yellow",
                      textAlign: "center",
                    }}
                  >
                    <Typography fontSize={18} fontWeight={900}>
                      {menuDetails?.price}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sx={{ p: 1, textAlign: "center" }}>
                    <Typography fontSize={15}>
                      {menuDetails?.ingredients}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sx={{ p: 1, textAlign: "center" }}>
                    <Typography variant="h6">{menuDetails?.deals}</Typography>
                  </Grid>
                  <Grid item xs={12} sx={{ p: 1, textAlign: "center" }}>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Grid>
                </Paper>
              </Grid>
            ))}
        </Grid>
      </Box>

      

      <AddMenuForm form={form} closeForm={closeForm} initialMenu={null} />
    
      <DeleteAlert
        DeleteAlert={alertdeleteStore}
        closeDelete={closeDelete}
        DeleteOption={deleteStore}
      />
      <AddMenuFromDictionary openAddMenu={addMenus} closeAddMenu={closeAddMenu} />
    </>
  );
};

export default MenuItem;
