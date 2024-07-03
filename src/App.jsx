import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import store from "./redux/store";
import Details from "./components/Details";

function App() {
  return (
    <>
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
           <Route index element={<HomePage />} />
           <Route path="/movie/:id" element={<Details/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
