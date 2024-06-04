import { Route, Routes } from "react-router-dom";
import Main from "../Main/index";
import ProductDetail from "../ProductDetail/index";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Main />} />
        <Route path="/detail" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
}
export default Router;
