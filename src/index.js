import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: () => <NotesListPage />,
    exact: true,
  },
  {
    path: "/notes/:id",
    Component: () => <NotePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container dark">
      <div className="app">
        <App />
        <RouterProvider router={routes} />
      </div>
    </div>
  </React.StrictMode>
);
