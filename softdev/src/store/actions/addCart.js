import { getFirestore } from "redux-firestore"
import history from '../../history'
export const addtocart = (username,name,menu,price,image) =>{
    console.log(image)
    const db = getFirestore()
    db.collection("cart").add({
        uid:username,
        name: name,
        menu :menu,
        price: Number(price),
        image : image
    })
    alert('Add this menu to Your Cart')
    setTimeout(function(){
        history.push('/FoodStore/')
        window.location.reload();
    },1000)
}
export const removetocart = (docid) =>{
    var r = window.confirm('Are you sure to remove this menu')
    const db = getFirestore()
    if (r) {
        db.collection("cart").doc(docid).delete()
    }
}