import axios from "axios";

const getProducts = () => {
  return axios
    .get("https://dummyjson.com/products")
    .then((res) => res.data.products);
};

export { getProducts };
