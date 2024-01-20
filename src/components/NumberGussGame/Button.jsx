
export const Buttons = (props) => {
  return (
    <>
        <button className='mainbutton' onClick={props.clickevent}  >{props.title}</button>
    </>
  )
}
