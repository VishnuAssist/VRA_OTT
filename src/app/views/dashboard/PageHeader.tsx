import { Box, Grid, Paper, Typography } from "@mui/material";


export default function PageHeader() {
  return (
   <>
   <Box sx={{margin:"0 20px 0 20px"}}>
     <Grid
          container
          spacing={0}
          alignItems="center"
          marginBottom={2}
          component={Paper}
          sx={{ p: 2 }}
        >
          <Grid item xs={12} sm={12} md={6} lg={8}>
            <Typography fontSize={"24px"} fontWeight={700}>
            Dashboard
            </Typography>
          </Grid>
         
      
          
          
          {/* <Grid item xs={12} sm={12} md={8} lg={4} textAlign="right">
            <Button
              variant="contained"
              color="primary"
            >
              Add
            </Button>
          </Grid> */}
        </Grid>
        </Box>
   </>
  )
}
