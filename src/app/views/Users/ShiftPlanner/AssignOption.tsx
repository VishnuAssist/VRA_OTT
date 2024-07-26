import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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
import React, { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addSlot, CalendarSlot, updateSlot } from "../../../Slices/CalendarSlotManagement";

interface Props {
  assign: boolean;
  closeAssign: () => void;
  initialUserData?: CalendarSlot | null | undefined;
}

const labelStyles = {
  fontWeight: "bold",
  fontSize: "12px",
  marginBottom: "4px",
};

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
  // const dateTime = new Date(
  //   new Date().getTime() - new Date().getTimezoneOffset() * 60_000
  // )
  //   .toISOString()
  //   .slice(0, 16);

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
    setValue("option", event.target.value as string);

    console.log(age);
  };
  

  const addSubmit = (data: any) => {
    const newUpdatedData={...data,start:new Date(data?.start),end:new Date(data?.end)}
    console.log(newUpdatedData);
    if(initialUserData?.id){
      dispatch(updateSlot(newUpdatedData))
    }
    else{dispatch(addSlot(newUpdatedData)); }
    
    closeAssign()

    reset()
  };

  useEffect(() => {
    console.log(initialUserData)
   if (initialUserData) {
      reset(initialUserData); 
    }
  }, [initialUserData, reset]);

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
      <DialogTitle sx={{ color: "darkblue" }}>
           Create Schedule
          </DialogTitle>
        <form onSubmit={handleSubmit(addSubmit)}>
          <DialogContent>
            <Grid container spacing={2}>
              
              <Grid item md={6} xs={12}>
              <InputLabel htmlFor="Shift" sx={labelStyles} > Shift</InputLabel>
                <FormControl fullWidth>
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
              <Grid item xs={12} md={6}>
            <InputLabel htmlFor="Shift" sx={labelStyles} > Task</InputLabel>

              <TextField
                type="text"
                id="task"
                {...register("task")}
                fullWidth
              />
            </Grid>
             
            {age !== "offDay" && (
                <>
                 
                  <Grid item md={6} xs={12}>
                  <InputLabel htmlFor="Start Date And Time" sx={labelStyles} > Start Date And Time</InputLabel>

                    <TextField
                      type="datetime-local"
                      // defaultValue={dateTime}
                      fullWidth
                      {...register("start")}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                  <InputLabel htmlFor="Start Date And Time" sx={labelStyles} > End Date And Time</InputLabel>

                    <TextField
                      type="datetime-local"
                      // defaultValue={dateTime}
                      fullWidth
                      {...register("end")}
                    />
                  </Grid>
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
