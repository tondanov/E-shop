import React from 'react'
import "./price.css"
import Input from '../../Input'

function Price({handleRadioChange}) {
  return (
    <div className='aaa'>
      <h2 className="sidebar-title price-title">Cena</h2>
      
      <label className="sidebar-label-container">
          <input onChange={e => handleRadioChange(e, 'price')} type="radio" value="" name="price" />
          <span className="checkmark"></span>Vše
      </label>

      <Input 
        handleRadioChange={handleRadioChange}
        value={50}
        title="$0 - 50"
        name="price"
      />

      <Input 
        handleRadioChange={handleRadioChange}
        value={100}price
        title="$50 - 100"
        name="price"
      />

      <Input 
        handleRadioChange={handleRadioChange}
        value={150}
        title="$100 - 150"
        name="price"
      />

      <Input 
        handleRadioChange={handleRadioChange}
        value={200}
        title="$200 a více"
        name="price"
      />
    </div>
  )
}

export default Price
