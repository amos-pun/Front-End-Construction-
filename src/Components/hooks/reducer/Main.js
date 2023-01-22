import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
  const counterStore = useSelector((store) => store.count);
  let count = counterStore.count;
  let data = counterStore.data

  let dispatch = useDispatch()

  const inrease_count = () => {
    dispatch({type:"increase_count"})
  }
  const decrease_count = () => {
    dispatch({type:"decrease_count"})
  }   
  const gameStore = useSelector(store=>store.game)
  const game = gameStore.game
  const player = gameStore.player 
  
  const [games, setgame] = useState(' ')
  const [players, setplayer] = useState(' ')
  
  // const dispatch = useDispatch()
  
  const update_game = () => {
    dispatch ({type:"update_game", payload: games})
  }
  
  const update_player = () => {
    dispatch ({type:"update_player", payload: players})
  }
  return (
    <div>
    <h1 className="display-1 text-center">count: {count}</h1>
    <button className="btn btn-warning" onClick={inrease_count}>
      Update Count
    </button>
    <button className="btn btn-warning" onClick={decrease_count}>
      Decrease Count
    </button>
    <br />
    <h1 className="display-1 text-center">Data:{data}</h1>
    <button
      className="btn btn-warning"
      onClick={() => dispatch({ type: "increase_data" })}
    >
      increase data
    </button>
    <button
      className="btn btn-warning"
      onClick={() => dispatch({ type: "decrease_data" })}
    >
      minus data
    </button>

      <h1 className="display-1 text-center">Game:{game}</h1>
      <h1 className="display-3 text-center">Player:{player}</h1>
      <input className="form-control" type={'text'} onChange={e=>setgame(e.target.value)} placeholder="Write Game"/>
      <button className="btn btn-warning" onClick={update_game}>Update Game</button>
      <input className="form-control" type={'text'} placeholder="Write player name" onChange={e=>setplayer(e.target.value)}/>
      <button className="btn btn-warning" onClick={update_player} >Update player</button>

    </div>
  );
};

export default Main;
