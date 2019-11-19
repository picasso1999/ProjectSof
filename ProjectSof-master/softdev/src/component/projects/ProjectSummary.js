import React from 'react'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import moment from 'moment'
const ProjectSummary = ({project}) =>{
    return(
        <div>
            <Card>
                <CardBody>
                    <CardText>เมนู => {project.val}</CardText>
                    <CardTitle>ร้าน =>{project.name}</CardTitle>
                    <CardText>ที่อยู่ => {project.address}</CardText>
                    <CardText>
                        <small className="text-muted">{moment(project.createdAt.toDate().toString()).calendar()}</small>
                    </CardText>
                </CardBody>
            </Card>

        </div>

    )

}
export default ProjectSummary