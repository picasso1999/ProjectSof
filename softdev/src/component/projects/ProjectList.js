import React from 'react'
import ProjectSummary from './ProjectSummary'
import {Link} from 'react-router-dom'
const ProjectList = (props) => {
    return (
        <div>
            <pre>
            {props.projects && props.projects.map(project => {
                return(
                    <Link to={'/project/' + project.id} key={project.id}>
                    <ProjectSummary project={project}  />
                    </Link>
                    
                )
            })}
            </pre>
            
        </div>
        
    )

}
export default ProjectList