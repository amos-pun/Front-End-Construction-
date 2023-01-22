const initialData = {
    game: "Football" ,
    player: "Messi"
}

const GameReducer = (state=initialData, action ) => {
    switch(action.type){
        case"update_game":
            return {...state, game: action.payload}
        case"update_player":
            return {...state, player: action.payload}
        default:
            return state
    }
    
}

export default GameReducer

// ...state, ==> rest operator