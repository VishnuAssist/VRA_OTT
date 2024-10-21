import {
  Box,
  Chip,
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
  Paper,
  Grid,
  Typography,
  Button,
  InputAdornment,
} from "@mui/material";
import {

  Edit as EditIcon,

  Delete as DeleteIcon,
  Search as SearchIcon,
} from "@mui/icons-material";


import { useState } from "react";
import {useSelector } from "react-redux";
//   import { removeStore } from "../../../Slices/StoreManagement";
import { DictionaryType } from "../../Models/DictionaryType";
import Form from "./QualificationForm";

const AddStore = () => {
  // const dispatch = useDispatch();
  const { DictionaryList } = useSelector((state: any) => state.dictionary);
  console.log(DictionaryList);

  const theme = useTheme();

  const [openmodel, setOpenModel] = useState<boolean>(false);

  const openstoremodel = () => {
    setOpenModel(true);
  };
  const closestoremodel = () => {
    setOpenModel(false);
  };

  const [update, setUpdate] = useState(false);
  const [datatoedit, setDataToEdit] = useState<DictionaryType | null>(null);
  const openUpdate = (data: DictionaryType) => {
    setDataToEdit(data);
    setUpdate(true);
  };
  const closeUpdate = () => {
    setUpdate(false);
  };

  const deleteStore = (_data: DictionaryType) => {
    //   dispatch({ id: data.id });
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Box>
         <Grid
          container
          spacing={0}
          alignItems="center"
          marginBottom={2}
          component={Paper}
          sx={{ p: 2 }}
        >
          <Grid item xs={8} sm={6} md={6} lg={8}>
            <Typography fontSize={"24px"} fontWeight={700} fontFamily={"monospace"}>
            Dictionary
            </Typography>
          </Grid>
         
      
          
          
          <Grid item xs={4} sm={6} md={6} lg={4} textAlign="right">
            <Button
              variant="contained"
              color="info"
              onClick={openstoremodel}
            >
              Add
            </Button>
          </Grid>
        </Grid>
        <TableContainer sx={{ overflow: "auto" }} component={Paper}>
        <Grid container spacing={2} sx={{p:2}}>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              variant="outlined"
              placeholder="Search employees"
              fullWidth
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          </Grid>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: "15px" }}>#</TableCell>
                <TableCell sx={{ fontSize: "15px" }}>CATEGORY</TableCell>
                <TableCell sx={{ fontSize: "15px" }}>Entry NAME</TableCell>
                <TableCell sx={{ fontSize: "15px" }}>CODE</TableCell>
                <TableCell sx={{ fontSize: "15px" }}>DESCRIPTION</TableCell>
                <TableCell sx={{ fontSize: "15px" }}>IS ACTIVE</TableCell>
                <TableCell sx={{ fontSize: "15px" }}>ACTIONS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {DictionaryList &&
                DictionaryList.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                ).map((Dic: DictionaryType, index: number) => (
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
      </Box>
      <Form openmodel={openmodel} closestoremodel={closestoremodel} />
      <Form
        openmodel={update}
        closestoremodel={closeUpdate}
        initialData={datatoedit}
      />
    </>
  );
};

export default AddStore;
