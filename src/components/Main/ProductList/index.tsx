import ProductItem from "../ProductItem";

import classNames from "classnames/bind";

import styles from "./index.module.scss";
const cx = classNames.bind(styles);

function ProductList() {
  return (
    <section className={cx("ProductList")}>
      {Array.from({ length: 20 }).map(() => (
        <ProductItem />
      ))}
    </section>
  );
}

export default ProductList;
