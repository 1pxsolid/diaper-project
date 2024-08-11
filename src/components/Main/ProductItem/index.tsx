import classNames from "classnames/bind";

import ImgThumbNail from "../../../assets/thumb-1.png";

import styles from "./index.module.scss";
const cx = classNames.bind(styles);

interface Props {
  onClick: VoidFunction;
}

function ProductItem({ onClick }: Props) {
  return (
    <>
      <button className={cx("ProductItem")} onClick={onClick}>
        <img className={cx("thumbnail")} src={ImgThumbNail} />
        <div className={cx("info-container")}>
          <h2>하기스 써머 울트라</h2>
          <p>장당 560원</p>
        </div>
      </button>
      <hr className={cx("divider")} />
    </>
  );
}

export default ProductItem;
