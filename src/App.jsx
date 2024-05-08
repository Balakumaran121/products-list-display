import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
