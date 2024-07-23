import {
  Box,
  Card,
  Chip,
  Container,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  useTheme
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
// import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
// import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import FormStore from "./FormStore";
import { useDispatch, useSelector } from "react-redux";
// import PreviewStore from "./PreviewStore";
import { removeStore } from "../../../Slices/StoreManagement";
import { DictionaryType } from "../../../Models/DictionaryType";

const AddStore = () => {
  const dispatch = useDispatch();
  const { DictionaryList } = useSelector((state: any) => state.dictionary);
  console.log(DictionaryList)

  const theme = useTheme();
  // const [form, setForm] = useState(false);
  // const openForm = () => {
  //   setForm(true);
  // };
 

  const [update, setUpdate] = useState(false);
  const [datatoedit, setDataToEdit] = useState<DictionaryType | null>(null);
  const openUpdate = (data: DictionaryType) => {
    setDataToEdit(data);
    setUpdate(true);
  };
  const closeUpdate = () => {
    setUpdate(false);
  };

  // const [preview, setPreview] = useState(false);
  // const [previewdata, setPreviewData] = useState<DictionaryType | null>(null);
  // const openPreview = (data: Store) => {
  //   setPreview(true);
  //   setPreviewData(data);
  // };
  // const closePreview = () => {
  //   setPreview(false);
  // };

  const deleteStore = (data: DictionaryType) => {
    dispatch(removeStore({ id: data.id }));
  };

  return (
    <>
      <Container maxWidth='lg'>
        <Card sx={{ p: 2, height: "100%" }}>
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
        <TableContainer sx={{overflow:"auto"}} >

        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: '15px' }}>#</TableCell>
              <TableCell sx={{ fontSize: '15px' }}>CATEGORY</TableCell>
              <TableCell sx={{ fontSize: '15px' }}>Entry NAME</TableCell>
              <TableCell sx={{ fontSize: '15px' }}>CODE</TableCell>
              <TableCell sx={{ fontSize: '15px' }}>DESCRIPTION</TableCell>
              <TableCell sx={{ fontSize: '15px' }}>IS ACTIVE</TableCell>
              <TableCell sx={{ fontSize: '15px' }}>ACTIONS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {DictionaryList &&
              DictionaryList.map((Dic: DictionaryType,index:number) => (
                <TableRow key={Dic.id}>
                  <TableCell>{index+1}</TableCell>
                  <TableCell>{Dic.category}</TableCell>
                  <TableCell>{Dic.entryname}</TableCell>
                  <TableCell>{Dic.code}</TableCell>
                  <TableCell>{Dic.description}</TableCell>
                  <TableCell>
                    <Chip
                      label={Dic.status ? "Active" : "Inactive"}
                      sx={{
                        backgroundColor: Dic.status
                          ? theme.palette.success.main
                          : theme.palette.error.main,
                        color: theme.palette.common.white,
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    {/* <IconButton
                      size="small"
                      color="primary"
                      aria-label="view"
                      onClick={() => openPreview(Dic)}
                    >
                      <VisibilityIcon />
                    </IconButton> */}
                    <IconButton
                      size="small"
                      color="primary"
                      aria-label="edit"
                      onClick={() => openUpdate(Dic)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="error"
                      aria-label="delete"
                      onClick={() => deleteStore(Dic)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        </TableContainer>
        </Card>
      </Container>

      <FormStore openmodel={update} closestoremodel={closeUpdate} initialData={datatoedit} />
    </>
  );
};

export default AddStore;
