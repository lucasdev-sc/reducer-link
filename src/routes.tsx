import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Links from "./Pages/Links";

const RouteApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteApp;
