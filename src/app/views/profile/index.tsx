
import { Container, Grid } from "@mui/material"
import Profile from "./profile"
const index = () => {
  return (
    <>
    <Container sx={{ mt: 3 }} maxWidth="lg">
    <Grid item xs={12} container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={2}>
<Profile/>
</Grid>
</Container>
    </>
  )
}

export default index