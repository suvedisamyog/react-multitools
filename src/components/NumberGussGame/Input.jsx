import React from 'react'

const Input = (props) => {
    
  return (
    <>
        <input 
        className="game-input"
        type="number"
         name="" 
         id="" 
         placeholder='ENTER'
         maxLength={2}
         max={20}
         min={0}
         onChange={props.changehandler}

         />
         <div>
         <h2 className={props.basedonevent}>{props.guss}</h2>
         <br />
         <h2>🤝Score:{props.score}</h2>
   <br />      <h2>↪️Attempt left:{props.attempt}</h2>

         </div>
    </>
  )
}

export default Input