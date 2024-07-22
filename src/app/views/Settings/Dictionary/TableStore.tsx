import {
  Box,
  Chip,
  Container,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  useTheme
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
// import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import FormStore from "./FormStore";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../../Models/StoreManagement";
import PreviewStore from "./PreviewStore";
import { removeStore } from "../../Slices/StoreManagement";

const AddStore = () => {
  const dispatch = useDispatch();
  const { storeList } = useSelector((state: any) => state.store);

  const theme = useTheme();
  // const [form, setForm] = useState(false);
  // const openForm = () => {
  //   setForm(true);
  // };
 

  const [update, setUpdate] = useState(false);
  const [datatoedit, setDataToEdit] = useState<Store | null>(null);
  const openUpdate = (data: Store) => {
    setDataToEdit(data);
    setUpdate(true);
  };
  const closeUpdate = () => {
    setUpdate(false);
  };

  const [preview, setPreview] = useState(false);
  const [previewdata, setPreviewData] = useState<Store | null>(null);
  const openPreview = (data: Store) => {
    setPreview(true);
    setPreviewData(data);
  };
  const closePreview = () => {
    setPreview(false);
  };

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
          <TextField label="Search" variant="outlined" />
          {/* <Fab
            onClick={openForm}
            size="small"
            color="primary"
            aria-label="add"
          >
            <AddIcon />
          </Fab> */}
        </Box>
        <Divider />

        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: '18px' }}>Code</TableCell>
              <TableCell sx={{ fontSize: '18px' }}>Country</TableCell>
              <TableCell sx={{ fontSize: '18px' }}>Status</TableCell>
              <TableCell sx={{ fontSize: '18px' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {storeList &&
              storeList.map((storeDetails: Store) => (
                <TableRow key={storeDetails.id}>
                  <TableCell>{storeDetails.storecode}</TableCell>
                  <TableCell>{storeDetails.country}</TableCell>
                  <TableCell>
                    <Chip
                      label={storeDetails.status ? "Active" : "Inactive"}
                      sx={{
                        backgroundColor: storeDetails.status
                          ? theme.palette.success.main
                          : theme.palette.error.main,
                        color: theme.palette.common.white,
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      color="primary"
                      aria-label="view"
                      onClick={() => openPreview(storeDetails)}
                    >
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="primary"
                      aria-label="edit"
                      onClick={() => openUpdate(storeDetails)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      size="small"
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

      <PreviewStore preview={preview} closePreview={closePreview} PreviewDetails={previewdata} />
      <FormStore openmodel={update} closestoremodel={closeUpdate} initialStore={datatoedit} />
    </>
  );
};

export default AddStore;
