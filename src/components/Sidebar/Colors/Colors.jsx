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
          title="Černá"
          name="colors"
          color="black"
        />

        <Input 
          handleRadioChange={handleRadioChange}
          value="blue"
          title="Modrá"
          name="colors"
          color="blue"
        />

        <Input 
          handleRadioChange={handleRadioChange}
          value="red"
          title="Červená"
          name="colors"
          color="red"
        />

        <Input 
          handleRadioChange={handleRadioChange}
          value="green"
          title="Zelená"
          name="colors"
          color="green"
        />

        <label className="sidebar-label-container">
          <input type="radio" onChange={handleRadioChange} value="white" name='colors'/>
          <span className='checkmark' style={{background: "white", border: "2px solid black"}}></span>Bílá
        </label>   
    </div>
  )
}

export default Colors
