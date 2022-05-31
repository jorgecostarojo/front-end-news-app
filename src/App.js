import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Navbar from "./components/Navbar"
import News from "./views/News"
import Archive from "./views/Archive"
import NotFound from "./views/NotFound"

function App() {
  return (
    <div >
      <Navbar />
      <div className="container">
        <Routes>
          <Route index element={<Navigate replace to="/news" />} />
          <Route path='/news' element={<News />} />
          <Route path='/archive' element={<Archive />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>

    </div>

  );
}

export default App;
