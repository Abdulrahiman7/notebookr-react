import React from 'react'

const Input = (props) => {
  return (
    <input className='input-box' type={props.type} id={props.id} onChange={props.onChange} value={props.value}/>
  )
}

export default Input