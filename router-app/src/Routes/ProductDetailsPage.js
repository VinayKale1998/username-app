import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

const ProductDetailsPage =()=>{

    const params = useParams();
    return (
        <div>
            <h1>{params.productId}</h1>
            <h1> <Link to=".." relative="path"> Back</Link></h1>
           
        </div>
    )

}

export default ProductDetailsPage;