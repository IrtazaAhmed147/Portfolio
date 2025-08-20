import React from 'react'
import ProjectCard from '../../Components/cards/ProjectCard.jsx'
import projects from '../../../projects.js'
import { Box, Typography } from '@mui/material'

function Projects() {
  return (
    <>
      <Box
        id='projects'
        sx={{
          p: {md: 3, sm: 2, xs:1},
          backgroundColor: "#f5f5f5",
        }}>

        <Typography fontWeight={'bold'} color='#333' variant='h3' textAlign={'center'}>
          Projects
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
            p: {md: 3, sm: 2, xs:1},
          }}
        >

          {projects.map((project) => (
            <ProjectCard {...project} key={project.id} />
          ))}

        </Box>
      </Box>
    </>
  )
}

export default Projects