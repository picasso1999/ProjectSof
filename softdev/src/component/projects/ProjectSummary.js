import React from 'react'

import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
//import {Button} from 'reactstrap'
import Button from '@material-ui/core/Button';
import { addtocart } from '../../store/actions/addCart';
import {
    Card, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 'auto',
    },
    image: {
        width: 170,
        height: 170,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

const ProjectSummary = ({ project },props) => {
    const {profile,auth,id} = props;
    console.dir(id)
    const classes = useStyles();
    
    return (
        
        <div className={classes.root} >
            <br></br>
            <Paper className={classes.paper}>
                <Grid container spacing={3}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={project.image} />
                        </ButtonBase>
                    </Grid>
                    <Grid item  sm container justify="space-evenly">
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    {project.val}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {project.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {project.address}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    ประเภทของร้านอาหาร : {project.select}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <CardText>
                                    <small className="text-muted">{moment(project.createdAt.toDate().toString()).calendar()}</small>
                                </CardText>
                            <Grid item>
                            
                        </Grid>
                        
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">{project.price} ฿</Typography>
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Paper>
            
            <br></br>
        </div>
    );
}
const mapStateToProps = (state,ownProps) => {
    
    console.dir(state);
    return {
        profile : state.firebase.profile,
        auth : state.firebase.auth ,
        id : state.firebase.auth.uid
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectSummary)