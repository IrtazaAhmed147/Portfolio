// src/Pages/about/About.jsx
import React from "react";
import {
  Box,
  Typography,
  Divider,
  Fade,
  Container,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const About = () => {
  return (
    <Box
    id='about'
      sx={{
        bgcolor: "#f5f5f5",
        py: { xs: 6, md: 3 },
        px:  {md:2,sm: 1,xs: 1},
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md" sx={{padding: {md:2,sm: 1,xs: 1}}}>
        <Fade in={true} timeout={1000}>
          <Box>
            {/* About Me Section */}
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                mb: 2,
                textAlign: "center",
                color: "primary.main",
              }}
            >
              About Me
            </Typography>

            <Divider
              sx={{
                bgcolor: "primary.main",
                height: "3px",
                width: "80px",
                mx: "auto",
                mb: 4,
                borderRadius: 2,
              }}
            />

            <Typography
              variant="body1"
              sx={{
                lineHeight: {md:1.8,sm: 1.5,xs: 1.3},
                textAlign: "center",
                color: "text.secondary",
                // fontSize: "1.1rem",
                fontSize: {md:"1.1rem",sm: "1rem",xs: "0.9rem"},
                mb: 3,
              }}
            >
              I’m a passionate MERN Stack Developer with a deep love for
              building modern, scalable, and user-friendly web applications. My
              journey in development has equipped me with expertise in MongoDB,
              Express.js, React.js, and Node.js, allowing me to bring ideas to
              life from concept to deployment.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                lineHeight: {md:1.8,sm: 1.5,xs: 1.3},
                textAlign: "center",
                color: "text.secondary",
               fontSize: {md:"1.1rem",sm: "1rem",xs: "0.9rem"},
                mb: 6,
              }}
            >
              Beyond coding, I value clean architecture, performance
              optimization, and creating experiences that users enjoy. I’m
              always learning, adapting to new tools, and pushing myself to
              deliver high-quality solutions for every project I work on.
            </Typography>

            {/* Education Section */}
            <Paper
              elevation={3}
              sx={{
                p: {md:4,sm: 2, xs: 1},
                borderRadius: 3,
                backgroundColor: "#fff",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  textAlign: "center",
                  color: "primary.main",
                }}
              >
                Education
              </Typography>
              <Divider
                sx={{
                  bgcolor: "primary.main",
                  height: "3px",
                  width: "80px",
                  mx: "auto",
                  mb: 3,
                  borderRadius: 2,
                }}
              />

              <List>
                    <ListItem>
                      <ListItemText
                        primary="Mern Stack Development"
                        secondary="Saylani Mass IT Training | 2024 - 2025"
                        primaryTypographyProps={{
                          fontWeight: "bold",
                          fontSize: {md:"1.1rem",sm: "1rem",xs: "1rem"},
                        }}
                        secondaryTypographyProps={{
                          color: "text.secondary",
                          fontSize: {md:"1rem",sm: "0.8rem",xs: "0.8rem"},
                        }}
                      />
                    </ListItem>
                <ListItem >
                  <ListItemText
                    primary="Intermediate in Pre Engineering"
                    secondary="Sindh Muslim Government Science College | 2022 - 2024"
                    primaryTypographyProps={{
                      fontWeight: "bold",
                       fontSize: {md:"1.1rem",sm: "1rem",xs: "1rem"},
                    }}
                    secondaryTypographyProps={{
                      color: "text.secondary",
                      fontSize: {md:"1rem",sm: "0.8rem",xs: "0.8rem"},
                    }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Bachelors Of Science, Information Techonology"
                    secondary="Sindh Madressatul Islam University | 2025 present"
                    primaryTypographyProps={{
                      fontWeight: "bold",
                       fontSize: {md:"1.1rem",sm: "1rem",xs: "1rem"},
                    }}
                    secondaryTypographyProps={{
                      color: "text.secondary",
                      fontSize: {md:"1rem",sm: "0.8rem",xs: "0.8rem"},
                    }}
                  />
                </ListItem>
              </List>
            </Paper>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default About;
