import ItemDetail from '../ItemDetailContainer/ItemDetail'

function ItemDetail(){
    return(
        <div>
             {resultado ? <ItemDetail data={resultado[0]} /> : <h1>Cargando...</h1>}
        </div>
    )
}
export default ItemDetail;