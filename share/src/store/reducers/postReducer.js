const initState = {
    posts: [
        {id: '1', title: 'Learning React', content:'React js based frontend framework'},
        {id: '2', title: 'Learning Firebase', content:'Firebase is a real time database'},
        {id: '3', title: 'Learning Node.js', content:'Nodejs is js based backend framework'}
    ]
}
const postReducer = (state = initState, action)=>{
    switch(action.type){
        case 'CREATE_POST':
            console.log('Created Project', action.post)
            return state
        case 'CREATE_POST_ERROR':
            console.log('create project error', action.err)
            return state
        default:
            return state
    }
};

export default postReducer;