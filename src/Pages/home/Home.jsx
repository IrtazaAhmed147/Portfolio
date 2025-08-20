import { Box, Button, Typography } from '@mui/material';
import profileImage from '../../assets/mypic.png';
import resume from '../../assets/my_resume.pdf'
import React from 'react';

function Home() {
  return (
    <Box
      id="home"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' }, // Stack on mobile, side-by-side on desktop
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 2, sm: 3, md: 5 },
        py: { xs: 10, md: 15 },
        gap: { xs: 4, md: 8 },
      }}
    >
      {/* Text Section */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: { xs: 'center', md: 'flex-start' },
          textAlign: { xs: 'center', md: 'left' },
          gap: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem' },
          }}
        >
          Hi, I am <span style={{ color: '#d32f2f' }}>Irtaza Ahmed Khatri</span>, <br />
          MERN Stack Developer
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: 14, sm: 15, md: 16 },
            maxWidth: { md: '80%' },
            color: 'text.secondary',
          }}
        >
          I’m a Full Stack Developer experienced in JavaScript, React.js, Node.js,
          Express, and MongoDB. I create responsive, user-friendly web
          applications with clean code and a passion for continuous learning
          and collaboration.
        </Typography>

        <Button
          variant="contained"
          color="error"
          sx={{
            mt: 2,
            px: 3,
            py: 1,
            borderRadius: '8px',
            fontWeight: 'bold',
            textTransform: 'none',
          }}
          component="a"
          href={resume}   // place your resume file inside "public/resume.pdf"
          download="Irtaza_Ahmed_Resume.pdf"
        >
          Download Resume
        </Button>
      </Box>

      {/* Image Section */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          component="img"
          src={profileImage}
          alt="Profile"
          sx={{
            borderRadius: '50%',
            width: { xs: 180, sm: 220, md: 260 },
            height: { xs: 180, sm: 220, md: 260 },
            boxShadow: 4,
            border: '4px solid #fff',
          }}
        />
      </Box>
    </Box>
  );
}

export default Home;
