import {
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Store = () => {
  const data = [
    {
      code: "TWG001",
      name: "Rizwan",
      country: "UK",
      status: "Active",
    },
    {
      code: "TWG002",
      name: "Hari",
      country: "India",
      status: "Active",
    },
    {
      code: "TWG003",
      name: "Riyas",
      country: "Canada",
      status: "Active",
    },
    {
      code: "TWG004",
      name: "Shiek",
      country: "India",
      status: "Active",
    },
  ];
  return (
    <>
      <Container maxWidth='lg'>
       
          
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
              {data &&
                data.map((store) => (
                  <TableRow>
                    <TableCell>{store.code}</TableCell>
                    <TableCell>{store.country}</TableCell>
                    <TableCell>
                      <Button variant="contained">{store.status}</Button>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        size="small"
                        color="primary"
                        aria-label="VisibilityIcon"
                      >
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton
                        size="small"
                        color="primary"
                        aria-label="edit"
                      >
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          
        
      </Container>
    </>
  );
};

export default Store;
