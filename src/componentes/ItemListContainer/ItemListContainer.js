import ItemList from '../ItemListContainer/ItemList';
import ItemCount from '../ItemCount/ItemCount';

export default function ItemListContainer(props){
    console.log("PROPS:", props)
    return(
        <div>
        <ItemList/>
        <ItemCount stock='5' initial='1'/>
        </div>
    )
}