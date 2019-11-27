import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import { removetocart } from '../../store/actions/addCart';
import {
    Card, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';
import history from '../../history'
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
async function hadleClick(id) {
    removetocart(id)
    setTimeout(function(){
        history.push('/FoodStore/')
        window.location.reload();
    },1500)
    
}
const ProjectSummary = (props) => {
    const classes = useStyles();
    const { project} = props
    console.dir(project)
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
                                    {project.name}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {project.menu}
                                </Typography>
                            </Grid>
                            <Grid item>
                                
                            <Grid item>
                            <Button  variant="outlined" color="primary" onClick = {() => hadleClick(project.id)} >Remove from Cart</Button>
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

export default ProjectSummary