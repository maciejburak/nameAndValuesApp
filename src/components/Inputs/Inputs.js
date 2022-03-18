import React, { useEffect, useRef, useState } from 'react'
import './Inputs.css'

function Inputs({handleNewUser}) {

  const nameInput = useRef(null)
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [activate, setActivate] = useState(0);
  const toggleActivate = () => {
    setActivate(activate + 1);
  };
  useEffect(() => {
    if(activate !== 0){
      nameInput.current.focus();
    }
  }, [activate]);

  const newUserData = {
    name: name,
    value: value,
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleNewUser(newUserData)
      setName('')
      setValue('')
      nameInput.current.focus();
    }
  }
  return (
    <div className='inputsContainer'>
      <button onClick={toggleActivate} >Focus a</button>
      <input value={name} ref={nameInput} onChange={e => setName(e.target.value)} type="text" />
      <input value={value} onKeyDown={e => handleKeyDown(e)} onChange={e => setValue(e.target.value)} type="text" />
    </div>
  )
}

export default Inputs