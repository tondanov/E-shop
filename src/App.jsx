import { useState } from 'react'
import './App.css'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './components/Sidebar/Sidebar'

// data
import products from "./db/data"
import Card from './components/Card'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedPrice, setSelectedPrice] = useState(null)
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [query, setQuery] = useState("");

  // Input filter
  
  
  const handleInputChange = e => {
    setQuery(e.target.value)
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // Radio filter
  const handleRadioChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'category') {
      setSelectedCategory(value);
    } else if (name === 'colors') {
      setSelectedColor(value);
    } else if (name === "price") {
      setSelectedPrice(value);
    }
  }

  // Buttons filter

  const handleButtonClick = (e) => {
    setSelectedCompany(e.target.value);
  };

  function filteredData(products, category, query, color, price) {
    let filteredProducts = products

    if (query) {
      filteredProducts = filteredItems;  
    }

    if (category) {
      filteredProducts = filteredProducts.filter(product =>
        product.category === category
      );
    }

    if (color) {
      filteredProducts = filteredProducts.filter(product =>
        product.color === color
      );
    }

    if (price) {
      filteredProducts = filteredProducts.filter(product =>
        product.newPrice === price
      );
    }

    if (selectedCompany) {
      filteredProducts = filteredProducts.filter(product => product.company === selectedCompany);
    }

    return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice}) => (
      <Card 
      key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      prevPrice={prevPrice}
      newPrice={newPrice}
      />
    ));
  }

  const result = filteredData(products, selectedCategory, query,selectedColor, selectedPrice)
  
  return (
    <>
      <Sidebar handleRadioChange={handleRadioChange}/>
      <Nav query={query} handleInputChange={handleInputChange}/>
      <Recommended handleButtonClick={handleButtonClick}/>
      <Products result={result}/>
    </>
  )
}

export default App
