import { Add as AddIcon } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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
import { useSelector, useDispatch } from "react-redux";
import { Menu } from "../../../Models/MenuModel";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { addMenu, removeMenu } from "../../../Slices/MenuSlice";
import { useForm } from "react-hook-form";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DeleteAlert from "../../../components/DeleteAlert";

const MenuDictionary = () => {
  const { menuList } = useSelector((state: any) => state.menu);
  console.log("menuList", menuList);
  const { register, handleSubmit, reset } = useForm<any>();
  const dispatch = useDispatch();

  const [form, setForm] = useState(false);
  const [category, setCategory] = useState(false);
  

  const openForm = () => setForm(true);
  const closeForm = () => setForm(false);
  const openCategory = () => setCategory(true);
  const closeCategory = () => setCategory(false);

 

  const submitData = (data: any) => {
    dispatch(addMenu(data));
    reset();
    closeForm();
  };
 //edit

 const [update, setUpdate] = useState(false);
 const [datatoedit, setDataToEdit] = useState<Menu | null>(null);
 const openUpdate = (data: Menu) => {
   setDataToEdit(data);
   setUpdate(true);
 };
 const closeUpadate = () => {
   setUpdate(false);
 };
 //delete

 const [alertdeleteStore, setAlertDeleteStore] = useState(false);
 const [userToDelete, setUserToDelete] = useState<Menu | null>(null);

 const deleteStore = () => {
   if (userToDelete) {
    console.log("Deleting menu with ID:", userToDelete.id);
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
  

  return (
    <>
      <Box sx={{  m: 4 }} component={Paper}>
        <Box display="flex" justifyContent="space-between" mb={4}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
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
                style={{ marginTop: 16, maxWidth: "240px" }}
              />
            </Grid>
            <Grid item xs={10} sm={4} md={4} lg={4} display={"flex"} alignItems={"center"}>
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
          </Grid>
        </Box>
        <Divider sx={{ mb: 4 }} />


        <Grid container spacing={2}>
          {menuList &&
            menuList.map((menuDetails: Menu) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={menuDetails?.id}>
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
                      size="small"
                      color="primary"
                      aria-label="edit"
                      onClick={() => openUpdate(menuDetails)}
                    >
                      <EditIcon />{" "}
                    </IconButton>
                  
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
                 
                 
                </Paper>
              </Grid>
            ))}
        </Grid>
      </Box>
      
      <Dialog open={category} onClose={closeCategory}>
      <DialogTitle sx={{display:"flex",justifyContent:"space-between",alignItems:"center", color: "darkblue" }}>
            <Typography variant="h4">
           Add Category</Typography>

            <IconButton
                color="error"
                aria-label="delete"
                onClick={closeCategory}
              >
                <HighlightOffSharpIcon />
              </IconButton>
          </DialogTitle>
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


      <AddMenuForm form={form} closeForm={closeForm} initialMenu={null}/>
      {/* //edit */}
      <AddMenuForm
        form={update}
        closeForm={closeUpadate}
        initialMenu={datatoedit}
      />
      {/* //delete */}
      <DeleteAlert
        DeleteAlert={alertdeleteStore}
        closeDelete={closeDelete}
        DeleteOption={deleteStore}
      />
    </>
  );
};

export default MenuDictionary;
