import classNames from "classnames/bind";

import Category from "./Category";
import ProductList from "./ProductList";

import styles from "./index.module.scss";

const cx = classNames.bind(styles);

function Main() {
  return (
    <main className={cx("Main")}>
      <header>
        <h1>👶 기저귀 핫딜 👶</h1>
        <Category />
      </header>

      <ProductList />
    </main>
  );
}

export default Main;
