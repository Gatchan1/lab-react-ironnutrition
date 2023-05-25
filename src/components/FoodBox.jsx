import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox({food, deleteHandler}) {
    const {name, image, calories, servings} = food

    const deleteFood = () => {
      deleteHandler(name)
    } // resulta que soy: listísima!!! He conseguido hacer todo lo del botón de delete sin apenas mirar lo de Mariona dilooooo! 
    

  return (
    // <Col>
      <Card
        title={name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button onClick={deleteFood} type="primary"> Delete </Button>
      </Card>
    // </Col>
  );
}

export default FoodBox;