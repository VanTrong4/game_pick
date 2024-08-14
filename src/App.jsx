import { useEffect, useReducer, useRef, useState } from 'react'
import './assets/css/index.css'
import { initState,reducer } from './reducer/myReducer';
import TimeCaculate from './components/TimeCaculate';



function App() {
  const [state,dispatch] = useReducer(reducer,initState);

  const changePoint = (e)=>{
    dispatch({type:"CHANGE_POINTS",payload: e.target.value});
  }

  const btnClick = ()=>{
    if(!state.isPlaying){
      dispatch({type:"START"});
    }else{
      dispatch({type:"RESTART"});
    }
  }
  console.log(state);
  

  return (
    <div className='game'>
      <div className="container">
        <div className="game__wrap">

          <h1>LET'S PLAY</h1>

          <div className="game__wrap-line">
            <div className="txt">Points:</div>
            <input type="number" name="point" value={state.points} onChange={changePoint}/>
          </div>

          <div className="game__wrap-line time">
            <div className="txt">Time:</div>
            <TimeCaculate start={state.isPlaying}/>
          </div>

          <button onClick={btnClick}>{state.isPlaying ? 'Restart' : 'play'}</button>

          <div className="game__wrap-area">
            <div className="cir">1</div>
            <div className="cir">2</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
