import Card from "../Card/Card";
import "./FeaturedProducts.scss";

function FeaturedProducts({ type }) {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/6311605/pexels-photo-6311605.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Black Hoodie",
      isNew: true,
      oldPrice: 60,
      price: 45,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/6311584/pexels-photo-6311584.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Gray Sweatshirt",
      isNew: false,
      oldPrice: 50,
      price: 38,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/977908/pexels-photo-977908.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "White Graphic T-Shirt",
      isNew: true,
      oldPrice: 25,
      price: 18,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Blue Denim Jacket",
      isNew: false,
      oldPrice: 80,
      price: 65,
    },
  ];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          ex vitae porro maiores voluptates dolores sed ut, veniam dolore iste
          provident saepe illo adipisci nobis placeat ullam reprehenderit facere
          voluptatibus. vitae porro maiores voluptates dolores sed ut, veniam
          dolore iste
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
