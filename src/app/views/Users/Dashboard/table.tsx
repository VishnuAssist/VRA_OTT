import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Grid,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "24px !important",
  background: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: { padding: "16px !important" },
}));
const Mytable = () => {
  return (
    <StyledCard elevation={6} sx={{ width: "100" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent:"space-between",
          width:"100%"
        }}
      >
        <CardHeader title="Today's Transaction" />
        <Button endIcon={<ArrowRightIcon fontSize="small" />}>View all</Button>
        
      </Box>
      <Divider />
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>PRODUCT</TableCell>
              <TableCell>CATEGORY</TableCell>
              <TableCell>EMPLOYEES</TableCell>
              <TableCell align="right">DATE</TableCell>
              <TableCell align="right">TOTAL PRICE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Product A</TableCell>
              <TableCell>Category A</TableCell>
              <TableCell>Employee 1</TableCell>
              <TableCell align="right">2024-07-18</TableCell>
              <TableCell align="right">$100.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Product A</TableCell>
              <TableCell>Category A</TableCell>
              <TableCell>Employee 1</TableCell>
              <TableCell align="right">2024-07-18</TableCell>
              <TableCell align="right">$100.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </StyledCard>
  );
};

export default Mytable;
