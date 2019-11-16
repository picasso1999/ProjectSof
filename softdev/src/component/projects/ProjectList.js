import React from 'react'
import ProjectSummary from './ProjectSummary'
import {Link} from 'react-router-dom'
const ProjectList = (props) => {
    return (
        <div>
            {props.projects && props.projects.map(project => {
                return(
                    <Link to={'/project/' + project.id} key={project.id}>
                    <ProjectSummary project={project}  />
                    </Link>
                )
            })}
        </div>


    )

}
export default ProjectList