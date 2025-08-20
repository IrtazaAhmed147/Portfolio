import { Box, CardMedia, Fade, IconButton, Modal,Backdrop,Typography,Button } from '@mui/material'
import React from 'react'
import CloseIcon from "@mui/icons-material/Close";

function ModalComponent({open,setOpen,title, description, githubLink,liveLink, image}) {

     const handleClose = () => setOpen(false);
    
  return (
   <>
     <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
            // sx={{width: { xs: "95%", sm: '55%' }, height:'90%',}}
            
          >
            <Fade in={open}>
            {/* <Fade in={true}> */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: { xs: "95%", sm: '55%' },
                  
                  bgcolor: "background.paper",
                  borderRadius: 3,
                  boxShadow: 24,
                  p: {md:3,sm:2,xs:1.5},
                }}
              >
                {/* Close Button */}
                <IconButton
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    color: "grey.700",
                    "&:hover": { color: "black" },
                  }}
                >
                  <CloseIcon />
                </IconButton>
    
                <CardMedia
                  component="img"
                  image={image}
                  alt={title}
                  sx={{
                    width: "100%",
                    // height: '100%',
                    objectFit: "cover",
                    borderRadius: 2,
                    mb: 2,
                  }}
                />
                <Typography
                  id="project-modal-title"
                  fontWeight="bold"
                  mb={1}
                  sx={{fontSize: {md:"1.5rem",sm: "1.4rem",xs: "1.3rem"}}}
                >
                  {title}
                </Typography>
                <Typography id="project-modal-description" variant="body2" mb={3} sx={{fontSize: {md:"1rem",sm: "0.9rem",xs: "0.9rem"}}}>
                  {description}
                </Typography>
                <Box sx={{ display: "flex", gap: 2 , justifyContent: 'center'}}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#313131",
                      color: "#fff",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#000",
                        transform: "scale(1.05)",
                        transition: "0.3s",
                      },
                    }}
                    href={githubLink}
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  {liveLink && <Button
                    variant="contained"
                    color="error"
                    sx={{
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#d32f2f",
                        transform: "scale(1.05)",
                        transition: "0.3s",
                      },
                    }}
                    href={liveLink}
                    target="_blank"
                  >
                    View Live
                  </Button>}
                </Box>
              </Box>
            </Fade>
          </Modal>
   </>
  )
}

export default ModalComponent