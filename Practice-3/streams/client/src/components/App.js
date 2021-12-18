import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const Page1 = () => {
  return (
    <div>
      <p>Page 1</p>
      <Link to="/page2">Navigate to page2</Link>
    </div>
  );
};

const Page2 = () => {
  return (
    <div>
      <p>Page 2</p>
      <Link to="/">Navigate to page1</Link>
      <Link to="/">Navigate to page1</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
