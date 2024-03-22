import React from 'react'
import "./category.css"
import Input from '../../Input'

function Category({handleRadioChange}) {
  return (
    <div className='aaa'>
      <h2 className='sidebar-title'>Kategorie</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={e => handleRadioChange(e, 'category')} type="radio" value="" name="category" />
          <span className="checkmark"></span>Vše
        </label>

        <Input 
          handleRadioChange={handleRadioChange}
          value="sneakers"
          title="Tenisky"
          name="category"
        />

        <Input 
          handleRadioChange={handleRadioChange}
          value="flats"
          title="Flats"
          name="category"
        />

        <Input 
          handleRadioChange={handleRadioChange}
          value="sandals"
          title="Sandály"
          name="category"
        />

        <Input 
          handleRadioChange={handleRadioChange}
          value="heels"
          title="Podpatky"
          name="category"
        />
      </div>
    </div>
  )
}

export default Category
