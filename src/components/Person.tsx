import React, { useState } from 'react'

interface PersonProps {
  name: string,
  age: number,
  email?: string
}

const Person = ({ name, age, email }: PersonProps) => {
  const [isShowInfo, setShowInfo] = useState<boolean>(false);
  
  const handleToggleInfo = (): void => {
    setShowInfo(x => !x);
  }

  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: '20px',
    fontSize: '20pt',
    padding: '2rem'
  }


  return (
    <>
    {
      isShowInfo && 
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        {email ?? <p>Email: {email}</p>}
      </div>
    }
    <button onClick={handleToggleInfo} style={buttonStyle}>Toggle</button>
    </>
  )
}

export default Person