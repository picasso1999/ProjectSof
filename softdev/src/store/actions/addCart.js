import { getFirestore } from "redux-firestore"
import history from '../../history'
export const addtocart = (username,name,menu,price) =>{
    const db = getFirestore()
    db.collection("cart").add({
        uid:username,
        name: name,
        menu :menu,
        price:price
    })
    alert('Add this menu to Your Cart')
}
export const removetocart = (docid) =>{
    var r = window.confirm('Are you sure to remove this menu')
    const db = getFirestore()
    if (r) {
        db.collection("cart").doc(docid).delete()
        history.push('/FoodStore/')
        window.location.reload();
    }
}