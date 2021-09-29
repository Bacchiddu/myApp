import ItemList from '../ItemListContainer/ItemList';

export default function ItemListContainer(props){
    console.log("PROPS:", props)
    return(
        <div>
        <ItemList/>
        </div>
    )
}