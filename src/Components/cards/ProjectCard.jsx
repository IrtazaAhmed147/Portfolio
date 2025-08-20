import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Modal,
  Fade,
  Backdrop,
   IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function ProjectCard({ image, title, description, liveLink, githubLink }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        sx={{ width: 345, boxShadow: 4, borderRadius: 3, cursor: "pointer" }}
        
      >
        <CardMedia component="img" height="40%" image={image} alt={title} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            height: "60%",
          }}
        >
          <CardContent sx={{padding: {md: 2, sm: 2, xs:1}}}>
            <Typography gutterBottom  component="div" sx={{fontSize:{md:"1.5rem",sm: "1.4rem",xs: "1rem"}}}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{fontSize:{md:"1rem",sm: "0.9rem",xs: "0.8rem"}}}>
              {description.slice(0, 110)}...
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
            
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={handleOpen}
                target="_blank"
              >
                Open
              </Button>
            
            <Button
            
              sx={{
                backgroundColor: "#464545ff",
                padding: "5px 10px",
                borderRadius: "7px",
                color: "#fff",
                fontWeight: "bold",
                transition: "0.5s all ease-in-out",
                "&:hover": {
                  backgroundColor: "#2e2e2eff",
                  color: "#f5f5f5",
                  boxShadow: "0px -1px 4px 2px #5f5e5e",
                },
              }}
              size="small"
              href={githubLink}
              target="_blank"
            >
              GitHub
            </Button>
          </CardActions>
        </Box>
      </Card>

      {/* Modal with Fade Transition */}
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
      >
        <Fade in={open}>
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
  );
}
