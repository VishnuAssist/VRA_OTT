import {
  Box,
  Button,
  Container,
  Divider,
  Fab,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import FormStore from "./FormStore";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../Models/StoreManagement";
import PreviewStore from "./PreviewStore";
import { removeStore } from "../Slices/StoreManagement";
const AddStore = () => {
  const dispatch = useDispatch();
  const { storeList } = useSelector((state: any) => state.store);


  const [form,setForm]=useState(false)
  const openForm=()=>{
    setForm(true)
  }
  const closeForm=()=>{
    setForm(false)
  }

  const [update,setUpdate]=useState(false)
  const [datatoedit,setDataToEdit]=useState<Store | null>(null);
  const openUpdate=(data:Store)=>{
    setDataToEdit(data)
    setUpdate(true)
  }
  const closeUpadate=()=>{
    setUpdate(false)
  }

  // const [previewdialogOpen, setPreviewDialogOpen] = useState(false);
  // // const [selectdata, setSelectdata] = useState<Staff | null>(null);
  // const edithandleAddClick = (data: Staff) => {
  //   setSelectdata(data);
  //   setDialogOpen(true);
  // };
  const [preview,setPreview]=useState(false)
  const [previewdata, setPreviewData] = useState<Store | null>(null);
  const openPreview=(data:Store)=>{
    setPreview(true)
    setPreviewData(data);
  }
  const closePreview=()=>{
    setPreview(false)
  }

  const deleteStore = (data: Store) => {
    dispatch(removeStore({ id: data.id }));
  };
  

  return (
    <>
      <Container maxWidth='lg'>
      <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          p={2}
        >
          <TextField label="Search" />

          <Fab
            onClick={openForm}
            size="small"
            color="primary"
            aria-label="add"
          >
            <AddIcon />
          </Fab>
        </Box>
        <Divider />
          
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{fontSize:'18px'}}>Code</TableCell>
                <TableCell sx={{fontSize:'18px'}}>Country</TableCell>
                <TableCell sx={{fontSize:'18px'}}>Status</TableCell>
                <TableCell sx={{fontSize:'18px'}}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {storeList &&
                storeList.map((storeDetails: Store) => (
                  <TableRow>
                    <TableCell>{storeDetails.storecode}</TableCell>
                    <TableCell>{storeDetails.country}</TableCell>
                    <TableCell>
                      <Button variant="contained">{storeDetails.status}</Button>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        size="small"
                        color="primary"
                        aria-label="VisibilityIcon"
                        
                        onClick={() => openPreview(storeDetails)}
                      >
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton
                        size="small"
                        color="primary"
                        aria-label="edit"
                        onClick={()=>openUpdate(storeDetails)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        aria-label="delete"
                        onClick={() => deleteStore(storeDetails)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          
        
      </Container>

      <FormStore  form={form} closeForm={closeForm} initialStore={null}/>
   
      <PreviewStore preview={preview} closePreview={closePreview}  PreviewDetails={previewdata}/>
      <FormStore  form={update} closeForm={closeUpadate} initialStore={datatoedit}/>
    </>
    
  );
};

export default AddStore;
