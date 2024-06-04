import classNames from "classnames/bind";

import styles from "./index.module.scss";

const cx = classNames.bind(styles);

function Category() {
  return (
    <div className={cx("Category")}>
      <button>하기스</button>
      <button>팸퍼스</button>
      <button>페넬로페</button>
      <button>마미포코</button>
      <button>킨도</button>
      <button>리베로</button>
    </div>
  );
}

export default Category;
