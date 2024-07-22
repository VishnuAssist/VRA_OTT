
import { Box, Card, Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "24px !important",
  background: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: { padding: "16px !important" }
}));
const Mytable = () => {
  return (
    <Box sx={{ m: 1, p: 1 }}>
      <StyledCard elevation={6}>
      <Typography variant="h6">Today's Transactions</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
      
    </Box>
  );
};

export default Mytable;
