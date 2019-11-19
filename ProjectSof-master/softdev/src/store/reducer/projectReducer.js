const initState = {
projects:[
    {id:'1',title: 'what the hex1', content : 'blahhhhhh'},
    {id:'2',title: 'what the hex2', content : 'blahhhhhh'},
    {id:'3',title: 'what the hex3', content : 'blahhhhhh'}
]

}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('create project',action.project );
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error',action.err);
            return state;
        default:
            return state;
            
    }
}
export default projectReducer