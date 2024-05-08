import React from 'react'
import { forwardRef, useImperativeHandle, useRef  } from 'react';
import { createPortal } from 'react-dom';

const ResultModal = forwardRef( function ResultModal({targetTime , remaningTime, onReset} , ref){

  const dialog = useRef();

const userLost = remaningTime <= 0;
const formatRemainingTime = (remaningTime / 1000).toFixed(2);
// 
const score = Math.round(( 1 - remaningTime / (targetTime * 1000)) * 100);

console.log(score)
  useImperativeHandle(ref, () => {
    return{
      open(){
dialog.current.showModal();
      }
    }
  });

  return createPortal(
    <dialog ref={dialog} className='result-modal' >
{userLost && <h2>Your Lost</h2>}
{!userLost && <h2>Your Score: {score}</h2>}
<p>The Target Time Was <strong>{targetTime}  seconds.</strong></p>
<p>You stopped the time with <strong>{formatRemainingTime} second left. </strong></p>
<form method='dialog' onSubmit={onReset }>
        <button>
            Close
        </button>
    </form>
    </dialog>
    ,
    document.getElementById("modal")
  );
})

export default ResultModal;
