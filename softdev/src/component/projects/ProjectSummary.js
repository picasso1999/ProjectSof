import React from 'react'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
const ProjectSummary = ({project}) =>{
    return(
        <div>
            <Card>
                <CardBody>
                    <CardTitle>{project.title}</CardTitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <CardText>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                </CardBody>
            </Card>

        </div>

    )

}
export default ProjectSummary