import React, { useState , useRef} from 'react'
import ResultModal from './ResultModal';

const TimerChallenge = ({title, targetTime }) => {
  let timer = useRef();
  const dailog = useRef();
const [timeRemaining , setTimeRemaining] = useState(targetTime * 1000);

const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;


if (timeRemaining <= 0){
  clearInterval(timer.current);
  
  dailog.current.open();
}
function handleRest(){

}
  function handleStart(){
    
   timer.current =  setInterval(()=>{
      
setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
    } , 10)
   
  }
  function handleStop(){
    clearInterval(timer.current)
    dailog.current.open();
  }
  return (
    <>
    <ResultModal ref={dailog} targetTime={targetTime} remaningTime={timeRemaining} onReset={handleRest}/>
    <section className='challenge'>
        <h2>{title}</h2>
        {/* {timeIsActive && <p>You Lost!</p>} */}
        <p className='challenge-time'>
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button onClick={timeIsActive ? handleStop : handleStart}>{timeIsActive ? 'Stop' : 'Start'} Challenge</button>
        </p>
        <p className={timeIsActive ? 'active' : undefined}>
            {timeIsActive ?  'Time is running...' :  'Timer Inactive'} 
        </p>
    </section>
    </>
  )
}

export default TimerChallenge
