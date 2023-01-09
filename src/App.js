import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Layout} from './comp/Layout'
import {Routes, Route } from 'react-router-dom';
import Home from "./comp/Home";
import Contact from "./comp/Contact";
import NoPage from "./comp/NoPage";
import {About} from './comp/About'
import {Cv} from './comp/Cv'

import {DrieTwintig} from './comp/DrieTwintig'
import {TweeTwintig} from './comp/TweeTwintig'
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    {/* <nav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/Contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/About"}>Contact</Link>
        </li>
        <li>
          <Link to={"/Cv"}>Contact</Link>
        </li>
        <li>
          <Link to={"/DrieTwintig"}>Contact</Link>
        </li>
      </ul>
    </nav> */}
    <Layout/>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="Contact" element={<Contact />}/>
              <Route path="About" element={<About />} />
              <Route path="Cv" element={<Cv />} />
              <Route path="DrieTwintig" element={<DrieTwintig />} />
              <Route path="TweeTwintig" element={<TweeTwintig />} />
              <Route path="*" element={<NoPage />} />
          </Routes>
    </BrowserRouter>
          </>
  );
}

export default App;
