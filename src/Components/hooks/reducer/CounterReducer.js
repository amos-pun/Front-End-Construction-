const intialobject ={
    count : 0,
    data: 100
}

const counterReducer = (state = intialobject , action) => {
    switch(action.type){
        case"increase_count":
            return {...state, count: ++state.count}
        case"decrease_count":
            return {...state, count: --state.count}
        case"increase_data":
            return {...state, data: state.data + 100 }
        case"decrease_data":
            return {...state, data: state.data - 100 }
        
        default:
            return state
    }
}

export default counterReducer

// ... -> spread operator/rest operator
// preserves previous states