import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'reactstrap'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import Select from 'react-select'
import { getFirestore } from 'redux-firestore'


import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));


class Dashboard extends Component {

    state = {
        doc: ''
    }
    handlechange = e => {
        const firestore = getFirestore()
        firestore.collection("projects").get().then((docs) => {
            docs.forEach((docs) => {
                if (docs.data().val == e.label) {
                    this.setState({
                        doc: docs.id
                    })
                    console.dir(this.state.doc)
                }
            })
        })
    }

    render() {
        //console.log(this.props);
        const { projects, auth, profile } = this.props;
        var data = [
        ]
        const firestore = getFirestore()
        firestore.collection("projects").get().then((docs) => {
            docs.forEach((docs) => {
                let name = docs.data().name
                let val = docs.data().val
                data.push({ value: name, label: val })
            });
        })
        if (!auth.uid) return <Redirect to='/Login/' />
        return (
            <Container >
                <Grid container spacing={1}>
                    <Grid item xs={11}>
                        <br />
                        <Select id='search' placeholder="search for menu/category" noOptionsMessage={() => "ไม่มีผลลัพธ์ที่ตรงกับที่สิ่งที่คุณต้องการค้นหา"} options={data} onChange={this.handlechange} openMenuOnClick={this.handlesummit}></Select>
                    </Grid>

                    <Grid item xs>
                        <br />
                        <Fab size="small" color="primary" href={'/project/' + this.state.doc} key={this.state.doc}>

                            <SearchIcon />
                        </Fab>
                    </Grid>

                    <Grid item xs={12} >
                        <ProjectList projects={projects} auth={auth} />
                    </Grid>
                </Grid>
            </Container>

        )
    }

}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Dashboard)