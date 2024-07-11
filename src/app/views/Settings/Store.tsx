import {
  Button,
  Card,
  Container,
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
      <Container>
        <Card sx={{ p: 2,mt:2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{fontSize:'20px'}}>Code</TableCell>
                <TableCell sx={{fontSize:'20px'}}>Name</TableCell>
                <TableCell sx={{fontSize:'20px'}}>Country</TableCell>
                <TableCell sx={{fontSize:'20px'}}>Status</TableCell>
                <TableCell sx={{fontSize:'20px'}}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((store) => (
                  <TableRow>
                    <TableCell>{store.code}</TableCell>
                    <TableCell>{store.name}</TableCell>
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
        </Card>
      </Container>
    </>
  );
};

export default Store;
