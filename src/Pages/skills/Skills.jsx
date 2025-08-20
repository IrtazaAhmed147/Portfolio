import { Box, Typography, Tooltip } from '@mui/material';
import reactLogo from '../../assets/react.png';
import jsLogo from '../../assets/js.png';
import nodeLogo from '../../assets/nodejs.png';
import exLogo from '../../assets/ex.png';
import mongoLogo from '../../assets/MongoDB.png';
import githubLogo from '../../assets/github.png';
import firebaseLogo from '../../assets/firebase.png';
import materailUILogo from '../../assets/mui.png';
import tailwindLogo from '../../assets/tailwind.png';
import React from 'react';

function Skills() {
  const skills = [
    { name: 'JavaScript', logo: jsLogo },
    { name: 'React.js', logo: reactLogo },
    { name: 'Node.js', logo: nodeLogo },
    { name: 'Express.js', logo: exLogo },
    { name: 'MongoDB', logo: mongoLogo },
    { name: 'GitHub', logo: githubLogo },
    { name: 'Material UI', logo: materailUILogo },
    { name: 'Tailwind', logo: tailwindLogo },
    { name: 'Firebase', logo: firebaseLogo },
  ];

  return (
    <Box id='skills' sx={{ textAlign: 'center', py: 6, backgroundColor: '#f8f9fa' }}>
      <Typography 
        variant="h3" 
        sx={{ fontWeight: 'bold', mb: 4, color: '#333' }}
      >
        My Skills
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: {md:4,sm: 2, xs: 4},
          maxWidth: '1000px',
          margin: '0 auto',
          padding: 1
        }}
      >
        {skills.map((skill, index) => (
          <Tooltip title={skill.name} arrow key={index}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                  boxShadow: '0px 4px 15px rgba(0,0,0,0.2)',
                  borderRadius: '12px',
                },
                backgroundColor: '#fff',
                p: {md:2,sm: 1,xs:1},
                borderRadius: '12px',
                width: {md:'120px',sm: '100px', xs: '60px'},
              }}
            >
              <Box
                component="img"
                src={skill.logo}
                alt={skill.name}
                sx={{ width: '60px', height: '60px', mb: 1 }}
              />
              <Typography variant="body1" sx={{ fontWeight: 500, fontSize: {md:'16px',sm: '13px', xs: '11px'}}}>
                {skill.name}
              </Typography>
            </Box>
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
}

export default Skills;
