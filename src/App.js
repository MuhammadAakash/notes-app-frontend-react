import "./App.css";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import {
  BrowserRouter as Router,
  Route,
  createBrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
