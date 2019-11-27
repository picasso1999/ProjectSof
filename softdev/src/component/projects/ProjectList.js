import React from 'react'
import ProjectSummary from './ProjectSummary'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
const ProjectList = (props) => {
    return (
        <div>
            <pre>
            {props.projects && props.projects.map((project) => {
                var auth = props.auth.uid
                console.log(auth)
                return(
                    
                    <Link to={'/project/' + project.id} key={project.id}>
                    <ProjectSummary project={project} auth = {auth} />
                    
                    
                    
                    </Link>
                    
                )
            })}
            </pre>
            
        </div>
        
    )

}
export default ProjectList