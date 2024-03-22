import React from 'react'
import "./recommended.css"
import Buttons from '../components/Buttons'

function Recommended({handleButtonClick}) {
  return (
    <>
      <div>
        <h2 className='recommended-title'>Dopourečné</h2>
        <div className="recommended-flex">
          <Buttons onClickHandler={handleButtonClick} value="" title="Všechny Produkty"/>
          <Buttons onClickHandler={handleButtonClick} value="Nike" title="Nike"/>
          <Buttons onClickHandler={handleButtonClick} value="Adidas" title="Adidas"/>
          <Buttons onClickHandler={handleButtonClick} value="Puma" title="Puma"/>
          <Buttons onClickHandler={handleButtonClick} value="Vans" title="Vans"/>
        </div>
      </div>
    </>
  )
}

export default Recommended
