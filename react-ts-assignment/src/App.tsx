import React from "react";
import SignUpForm from "./components/SignUpForm";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/signup",
    element: <SignUpForm />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
