import { useNavigate } from "react-router-dom";

import ProductItem from "../ProductItem";
import classNames from "classnames/bind";

import styles from "./index.module.scss";
const cx = classNames.bind(styles);

function ProductList() {
  const navigate = useNavigate();

  return (
    <section className={cx("ProductList")}>
      {Array.from({ length: 20 }).map((_, index) => (
        <ProductItem
          key={index}
          onClick={() => {
            navigate("/detail/1");
          }}
        />
      ))}
    </section>
  );
}

export default ProductList;
