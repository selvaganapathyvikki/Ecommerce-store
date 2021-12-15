import Product from "./product";
function ProductFeed({ products }) {
  return (
    <div className="bg-gray-200 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
      {products.map(({ id, title, price, description, category, image }) => (
        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />
      ))}
    </div>
  );
}
export default ProductFeed;
