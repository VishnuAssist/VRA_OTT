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
  useTheme,
  TablePagination, 
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import FormStore from "./FormStore";
import { useDispatch, useSelector } from "react-redux";
import { removeStore } from "../../../Slices/StoreManagement";
import { DictionaryType } from "../../../Models/DictionaryType";

const AddStore = () => {
  const dispatch = useDispatch();
  const { DictionaryList } = useSelector((state: any) => state.dictionary);
  console.log(DictionaryList);

  const theme = useTheme();

  const [update, setUpdate] = useState(false);
  const [datatoedit, setDataToEdit] = useState<DictionaryType | null>(null);
  const openUpdate = (data: DictionaryType) => {
    setDataToEdit(data);
    setUpdate(true);
  };
  const closeUpdate = () => {
    setUpdate(false);
  };

  const deleteStore = (data: DictionaryType) => {
    dispatch(removeStore({ id: data.id }));
  };


  const [page, setPage] = useState(0); 
  const [rowsPerPage, setRowsPerPage] = useState(5); 

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); 
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
          </Box>
          <Divider />
          <TableContainer sx={{ overflow: "auto" }}>
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
                  DictionaryList
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((Dic: DictionaryType, index: number) => (
                      <TableRow key={Dic.id}>
                        <TableCell>{page * rowsPerPage + index + 1}</TableCell> 
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
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]} 
              component="div"
              count={DictionaryList.length} 
              rowsPerPage={rowsPerPage} 
              page={page} 
              onPageChange={handleChangePage} 
              onRowsPerPageChange={handleChangeRowsPerPage} 
            />
          </TableContainer>
        </Card>
      </Container>

      <FormStore openmodel={update} closestoremodel={closeUpdate} initialData={datatoedit} />
    </>
  );
};

export default AddStore;
