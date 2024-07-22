import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  Select,
  TextField,
  Tooltip,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addStore, updateStore } from "../Slices/StoreManagement";
import { Store } from "../../Models/StoreManagement";

interface Props {
  openmodel: boolean;
  closestoremodel: () => void;
  initialStore?: Store | null;
}

const FormStore: FC<Props> = ({ openmodel, closestoremodel, initialStore }) => {
  const data: Store = {
    storecode: "",
    country: "",
    status: true,
    id: 0,
  };

  const { register, handleSubmit, reset, setValue, watch } = useForm();
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(true);


  const submitData = (data: any) => {
    data.isActive = isActive;
    console.log("statusss",data)
    if (initialStore) {
      dispatch(updateStore(data));
    } else {
      dispatch(addStore(data));
    }
    reset();
    closestoremodel();
  };

  useEffect(() => {
    reset(initialStore || data);
  }, [initialStore, reset]);

  useEffect(() => {
    if (initialStore) {
      setValue("storecode", initialStore.storecode);
      setValue("country", initialStore.country);
      setValue("status", initialStore.status);
      setValue("id", initialStore.id);
    }
  }, [initialStore, setValue]);

  const storecode = watch("storecode");

  const handleRadioChange = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  return (
    <>
      <Dialog open={openmodel} onClose={closestoremodel} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ color: "darkblue" }}>
          {initialStore ? "Update Store" : "New Store"}
        </DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
          <form onSubmit={handleSubmit(submitData)}>
            <Grid container spacing={2}>
              
              <Grid item xs={12} md={12} sx={{ mt: 1 }}>
                <FormControl fullWidth>
                  <InputLabel id="store-select-label">Store</InputLabel>
                  <Select
                    labelId="store-select-label"
                    id="store-select"
                    value={storecode || ""}
                    {...register("storecode")}
                    label="Store"
                  >
                    <MenuItem value="TWG001">TWG001</MenuItem>
                    <MenuItem value="TWG002">TWG002</MenuItem>
                    <MenuItem value="TWG003">TWG003</MenuItem>
                    <MenuItem value="TWG004">TWG004</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  type="text"
                  id="country"
                  label="country"
                  {...register("country")}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={12}>
              <Tooltip
                  title={isActive ? "Click to Deactivate" : "Click to Activate"}
                  arrow
                >
                  <Radio
                    checked={isActive}
                    onClick={handleRadioChange}
                    sx={{
                      color: isActive ? "#4caf50" : "#f44336",
                      '&.Mui-checked': {
                        color: isActive ? "#4caf50" : "#f44336",
                      },
                      '&::after': {
                        content: '""',
                        display: 'block',
                        width: '11px',
                        height: '11px',
                        borderRadius: '50%',
                        backgroundColor: isActive ? "#4caf50" : "#f44336",
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                      }
                    }}
                  />
                </Tooltip>
              </Grid>
            </Grid>

            <DialogActions>
              <Button type="submit" variant="contained" color="primary">
                {initialStore ? "Update" : "Save"}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FormStore;
