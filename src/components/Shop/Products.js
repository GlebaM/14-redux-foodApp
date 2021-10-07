import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "This is my first book - amazing!",
  },
  {
    id: "p2",
    price: 8,
    title: "My Second Book",
    description: "This is my second book - fabulous!",
  },
  {
    id: "p3",
    price: 10,
    title: "My Third Book",
    description: "This is my third book - glorious!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
