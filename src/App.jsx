import ComponentChallenge from "./Components/Component-Challeng/ComponentChallenge";
import ProductDetails from "./Components/E-Commerce/ProductDetails";
import Products from "./Components/E-Commerce/Products";
import Form from "./Components/Form-Application/Form";
import { Routes, Route } from "react-router-dom";
import { productContext } from "./Components/Context/productContext";


function App() {

  let productsList = [
    { id: 1, name: "Samsung", des: "the best product on TV" },
    { id: 2, name: "LG", des: "the Second product on TV" },
    { id: 3, name: "Fresh", des: "the Third product on TV" },
  ];


  return (
    <>
      <productContext.Provider value={productsList}>
        <Routes>
          <Route path="/" element={<h1>Welcome To Homw Page</h1>} />
          <Route path="/form" element={<Form />} />
          <Route path="/ComponentChallenge" element={<ComponentChallenge />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/productD/:prdId" element={<ProductDetails />} />
        </Routes>
      </productContext.Provider>
    </>
  );
}

export default App;

// <>
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src={viteLogo} className="logo" alt="Vite logo" />
//     </a>
//     <a href="https://react.dev" target="_blank">
//       <img src={reactLogo} className="logo react" alt="React logo" />
//     </a>
//   </div>
//   <h1>Vite + React</h1>
//   <div className="card">
//     <button onClick={() => setCount((count) => count + 1)}>
//       count is {count}
//     </button>
//     <p>
//       Edit <code>src/App.jsx</code> and save to test HMR
//     </p>
//   </div>
//   <p className="read-the-docs">
//     Click on the Vite and React logos to learn more
//   </p>
// </>
