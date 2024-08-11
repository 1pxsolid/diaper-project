import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../Main";
import ProductDetail from "../ProductDetail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
