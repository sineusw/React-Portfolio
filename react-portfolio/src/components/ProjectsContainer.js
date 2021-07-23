import React from 'react'
import Project from './Project'
import data from '../data.json'
import './ProjectsContainer.css'
function ProjectsContainer() {
    return (
        <div>
              <h2>My Projects</h2>
        <div className='project-container'>
            {data.map(project => <Project {...project} />)}
        </div>
        </div>
    )
}

export default ProjectsContainer
