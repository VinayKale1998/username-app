
import Card from "../UI/Card"
import classes from "./UsersList.module.css"
export default function UserList(props)
{

    return(
        <Card className={classes.users}>
        <ul>
        {props.items.map((item)=>{
            return (
                
                 <li key={item.key}> {item.name} is of the age {item.age}  </li>
            )
        })}
        </ul>
        </Card>
    )
}