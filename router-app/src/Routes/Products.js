import {Link, NavLink} from "react-router-dom"
import classes from "./Products.module.css"

const dummy=[{id:'p1', description:"book"},{id:'p2', description:"pencil"},{id:'p3', description:"pen"}]
const Products= ()=>{
    
    return (<div className={classes.products}>
    <ul className={classes.productsList}>
    {dummy.map(item=><li><h1><NavLink to={item.id}>{item.description}</NavLink></h1></li>)}
 
    </ul>

   </div>)
}

export default Products;