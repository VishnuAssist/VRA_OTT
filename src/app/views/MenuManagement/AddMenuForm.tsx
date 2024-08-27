import { Category } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addMenu, updateMenu } from "../../Slices/MenuSlice";

interface Props {
  form: boolean;
  closeForm: () => void;
}

const AddMenuForm: FC<Props> = ({ form, closeForm }) => {
  const { register, handleSubmit, reset, watch } = useForm<any>();
  const dispatch = useDispatch();

  const [image, setImage] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const Categories = watch("Categories");
  const hotSeller = watch("hotSeller");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImage(URL.createObjectURL(file));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleImageRemove = () => {
    setImage(null);
    setImagePreview(null);
  };

  const submitData = (data: any) => {
    if (image) {
        data.menuImage = image;
    }
    dispatch(addMenu(data));

    console.log(data)
    reset();
    closeForm();
  };

  return (
    <>
      <Dialog open={form} onClose={closeForm}>
        <DialogTitle>Add New Menus</DialogTitle>
        <form onSubmit={handleSubmit(submitData)}>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  type="text"
                  id="menuname"
                  placeholder="Menu Name"
                  {...register("menuName")}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  type="text"
                  id="description"
                  placeholder="Description"
                  {...register("description")}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  type="text"
                  id="ingredients"
                  placeholder="Ingredients"
                  {...register("ingredients")}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  type="text"
                  id="pricing"
                  placeholder="Pricing"
                  {...register("price")}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  type="text"
                  id="offers"
                  placeholder="Offers"
                  {...register("offers")}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  type="text"
                  id="deals"
                  placeholder="Deals"
                  {...register("deals")}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  type="text"
                  id="discounts"
                  placeholder="Discounts"
                  {...register("discounts")}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  type="text"
                  id="Categories"
                  placeholder="Categories"
                  {...register("Categories")}
                  fullWidth
                />
              </Grid>
              {/* <Grid item xs={12} sm={6} md={6}>
                <TextField
                  id="role"
                  value={Categories || ""}
                  {...register("Categories")}
                  placeholder="Categories"
                  select
                  fullWidth
                >
                  <MenuItem value="desserts">Desserts</MenuItem>
                  <MenuItem value="salad">Salad</MenuItem>
                  <MenuItem value="soup">Soup</MenuItem>
                  <MenuItem value="appetizers">Appetizers</MenuItem>
                </TextField>
              </Grid> */}
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  id="hotseller"
                  value={hotSeller || ""}
                  {...register("hotSeller")}
                  placeholder="Hot Sellers"
                  select
                  fullWidth
                >
                  <MenuItem value="high">High Move</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="low">Low</MenuItem>
                  <MenuItem value="stop">Stop for a Days</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {imagePreview && (
                  <div style={{ marginTop: 16 }}>
                    <img
                      src={imagePreview}
                      alt="Selected"
                      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                    <Button
                      onClick={handleImageRemove}
                      color="secondary"
                      style={{ marginLeft: 16 }}
                    >
                      Remove Image
                    </Button>
                  </div>
                )}
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeForm} color="primary">
              Cancel
            </Button>
            <Button
              color="primary"
              variant="contained"
              type="submit"
            >
              Create
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default AddMenuForm;
