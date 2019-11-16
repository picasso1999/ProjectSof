import React from 'react'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
const ProjectSummary = ({project}) =>{
    return(
        <div>
            <Card>
                <CardBody>
                    <CardTitle>{project.title}</CardTitle>
                    <CardText>Post By {project.authorFirstName}</CardText>
                    <CardText>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                </CardBody>
            </Card>

        </div>

    )

}
export default ProjectSummary