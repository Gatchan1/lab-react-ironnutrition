import { useState } from 'react';
import { Input } from 'antd';

function AddFoodForm(props) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    const [textshowButton, setTextShowButton] = useState("Show Form") /* <-- iteration 7!! */

    const nameHandler = (e) => setName(e.target.value) // estas en realidad me las debería ahorrar declararlas y simplemente poner el "contenido" en los onChange correspondientes.
    const imageHandler = (e) => setImage(e.target.value)
    const caloriesHandler = (e) => setCalories(e.target.value)
    const servingsHandler = (e) => setServings(e.target.value)


    const addFoodHandler = (e) => {
        e.preventDefault(); //this is due to addFoodHandler being executed through a Button; Buttons always reload the page (because they try to connect to a server), unless we prevent it.
        const newFood = {name, image, calories, servings};

        // console.log("new foooood: ", newFood)
        props.addFood(newFood)
    }


    const showFormHandler = () => {
        if (textshowButton === "Hide Form") {
            setTextShowButton("Show Form")
        } else if (textshowButton === "Show Form") {
            setTextShowButton("Hide Form")
        }        
    }           


    return(
    <div className='addFoodForm'>
    {textshowButton === "Hide Form" &&
        <form>
        <label>Name: </label>
        <Input name="name" value={name} type="text" onChange={nameHandler} />
        <label>Image: </label>
        <Input name="image" value={image} type="text" onChange={imageHandler} />
        <label>Calories: </label>
        <Input name="calories" value={calories} type="number" onChange={caloriesHandler} />
        <label>Servings: </label>
        <Input name="servings" value={servings} type="number" onChange={servingsHandler} />
        <button onClick={addFoodHandler}>Add new food</button>
        </form>
    }
        <button onClick={showFormHandler}>{textshowButton}</button>
    </div>
    )
}

export default AddFoodForm