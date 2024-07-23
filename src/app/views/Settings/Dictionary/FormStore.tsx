import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
// import { Store } from "../../../Models/StoreManagement";
import { DictionaryType } from "../../../Models/DictionaryType";
import { addDictionaryList, updateDictionaryList } from "../../../Slices/DictionarySlice";

interface Props {
  openmodel: boolean;
  closestoremodel: () => void;
  initialData?: DictionaryType | null;
}

const FormStore: FC<Props> = ({ openmodel, closestoremodel, initialData }) => {
  const data: DictionaryType = {
    category: "",
    entryname: "",
    countryname: "",
    code: "",
    description: '',
    status:"",
    id: 0,
  };

  const { register, handleSubmit, reset, setValue, watch } = useForm<DictionaryType>();
 const dispatch = useDispatch()
  const submitData = (data: DictionaryType) => {
    console.log("statusss",data)
    if (initialData) {
      dispatch(updateDictionaryList(data));
    } else {
      dispatch(addDictionaryList(data));
    }
    reset();
    closestoremodel();
  };

  useEffect(() => {
    reset(initialData || data);
  }, [initialData, reset]);

  useEffect(() => {
    if (initialData) {
      setValue("category", initialData.category);
      setValue("entryname", initialData.entryname);
      setValue("countryname", initialData.countryname);
      setValue("description", initialData.description);
      setValue("code", initialData.code);
      setValue("status", initialData.status);
      setValue("id", initialData.id);
    }
  }, [initialData, setValue]);

  const category = watch("category");
  const status = watch("status");

  return (
    <Dialog open={openmodel} onClose={closestoremodel} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ color: "darkblue" }}>
        {initialData ? "Update Store" : "New Store"}
      </DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
        <form onSubmit={handleSubmit(submitData)}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} sx={{ mt: 1 }}>
              <InputLabel id="Category-select-label">Category</InputLabel>
              <FormControl fullWidth>
                <Select
                  labelId="Category-select-label"
                  id="Category-select"
                  value={category || ""}
                  {...register("category")}
                  label="Category"
                >
                  <MenuItem value="task">Task</MenuItem>
                  <MenuItem value="leave">Leave</MenuItem>
                  <MenuItem value="store">Store</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {category === "store" && (
              <>
                <Grid item xs={12} md={12}>
                <InputLabel id="status-select-label">Country Name</InputLabel>
                  <TextField
                    type="text"
                    id="country"
                    {...register("countryname")}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                <InputLabel id="status-select-label">Code</InputLabel>
                  <TextField
                    type="text"
                    id="code"
                    {...register("code")}
                    fullWidth
                  />
                </Grid>
              </>
            )}
            <Grid item xs={12} md={12}>
            <InputLabel id="status-select-label">Entry Name</InputLabel>

              <TextField
                type="text"
                id="entryname"
                {...register("entryname")}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12} sx={{ mt: 1 }}>
              <InputLabel id="status-select-label">Status</InputLabel>
              <FormControl fullWidth>
                <Select
                  labelId="status-select-label"
                  id="status-select"
                  value={status || ""}
                  {...register("status")}
                  label="Status"
                >
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Inactive">Inactive</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
            <InputLabel id="status-select-label">Description</InputLabel>

              <TextField
                type="text"
                id="Description"
                {...register("description")}
                fullWidth
              />
            </Grid>
          </Grid>
          <DialogActions>
          <Box sx={{ display: "flex", justifyContent: "space-around"}}>
          <Button onClick={closestoremodel} variant="contained" color="error">
               Close            
           </Button>
            <Button type="submit" variant="contained" color="primary">
              {initialData ? "Update" : "Save"}
            </Button>
            </Box>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormStore;
