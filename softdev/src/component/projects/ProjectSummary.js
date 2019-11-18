import React from 'react'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import moment from 'moment'
const ProjectSummary = ({project}) =>{
    return(
        <div>
            <Card>
                <CardBody>
                    <CardTitle>{project.title}</CardTitle>
                    <CardText>Post By {project.authorFirstName}</CardText>
                    <CardText>
                        <small className="text-muted">{moment(project.createdAt.toDate()).calendar()}</small>
                    </CardText>
                </CardBody>
            </Card>

        </div>

    )

}
export default ProjectSummary