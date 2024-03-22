import React from 'react'
import "./colors.css"
import Input from '../../Input'

function Colors({handleRadioChange}) {
  return (
    <div className='aaa'>
        <h2 className='sidebar-title color-title'>Barvy</h2>
        <label className="sidebar-label-container">
          <input onChange={e => handleRadioChange(e, 'colors')} type="radio" value="" name="colors" />
          <span className="checkmark all"></span>Vše
        </label>

        <Input 
          handleRadioChange={handleRadioChange}
          value="black"
          title="Black"
          name="colors"
          color="black"
        />

        <Input 
          handleRadioChange={handleRadioChange}
          value="blue"
          title="Blue"
          name="colors"
          color="blue"
        />

        <Input 
          handleRadioChange={handleRadioChange}
          value="red"
          title="Red"
          name="colors"
          color="red"
        />

        <Input 
          handleRadioChange={handleRadioChange}
          value="green"
          title="Green"
          name="colors"
          color="green"
        />

        <label className="sidebar-label-container">
          <input type="radio" onChange={handleRadioChange} value="white" name='colors'/>
          <span className='checkmark' style={{background: "white", border: "2px solid black"}}></span>White
        </label>   
    </div>
  )
}

export default Colors
