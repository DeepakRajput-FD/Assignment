import { Add, AddCircle, DarkMode, LightMode, PanoramaPhotosphere } from '@mui/icons-material'
import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function LoginPage() {
  
  const [toggle,setToggle]=useState(false);

  return (
    <>

    {
      !toggle
      ?
  <IconButton onClick={()=>setToggle(!toggle)} ><DarkMode sx={{color:'white',fontSize:'50px'}} /></IconButton>
    :
    <IconButton onClick={()=>setToggle(!toggle)} ><LightMode sx={{color:'white',fontSize:'50px'}} /></IconButton>

    }




    
        <Box sx={{backdropFilter:'blur(5px)',height:'450px',margin:'0px auto',width:'30%',border:'2px solid white',borderRadius:'20px',display:'flex',flexDirection:'column',background:toggle?'black':''}} >

        <Typography sx={{padding:3,color:toggle ? 'white' :'black',display:'flex',gap:1,fontSize:'20px',alignItems:'center',}} > <PanoramaPhotosphere sx={{fontSize:'40px',color:toggle ? 'red':'white'}} /> Amazing Services</Typography>

        <Typography variant='h5' sx={{textTransform:'capitalize',paddingLeft:3,color:toggle ?'white':'black'}} >
          Log In
        </Typography>
        
        <TextField type='email' label='Email' sx={{background:'white',width:'50ch',margin:'10px auto',borderRadius:2}} />

        <TextField type='password' label='password' sx={{background:'white',width:'50ch',margin:'10px auto',borderRadius:2}} />

      <Button variant='contained' sx={{width:'50ch',margin:'10px auto',borderRadius:2,height:'50px'}} >Log in</Button>

      <Typography variant='h5' sx={{textAlign:'center',color:toggle ? 'white':'black'}} >----- OR ----- </Typography>

      <Button  sx={{width:'50ch',margin:'10px auto',borderRadius:2,height:'50px',background:'rgb(16 185 129)',color:'white'}} startIcon={<AddCircle/>} >Create Account</Button>

        </Box>

    </>
  )
}
