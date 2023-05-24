import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);

  const addNewFood = (newFood) => {
    const newFoodList = [...foodList, newFood];
    setFoodList(newFoodList)
  }

  const searchFoodFunction = (searchValue) => {
    let foundFood = foodList.filter((food) => 
      food.name.includes(searchValue))

    setFoodList(foundFood);
  }

  return (
    <div className="App">
    <h1>Food App</h1>
    <Search searchFood={searchFoodFunction}/>
      <div className="foodList">
      {foodList.map((fooditem, k) => <FoodBox key={k} food={fooditem} />)}      
      </div>
      <AddFoodForm addFood={addNewFood} />
    </div>
  );
}
export default App;
