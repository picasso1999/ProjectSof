import React from 'react'
import CartSummary from './CartSummary'
import {Link} from 'react-router-dom'
const CartList = (props) => {
    return (
        <div>
            <pre>
            {props.projects && props.projects.map(project => {
                return(
                    <Link to={'/project2/' + project.id} key={project.id}>
                    <CartSummary project={project} />
                    </Link>
                    
                )
            })}
            </pre>
            
        </div>
        
    )

}
export default CartList