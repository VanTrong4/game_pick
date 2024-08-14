const initState = {
    points: 0,
    time: 0,
    isPlaying: false,
    timePlay: 0,
}

const reducer = (state,action)=>{
    switch (action.type) {
        case 'CHANGE_POINTS':
            return {...state,points: action.payload}

        case 'START':
            return {...state,isPlaying: true}

        case 'RESTART':
            return {...state,isPlaying: true}
    
        default:
            return state
    }
}

export {initState,reducer};