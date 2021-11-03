import Card from '../Views/Card'
import { Link } from 'react-router-dom';
import ItemList from '../ItemListContainer/ItemList'
// import axios from 'axios';

function ItemListContainer (){

    return(
       <Link to='/character'> <ItemList/> </Link>
    )
}

export default ItemListContainer;