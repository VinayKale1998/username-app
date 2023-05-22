import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_ITEMS = [
  {
    title: "Monitor",
    price: 200,
    description: "A 165hz beast",
    id: "p1",
  },
  {
    title: "Mouse",
    price: 300,
    description: "The lightest mouse yet",
    id: "p2",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        { DUMMY_ITEMS.map((item)=>{return <ProductItem key={item.id} item={item}></ProductItem>})}
      </ul>
    </section>
  );
};

export default Products;
