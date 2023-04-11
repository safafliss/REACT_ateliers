import "./App.css";
import React from "react";
import { Suspense } from "react";
import NavigationBar from "./components/NavigationBar";
// import NotFound from "./components/NotFound";
// import ProductDetail from "./components/ProductDetail";
// import Products from "./components/Products";
// import Products1 from "./components/Products1";
import { Route, Routes } from "react-router-dom";
import Products2 from "./components/Products2";
import ProductDetail2 from "./components/ProductDetail2";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import Products3 from "./components/Products3";
import { useDispatch } from "react-redux";


const Products1 = React.lazy(() => import("./components/Products1"));
const NotFound = React.lazy(() => import("./components/NotFound"));
const ProductDetail = React.lazy(() => import("./components/ProductDetail"));

// loader={dispatch(fetchProducts())}
function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <NavigationBar />
      <Suspense fallback={<p>Chargement ...</p>}>
        <Routes>
          <Route path="/p" element={<Products1 />} />
          <Route path="/p2" element={<Products2 />} />
          <Route path="/p3" element={<Products3 />} />
          {/* <Route path="/detail/:id" element={<ProductDetail />} /> */}
          <Route path="/detail/:id" element={<ProductDetail2 />} />
          <Route path="/addProduct" element={<AddProduct/>} />
          <Route path="/updateProduct/:id" element={<UpdateProduct/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
