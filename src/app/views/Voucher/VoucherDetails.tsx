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

import { VoucherType } from "../../Models/VoucherType";
import {
  removeVoucher,
  setSelectedVoucher,
  setSearchTerm,
  setFilterType,
} from "../../Slices/VoucherSlice";
import VoucherForm from "./VoucherForm";
import VoucherPreview from "./VoucherPreview";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import HubIcon from "@mui/icons-material/Hub";
import MergeTypeIcon from "@mui/icons-material/MergeType";
import TableViewIcon from "@mui/icons-material/TableRows";

import {
  Add as AddIcon,
  MoreVert as MoreVertIcon,
  GridView as GridViewIcon,
  TableRows as TableRowsIcon,
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
export default function VoucherDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { voucherList, searchTerm, filterType } = useSelector(
    (state: any) => state.voucher
  );

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

  const handleViewChange = (event: any, newView: any) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  const handleClick = () => {
    navigate("/voucher/voucherHistory");
  };
  return (
    <>
      <Box sx={{ p: 2 }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          marginBottom={4}
          component={Paper}
          sx={{ p: 1 }}
        >
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography fontSize={"24px"} fontWeight={700}>
              Voucher Management
            </Typography>
          </Grid>
          <Grid
            item
            xs={4} sm={2} md={2} lg={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ToggleButtonGroup
              value={view}
              exclusive
              onChange={handleViewChange}
              aria-label="View toggle"
            >
              <ToggleButton value="grid" aria-label="Grid view">
                <GridViewIcon />
              </ToggleButton>
              <ToggleButton value="table" aria-label="Table view">
                <TableViewIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
       
          <Grid item xs={12} sm={4} md={2} lg={2}>
            <TextField
              fullWidth
              label="Search"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={2} lg={1}>
            <Select
              fullWidth
              value={filterType}
              onChange={(e) => dispatch(setFilterType(e.target.value))}
            >
              <MenuItem value="All">All Types</MenuItem>
              <MenuItem value="Multi-Use">Multi-Use</MenuItem>
              <MenuItem value="Single-Use">Single-Use</MenuItem>
              <MenuItem value="Expiry Date">Expiry Date</MenuItem>
            </Select>
          </Grid>
          
          <Grid item xs={12} sm={12} md={8} lg={2} textAlign="right">
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={openForm}
            >
              Add Voucher
            </Button>
          </Grid>
        </Grid>

        {/* Conditional Rendering based on the selected view */}
        {view === "grid" ? (
          <div>
            <Box sx={{display:"flex", justifyContent:"flex-end",flexWrap:"wrap",gap:2}}>
              <Button onClick={handleClick} variant="contained" >
                     Voucher History
                   </Button>
            </Box>
            <Grid container spacing={2} component={Paper} sx={{ p: 1 }}>
              
              {filteredVouchers.map((voucher: VoucherType) => (
                  
                <Grid item xs={12} sm={6} md={3} key={voucher.voucherId}>
                  <Card
                    sx={{
                      height: "100%",
                      width: "85%",
                      boxShadow: "0 0 2px 2px #4B4432",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={voucher.voucherImage ?? ""}
                      alt={voucher.voucherName}
                    />
                    <CardContent>
                      <Grid container spacing={2} sx={{ height: "250px" }}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                          <Typography
                            variant="h6"
                            component="div"
                            sx={{ fontSize: "18px", fontWeight: "700" }}
                          >
                            {voucher.voucherName}
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
                            <ToggleOnIcon
                              sx={{
                                color: "#4B4432",
                                fontSize: 20,
                                marginRight: 1,
                              }}
                            />
                            Status
                          </Typography>
                        </Grid>
                        <Grid item xs={6} sm={8} md={8} lg={8}>
                       
                          <Chip
                            label={voucher.isActive ? "Active" : "Inactive"}
                            color={voucher.isActive ? "success" : "error"}
                            size="small"
                            sx={{ ml: 2 }}
                          />
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
                            <HubIcon
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
                            Type
                          </Typography>
                        </Grid>
                        <Grid item xs={6} sm={8} md={8} lg={8}>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ ml: 2, fontSize: "15px", fontWeight: "600" }}
                          >
                            {voucher.voucherType}
                          </Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}></Grid>
                      </Grid>

                      <Box
                        sx={{
                          mt: 2,
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
                        <IconButton
                          size="small"
                          onClick={(e) => handleMenuOpen(e, voucher.voucherId)}
                          sx={{
                            color: "#4B4432",
                            border: "2px solid",
                            backgroundColor: "#fff",
                          }}
                        >
                          <MoreVertIcon />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
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
                          src={voucher.voucherImage}
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
