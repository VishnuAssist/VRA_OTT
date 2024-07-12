import { Box, Button, Card, CardActions, CardContent, Divider, Grid, Stack, Tabs, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import { useState } from "react";
import { date } from "yup";


const Pageheading=()=>{
    const dummy=[{type:"Leave Request",Fromdate:"10-07-2024",Todate:"11-07-2024",Name:"Riyas",Reason:"Fever"},{type:"MC",Fromdate:"01-07-2024",Todate:"11-07-2024",Name:"Riyas",Reason:"Fever"},{type:"Leave Request",Fromdate:"10-07-2024",Todate:"11-07-2024",Name:"Riyas",Reason:"Fever"},{type:"MC",Fromdate:"10-07-2024",Todate:"11-07-2024",Name:"Riyas",Reason:"Fever"},{type:"Commision",Fromdate:"10-07-2024",Todate:"11-07-2024",Name:"Riyas",Reason:"Over Time work"},{type:"Commision",Fromdate:"10-07-2024",Todate:"11-07-2024",Name:"Riyas", Reason:"Over Time work"},{type:"Commision",Fromdate:"10-07-2024",Todate:"11-07-2024",Name:"Riyas", Reason:"Over Time work"}]
    const  [Type,setType]=useState("Leave Request")
    
    return(
        <>
<Box display={'flex'} justifyContent={"space-between"} flexWrap={"wrap"}>
          <Typography variant="h5" component="h3" gutterBottom>
            Approvals
          </Typography>
          <ToggleButtonGroup
            value={Tabs}
            exclusive
          >
            <ToggleButton
              disableRipple
              value="watch_list_columns"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={()=>setType("Leave Request")} >Leave</Button>
              <Button variant="contained" onClick={()=>setType("MC")} sx={{bgcolor:"#754CB9"}}>MC</Button>
              <Button variant="contained" onClick={()=>setType("Commision")}sx={{bgcolor:"#94810A"}}>Commision</Button>
              </Stack>
            </ToggleButton>
          </ToggleButtonGroup>
        
       </Box>
       <Grid container spacing={2}>
        {dummy.map((d=>(<>{
Type=="Leave Request"&&d.type=="Leave Request"&&(
    
    <Grid item xs={12} lg={4}>
        <Card sx={{height:"100%"}}>
            <Box sx={{bgcolor:"#115293",color:"#FAFAFA",display:"flex", justifyContent:"center",alignItems:"center",width:"100%",height:80}}>
<Typography variant="h6" >
    Leave Request
</Typography>
<Divider/>
            </Box>
            <CardContent>
            <Divider orientation="vertical"  variant="middle" flexItem />
            <Grid item xs={12} md={12} container spacing={2}>
            <Grid item  xs={3}>
                <Typography sx={{ fontSize: 20,fontWeight:"bold" }}>Name:</Typography>
                </Grid>
                <Grid item  xs={9}>
                <Typography sx={{ fontSize: 20 , marginLeft:"20px"}}> {d.Name}</Typography>
                </Grid>
                <Grid item  xs={3}>
                <Typography sx={{ fontSize: 20,fontWeight:"bold" }}>Fromdate:</Typography>
                </Grid>
                <Grid item  xs={7}>
                <Typography sx={{ fontSize: 20, marginLeft:"20px" }}>{d.Fromdate}</Typography>
                </Grid>
                <Grid item xs={3}>
                <Typography sx={{ fontSize: 20,fontWeight:"bold" }}> Todate:</Typography>
                </Grid>
                <Grid item xs={7}>
                <Typography sx={{ fontSize: 20, marginLeft:"20px" }}>{d.Todate}</Typography>
                </Grid>
                <Grid item xs={3}>
                <Typography sx={{ fontSize: 20,fontWeight:"bold" }}>  Reason:</Typography>
                </Grid>
                <Grid item xs={7}>
                <Typography sx={{ fontSize: 20 , marginLeft:"20px"}}>{d.Reason}</Typography>
                </Grid>
</Grid>
            </CardContent>
            
            <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
            
            <Button variant="contained" color="success">
  Approved
</Button>
<Button variant="contained" color="error">
  Reject</Button>
            </CardActions>
        

        </Card>
    </Grid>
)
}
{
    
    
Type=="MC"&&d.type=="MC"&&(
    <Grid item xs={12} lg={4}>
        <Card sx={{height:"100%"}}>
            <Box sx={{bgcolor:"#754CB9",color:"#FAFAFA",display:"flex", justifyContent:"center",alignItems:"center",width:"100%",height:80}}>
<Typography>
    Medical Leave
</Typography>
            </Box>
            <CardContent>
            <Divider orientation="vertical"  variant="middle" flexItem />
            <Grid item xs={12} md={12} container spacing={2}>
            <Grid item xs={3}>
                <Typography sx={{ fontSize: 20,fontWeight:"bold" }}>Name:</Typography>
                </Grid>
                <Grid item xs={9}>
                <Typography sx={{ fontSize: 20 , marginLeft:"20px"}}> {d.Name}</Typography>
                </Grid>
                <Grid item xs={3}>
                <Typography sx={{ fontSize: 20,fontWeight:"bold" }}>Fromdate:</Typography>
                </Grid>
                <Grid item xs={7}>
                <Typography sx={{ fontSize: 20, marginLeft:"20px" }}>{d.Fromdate}</Typography>
                </Grid>
                <Grid item xs={3}>
                <Typography sx={{ fontSize: 20,fontWeight:"bold" }}> Todate:</Typography>
                </Grid>
                <Grid item xs={7}>
                <Typography sx={{ fontSize: 20, marginLeft:"20px" }}>{d.Todate}</Typography>
                </Grid>
                <Grid item xs={3}>
                <Typography sx={{ fontSize: 20,fontWeight:"bold" }}>  Reason:</Typography>
                </Grid>
                <Grid item xs={7}>
                <Typography sx={{ fontSize: 20 , marginLeft:"20px"}}>{d.Reason}</Typography>
                </Grid>
</Grid>
                

            </CardContent>
            
            <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
            
            <Button variant="contained" color="success">
  Approved
</Button>
<Button variant="contained" color="error">
  Reject</Button>
  
            </CardActions>
            
        


        </Card>
    </Grid>
)
}
{
Type=="Commision"&&d.type=="Commision"&&(
    <Grid item xs={12} lg={4}>
        <Card sx={{height:"100%"}}>
            <Box sx={{bgcolor:"#94810A",color:"#FAFAFA",display:"flex", justifyContent:"center",alignItems:"center",width:"100%",height:80}}>
<Typography>
    Commision
</Typography>
            </Box>
            <CardContent>
            <Divider orientation="vertical"  variant="middle" flexItem />
            <Grid item xs={12} md={12} container spacing={2}>
            <Grid item xs={3}>
                <Typography sx={{ fontSize: 20,fontWeight:"bold" }}>Name:</Typography>
                </Grid>
                <Grid item xs={9}>
                <Typography sx={{ fontSize: 20 , marginLeft:"20px"}}> {d.Name}</Typography>
                </Grid>
                <Grid item xs={3}>
                <Typography sx={{ fontSize: 20,fontWeight:"bold" }}>Fromdate:</Typography>
                </Grid>
                <Grid item xs={7}>
                <Typography sx={{ fontSize: 20, marginLeft:"20px" }}>{d.Fromdate}</Typography>
                </Grid>
                <Grid item xs={3}>
                <Typography sx={{ fontSize: 20,fontWeight:"bold" }}> Todate:</Typography>
                </Grid>
                <Grid item xs={7}>
                <Typography sx={{ fontSize: 20, marginLeft:"20px" }}>{d.Todate}</Typography>
                </Grid>
                <Grid item xs={3}>
                <Typography sx={{ fontSize: 20,fontWeight:"bold" }}>  Reason:</Typography>
                </Grid>
                <Grid item xs={7}>
                <Typography sx={{ fontSize: 20 , marginLeft:"20px"}}>{d.Reason}</Typography>
                </Grid>
</Grid>
                

                

            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
             
            
            <Button variant="contained" color="success">
  Approved
</Button>
<Button variant="contained" color="error">
  Reject</Button>
            </CardActions>
            


        </Card>
    </Grid>
)
}
</>


        )))}
       </Grid>
       
        </>
    )
}
export default Pageheading;