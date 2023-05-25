import { useState } from 'react';
import './App.css';
import foods from './foods.json'; // This "foods" can be named anything; it doesn't need to match the name of the file.
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

  const deleteFood = (foodNameToDelete) => {
    let filteredFood = foodList.filter(food => food.name != foodNameToDelete);

    setFoodList(filteredFood)
  }

  return (
    <div className="App">
    <h1 style={{textAlign: "center"}}>Food App</h1>
    <Search searchFood={searchFoodFunction}/>
      <div className="foodList">
      {foodList.map((fooditem, k) => <FoodBox key={k} food={fooditem} deleteHandler={deleteFood} />)}      
      </div>
      <AddFoodForm addFood={addNewFood} />
    </div>
  );
}
export default App;
