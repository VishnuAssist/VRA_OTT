import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addSlot, CalendarSlot } from "../../Slices/CalendarSlotManagement";

interface Props {
  assign: boolean;
  closeAssign: () => void;
  initialUserData?: CalendarSlot | null;
}

const AssignOption: FC<Props> = ({ assign, closeAssign ,initialUserData}) => {
  // const data: CalendarSlot = {
  //   resource: "",
  //   title: "",
  //   shift: "",
  //   start: "",
  //   end: "",
  //   id: 0,
  // };
  console.log(initialUserData)
  const { register, handleSubmit, setValue,reset } = useForm();
  const dispatch = useDispatch();
  const dateTime = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60_000
  )
    .toISOString()
    .slice(0, 16);

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
    setValue("option", event.target.value as string);

    console.log(age);
  };
  

  const addSubmit = (data: any) => {
    const newUpdatedData={...data,start:new Date(data?.start),end:new Date(data?.end)}
    console.log(newUpdatedData);
    dispatch(addSlot(newUpdatedData));
   

    reset()
  };

  // useEffect(() => {
  //   reset(initialUserData || data);
  // }, [initialUserData, reset]);

  // useEffect(() => {
  //   if (initialUserData) {
  //     setValue("resoruce", initialUserData.resource);
  //     setValue("title", initialUserData.title);
  //     setValue("shift", initialUserData.shift);
  //     setValue("start", initialUserData.start);
  //     setValue("end", initialUserData.end);
  //     setValue("id", initialUserData.id);
     
  //   }
  // }, [initialUserData, setValue]);

 
  return (
    <>
      <Dialog open={assign} onClose={closeAssign} maxWidth={"sm"} fullWidth>
        <form onSubmit={handleSubmit(addSubmit)}>
          <DialogContent>
            <Grid container spacing={2}>
              
              <Grid item md={12} xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Shift</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    {...register("title")}
                    onChange={handleChange}
                  >
                    <MenuItem value="shift">Shift</MenuItem>
                    <MenuItem value="offDay">Off Day</MenuItem>
                    <MenuItem value="overtime">Overtime</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
             
              {age !== "offDay" && (
                <>
                  <Grid item md={12}>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="morning"
                      {...register("shift")}
                    >
                      <Grid container>
                        <Grid
                          item
                          md={6}
                          xs={12}
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <FormControlLabel
                            value="morning"
                            control={<Radio />}
                            label="Morning Shift"
                          />
                        </Grid>
                        <Grid
                          item
                          md={6}
                          xs={12}
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <FormControlLabel
                            value="evening"
                            control={<Radio />}
                            label="Evening Shift"
                          />
                        </Grid>
                      </Grid>
                    </RadioGroup>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      type="datetime-local"
                      defaultValue={dateTime}
                      {...register("start")}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      type="datetime-local"
                      defaultValue={dateTime}
                      {...register("end")}
                    />
                  </Grid>
                </>
              )}
            </Grid>
          </DialogContent>

          <DialogActions>
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "green" }}
              fullWidth
            >
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
// actual
export default AssignOption;
