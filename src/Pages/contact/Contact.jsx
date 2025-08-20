import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  Box,
  Typography,
  TextField,
  Button,
  Fade,
  Slide,
  CircularProgress,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  const [checked] = React.useState(true);
  const [loading, setLoading] = useState(false); // 👈 loader state
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const newForm = new FormData(form.current)
    const name = newForm.get("name")
    const email = newForm.get("email")
    const message = newForm.get("message")
    if(!name.trim()|| !message.trim() || !email.trim()) {
      setLoading(false);
      return
    }
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset(); // 👈 clears the form
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
          setLoading(false);
        }
      );
  };

  return (
    <Box
      id="contact"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 6,
        width: "100%",
        py: 8,
        px: { xs: 3, md: 8 },
        bgcolor: "#f9f9f9",
      }}
    >
      {/* Left Side - Info */}
      <Slide direction="left" in={checked} timeout={800}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Let’s Work Together
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={4}>
            Have a project in mind or just want to say hello? Fill out the form
            and I’ll get back to you as soon as possible.
          </Typography>

          <Box display="flex" alignItems="center" mb={2}>
            <EmailIcon sx={{ color: "#d32f2f", mr: 1 }} />
            <Typography variant="body1">irtazaahmedk@gmail.com</Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={2}>
            <PhoneIcon sx={{ color: "#d32f2f", mr: 1 }} />
            <Typography variant="body1">+92 336 2276164</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <LocationOnIcon sx={{ color: "#d32f2f", mr: 1 }} />
            <Typography variant="body1">Karachi, Pakistan</Typography>
          </Box>
        </Box>
      </Slide>

      {/* Right Side - Form */}
      <Fade in={checked} timeout={1000}>
        <Box
          sx={{
            flex: 1,
            bgcolor: "white",
            p: 4,
            borderRadius: 2,
            boxShadow: "0px 8px 24px rgba(0,0,0,0.1)",
          }}
        >
          <form ref={form} onSubmit={sendEmail}>
            <TextField
              label="Your Name"
              fullWidth
              variant="outlined"
              name="name"  
              sx={{ mb: 2 }}
              required
            />
            <TextField
              type="email"
              label="Your Email"
              fullWidth
              variant="outlined"
              name="email" 
              sx={{ mb: 2 }}
              required
            />
            <TextField
              label="Message"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              name="message"
              sx={{ mb: 3 }}
              required
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              color="error"
              disabled={loading} // disable while loading
              startIcon={
                loading ? <CircularProgress size={20} color="inherit" /> : null
              }
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Box>
      </Fade>
    </Box>
  );
};

export default Contact;
