import React from 'react';
import Errormsg from "./Components/Error";
import FoodItems from "./Components/FoodItems";
import Container from './Components/Container';
// import inputFeild from './Components/inputFeild';
import './App.css'

const App = () => {
  let foodItems = ["Daal", "Sabji", "Milk", "Ghee", "Salad"];


  return (
    <>
     

    <Container>
      <h1>Healthy Food</h1>
      <Errormsg items={foodItems} />
      <FoodItems items={foodItems} />
      </Container>

    </>
  );
};

export default App;
