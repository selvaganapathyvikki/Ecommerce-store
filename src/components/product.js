function Product({ id, title, price, description, category, image }) {
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 rounded-xl shadow-xl">
      <p className="absolute top-2 right-2 text-gray-400">{category}</p>
      <img
        className="m-auto"
        loading="lazy"
        src={image}
        width={200}
        height={150}
        alt="This is a banner image"
      />
      <h1 className="my-3">{title}</h1>
      <h3 className="mb-5">Rs.{price * 100}</h3>
      <button className="mt-auto button ">Add to cart</button>
    </div>
  );
}

export default Product;
