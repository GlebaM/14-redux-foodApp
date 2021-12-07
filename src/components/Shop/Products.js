import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p0",
    price: 10,
    title: "The Malady and Other Stories",
    description:
      "It includes the 8 stories from Something ends, Something begins",
  },
  {
    id: "p1",
    price: 7.99,
    title: "The Last Wish ",
    description:
      "Its stories take place before Sword of Destiny even though it was published later.",
  },
  {
    id: "p2",
    price: 8,
    title: "Something Ends, Something Begins ",
    description: "Only two of its stories are related to The Witcher saga",
  },
  {
    id: "p3",
    price: 10,
    title: "Blood of Elves ",
    description: "Empire of Nilfgaard attacks the Kingdom of Cintra...",
  },
  {
    id: "p4",
    price: 6,
    title: "Time of Contempt",
    description:
      "Northern Kingdoms are secretly preparing for war with Nilfgaard not knowing...",
  },
  {
    id: "p5",
    price: 11,
    title: "Baptism of Fire",
    description:
      "In the aftermath of the Thanedd incident, war is still raging between Nilfgaard and the Northern Kingdoms.",
  },
  {
    id: "p6",
    price: 10,
    title: "The Tower of Swallows",
    description:
      "An elderly philosopher living alone in the Pereplut swamp, comes upon an injured Ciri near his home.",
  },
  {
    id: "p7",
    price: 9,
    title: "Lady of the Lake",
    description:
      "After escaping from Skellen and the bounty hunter Leo Bonhart is going after Ciri.",
  },
  {
    id: "p8",
    price: 12,
    title: "Season of Storms",
    description:
      "Geralt of Rivia fights a dangerous monster whose only goal in life is to kill people.",
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
