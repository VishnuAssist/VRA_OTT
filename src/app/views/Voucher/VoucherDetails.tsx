import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Button,
  Grid,
  Typography,
  TextField,
  Select,
  MenuItem,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Menu,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Chip,
  ToggleButtonGroup,
  ToggleButton,
  TableCell,
  TableHead,
  Table,
  TableContainer,
  TableBody,
  TableRow,
  Avatar,
} from "@mui/material";
import HistoryIcon from '@mui/icons-material/History';
import { VoucherType } from "../../Models/VoucherType";
import {
  removeVoucher,
  setSelectedVoucher,
  setSearchTerm,
  setFilterType,
} from "../../Slices/VoucherSlice";
import VoucherForm from "./VoucherForm";
import VoucherPreview from "./VoucherPreview";

import EventBusyIcon from '@mui/icons-material/EventBusy';

import MergeTypeIcon from "@mui/icons-material/MergeType";
import TableViewIcon from "@mui/icons-material/TableRows";

import {
  Add as AddIcon,
  
  GridView as GridViewIcon,
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
// import { DictionaryType } from "../../Models/DictionaryType";
export default function VoucherDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { voucherList, searchTerm, filterType } = useSelector((state: any) => state.voucher);
  const {DictionaryList} = useSelector((state:any)=> state.dictionary)

//   const brandData = voucherList.find((voucher: VoucherType) =>
//  DictionaryList.some((dictionary: DictionaryType) => dictionary.id === voucher.voucherBrand));

 

  // const brandfunc = (id:number) =>{
  //   const brandData:DictionaryType = DictionaryList.find((dictionary: DictionaryType) =>  dictionary.id === id );
  //   return brandData?.entryname
  // }
   

  // console.log("brandData",brandData)
console.log("voucherList",voucherList)
console.log("DictionaryList",DictionaryList)

  const [isFormOpen, setFormOpen] = useState(false);
  const [dataToEdit, setDataToEdit] = useState<VoucherType | null>(null);
  const [isPreviewOpen, setPreviewOpen] = useState(false);
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [voucherToDelete, setVoucherToDelete] = useState<VoucherType | null>(
    null
  );
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedVoucherId, setSelectedVoucherId] = useState<string | null>(
    null
  );

  const openForm = () => setFormOpen(true);
  const closeForm = () => {
    setFormOpen(false);
    setDataToEdit(null);
  };

  const openUpdate = (data: VoucherType) => {
    setDataToEdit(data);
    setFormOpen(true);
    handleMenuClose();
  };

  const openPreviewDetails = (data: VoucherType) => {
    dispatch(setSelectedVoucher(data));
    setPreviewOpen(true);
  };

  const confirmDelete = () => {
    if (voucherToDelete) {
      dispatch(removeVoucher({ id: voucherToDelete.voucherId }));
      setDeleteOpen(false);
      setVoucherToDelete(null);
    }
  };

  const openDeleteConfirm = (voucher: VoucherType) => {
    setVoucherToDelete(voucher);
    setDeleteOpen(true);
    handleMenuClose();
  };

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    voucherId: string
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedVoucherId(voucherId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedVoucherId(null);
  };

  const filteredVouchers = voucherList.filter(
    (voucher: VoucherType) =>
      voucher.voucherName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterType === "All" || voucher.voucherType === filterType)
  );

  const [view, setView] = useState("grid"); // Default view is grid

  const handleViewChange = ( newView: any) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  const handleClick = () => {
    navigate("/voucher/voucherHistory");
  };
  return (
    <>
      <Box >
        <Grid
          container
          spacing={0}
          alignItems="center"
          marginBottom={2}
          component={Paper}
          sx={{ p: 2 }}
        >
          <Grid item xs={8} sm={6} md={6} lg={4}>
            <Typography fontSize={"24px"} fontWeight={700} fontFamily={"monospace"}>
              Voucher Management
            </Typography>
          </Grid>
          <Grid item xs={4} sm={2} md={1} lg={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ToggleButtonGroup
              value={view}
              size="small"
              exclusive
              onChange={handleViewChange}
              aria-label="View toggle"
              sx={{
                '& .MuiToggleButton-root': {
                  color: 'info.main', // Default color for unselected buttons
                  '&:hover': {
                    backgroundColor: 'info.light', // Hover background color for unselected buttons
                  },
                  '&.Mui-selected': {
                    backgroundColor: 'info.main', // Background color when selected
                    color: 'white', // Text color when selected
                    '&:hover': {
                      backgroundColor: 'info.dark', // Darker color when hovered while selected
                    },
                  },
                  '&.Mui-focusVisible': {
                    backgroundColor: 'info.main', // Set focus color to avoid default blue
                  },
                  '&.Mui-selected.Mui-focusVisible': {
                    backgroundColor: 'info.dark', // Set focus color when selected
                  },
                  '&.Mui-selected:active': {
                    backgroundColor: 'info.dark', // Active state color to override blue
                  },
                },
              }}
            >
              <ToggleButton value="grid" aria-label="Grid view"  >
                <GridViewIcon />
              </ToggleButton>
              <ToggleButton value="table" aria-label="Table view">
                <TableViewIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
       
          <Grid item xs={4} sm={4} md={2} lg={2}>
            <TextField
              
              label="Search"
              variant="outlined"
              size="small"
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
          </Grid>
          <Grid item xs={4} sm={8} md={1} lg={2}>
            <Select
              fullWidth
              size="small"
              value={filterType}
              onChange={(e) => dispatch(setFilterType(e.target.value))}
              sx={{width:"120px"}}
            >
              <MenuItem value="All">All Types</MenuItem>
              <MenuItem value="Multi-Use">Multi-Use</MenuItem>
              <MenuItem value="Single-Use">Single-Use</MenuItem>
              <MenuItem value="Expiry Date">Expiry Date</MenuItem>
            </Select>
          </Grid>
          
          <Grid item xs={4} sm={4} md={2} lg={2} textAlign="right">
            <Button
              variant="contained"
              color="info"
              startIcon={<AddIcon />}
              onClick={openForm}
            >
              Add 
            </Button>
          </Grid>
        </Grid>

        {/* Conditional Rendering based on the selected view */}
        {view === "grid" ? (
         
            <Card component={Paper} sx={{p:3}}>
            <Box sx={{display:"flex",mb:2,justifyContent:"flex-end"}}>
              <Button onClick={handleClick} variant="contained" color="info" >
                     Voucher History
                     <HistoryIcon sx={{ml:1}}/>
                   </Button>
            </Box>
            <Grid container spacing={2}  >
            
              {filteredVouchers.map((voucher: VoucherType) => (
                  
                <Grid item xs={12} sm={6} md={3} key={voucher.voucherId}>
                  
                  <Card
                    sx={{
                      height: "100%",
                      width: "100%",
                      maxWidth:"300px",
                      boxShadow: "0 0 2px 2px #4B4432",
                      
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="280"
                      image={voucher.voucherImage ?? ""}
                      alt={voucher.voucherName}
                    />
                    <CardContent>
                      <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={12} lg={12} sx={{height:"55px"}}>
                          <Typography
                            variant="h6"
                            component="div"
                            fontFamily={"monospace"}
                            sx={{ fontSize: "18px", fontWeight: "700" }}
                          >
                            {voucher.voucherName}
                          </Typography>
                          
                        </Grid>
                        {/* <Grid item xs={6} sm={4} md={4} lg={4}>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              fontSize: "15px",
                              fontWeight: "800",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <ToggleOnIcon
                              sx={{
                                color: "#4B4432",
                                fontSize: 20,
                                marginRight: 1,
                              }}
                            />
                            Status
                          </Typography>
                        </Grid> */}
                       {/*  <Grid item xs={6} sm={8} md={8} lg={8}>
                       
                          <Chip
                            label={voucher.isActive ? "Active" : "Inactive"}
                            color={voucher.isActive ? "success" : "error"}
                            size="small"
                            sx={{ ml: 2 }}
                          />
                        </Grid> */}

                        <Grid item xs={6} sm={6} md={6} lg={6}>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              fontSize: "15px",
                              fontWeight: "800",
                              
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <EventBusyIcon
                              sx={{
                                color: "#4B4432",
                                fontSize: 20,
                                marginRight: 1,
                              }}
                            />
                            Expire Date
                          </Typography>
                        </Grid>

                        <Grid item xs={6} sm={6} md={6} lg={6}>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ ml: 2, fontSize: "15px", fontWeight: "600" }}
                          >
                           {voucher.voucherEndDate}
                          </Typography>
                        </Grid>
                        <Grid item xs={6} sm={4} md={4} lg={4}>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              fontSize: "15px",
                              fontWeight: "800",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <MergeTypeIcon
                              sx={{
                                color: "#4B4432",
                                fontSize: 20,
                                marginRight: 1,
                              }}
                            />
                            Brand
                          </Typography>
                        </Grid>
                        <Grid item xs={6} sm={8} md={8} lg={8}>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ ml: 2, fontSize: "15px", fontWeight: "600" }}
                          >
                            {voucher.voucherBrand}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ fontSize: "15px", fontWeight: "700",color:"orange",pb:1 }}
                            onClick={(e) => handleMenuOpen(e, voucher.voucherId)}
                          >
                           Actions
                          </Typography>
                        </Grid>
                      </Grid>

                      <Box
                        sx={{
                          // mt: 2,
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          size="small"
                          onClick={() => openPreviewDetails(voucher)}
                          sx={{
                            color: "#4B4432",
                            border: "2px solid",
                            backgroundColor: "#968A66",
                            width:"100%",mr:1
                          }}
                        >
                          View Details
                        </Button>
                        {/* <IconButton
                          size="small"
                          onClick={(e) => handleMenuOpen(e, voucher.voucherId)}
                          sx={{
                            color: "#4B4432",
                            border: "2px solid",
                            backgroundColor: "#fff",
                          }}
                        >
                          <MoreVertIcon />
                        </IconButton> */}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            </Card>
         
        ) : (
          <div>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Brand</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredVouchers.map((voucher: VoucherType) => (
                    <TableRow key={voucher.voucherId}>
                      <TableCell>
                        <Avatar
                          src={voucher.voucherImage ?? ""}
                          alt={voucher.voucherName}
                        />
                      </TableCell>
                      <TableCell>{voucher.voucherName}</TableCell>
                      <TableCell>{voucher.voucherDescription}</TableCell>
                      <TableCell>{voucher.voucherBrand}</TableCell>
                      <TableCell>{voucher.voucherType}</TableCell>
                      <TableCell>
                        <Chip
                          label={voucher.isActive ? "Active" : "Inactive"}
                          color={voucher.isActive ? "success" : "error"}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        <IconButton onClick={() => openPreviewDetails(voucher)}>
                          <VisibilityIcon />
                        </IconButton>
                        <IconButton
                          onClick={() =>
                            openUpdate(
                              voucherList.find(
                                (v: VoucherType) =>
                                  v.voucherId === selectedVoucherId
                              )!
                            )
                          }
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          onClick={() =>
                            openDeleteConfirm(
                              voucherList.find(
                                (v: VoucherType) =>
                                  v.voucherId === selectedVoucherId
                              )!
                            )
                          }
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )}
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem
        sx={{backgroundColor:"lightgray"}}
          onClick={() =>
            openUpdate(
              voucherList.find(
                (v: VoucherType) => v.voucherId === selectedVoucherId
              )!
            )
          }
        >
          Edit
        </MenuItem>
        <MenuItem
        sx={{backgroundColor:"lightgray"}}
          onClick={() =>
            openDeleteConfirm(
              voucherList.find(
                (v: VoucherType) => v.voucherId === selectedVoucherId
              )!
            )
          }
        >
          Delete
        </MenuItem>
      </Menu>

      <VoucherForm
        open={isFormOpen}
        closeForm={closeForm}
        initialVoucher={dataToEdit}
      />

      <VoucherPreview
        open={isPreviewOpen}
        onClose={() => setPreviewOpen(false)}
      />

      <Dialog open={isDeleteOpen} onClose={() => setDeleteOpen(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this voucher?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteOpen(false)}>Cancel</Button>
          <Button onClick={confirmDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
