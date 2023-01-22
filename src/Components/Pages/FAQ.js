import { TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import Footer from '../Layout/Footer'
import Navbar from '../Layout/Navbar'

const FAQ = () => {
  return (
    <div>
        <Navbar/>
            <Container maxWidth='xl' sx={{backgroundColor:"cornsilk", padding:'25px'}}>
                <Box padding={5} border={3} style={{borderColor:"yellowgreen"}} borderRadius={5} boxShadow={3}>
                    <Typography variant='h4' color="red">
                    <span className="color-danger">Question:</span>Do you have any suggestions !!</Typography>
                    <Typography> 
                    </Typography>
                    <Typography variant='h5' margin={2}>
                    Answer
                    <TextField id="standard-basic" label="Standard" variant="standard" multiline />
                    </Typography>
                </Box>
            </Container>
        <Footer/>
    </div>
  )
}

export default FAQ