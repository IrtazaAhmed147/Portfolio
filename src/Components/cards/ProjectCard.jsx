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
import ModalComponent from "../modals/Modal";

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
          <CardContent sx={{ padding: { md: 2, sm: 2, xs: 1 } }}>
            <Typography gutterBottom component="div" sx={{ fontSize: { md: "1.5rem", sm: "1.4rem", xs: "1rem" } }}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: { md: "1rem", sm: "0.9rem", xs: "0.8rem" } }}>
              {description.slice(0, 110)}...
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>

            <Button
              variant="contained"
              color="error"
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
      {open && <ModalComponent open={open} setOpen={setOpen} title={title} image={image} description={description} githubLink={githubLink} liveLink={liveLink} />}

    </>
  );
}
