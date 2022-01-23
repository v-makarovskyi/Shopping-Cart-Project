import { addToCart } from "../features/cartSlice";
import { useGetAllProductsQuery } from "../features/productsApi";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const histoty = useHistory()

  const handleAddtoCart = (product) => {
    dispatch(addToCart(product));
    histoty.push('/cart')
  };

  return (
    <div className="home-container">
      {isLoading ? (
        <p>Загрузка...</p>
      ) : error ? (
        <p>Ошибка :(</p>
      ) : (
        <>
          <h2>Последние поступления</h2>
          <div className="products">
            {data?.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price">${product.price}</span>
                </div>
                <button onClick={() => handleAddtoCart(product)}>
                  В корзину
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
