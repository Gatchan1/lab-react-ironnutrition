import { Input } from 'antd';
import { useState } from 'react';

function Search({searchFood}) {
    const [searchInput, setSearchInput] = useState("")

    const makeSearch = (e) => {
        setSearchInput(e.target.value);

        searchFood(e.target.value) // searchFood es la función que vino a través de props.
        // "e.target.value" va a llegar al elemento adre a través de las props, y allí en el elemento adre tomará el nombre de "searchValue".

        // ( Puede que sea mala práctica cambiar el nombre de las cosas al llevarlas de un lado a otro, pero para mí es importante saber que a veces no tienen por qué llamarse igual.. y entender bien bien de dónde vienen y a dónde van... )

        // Yo aquí contando mi vida
    }



    return (<form className='search'>
    <label>Search</label>
    <Input name="search" value={searchInput} type="text" onChange={makeSearch} />
    </form>
    )        
}

export default Search