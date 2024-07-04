import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import Layout from "./page/Layout";
import { Provider } from "react-redux";
import store from "./redux/store";
import Details from "./components/Details";
import Genre from "./page/Genre";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/genre" element={<Genre />} />
              <Route index element={<HomePage />} />
              <Route path="/movie/:id" element={<Details />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
