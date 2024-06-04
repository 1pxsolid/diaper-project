import classNames from "classnames/bind";

import styles from "./index.module.scss";

const cx = classNames.bind(styles);

function ProductDetail() {
  return <main className={cx("ProductDetail")}>기저귀 정보 상세</main>;
}

export default ProductDetail;
