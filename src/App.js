import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Layout} from './comp/Layout'
import {Routes, Route } from 'react-router-dom';
import Home from "./comp/Home";
import Contact from "./comp/Contact";
import NoPage from "./comp/NoPage";
import {About} from './comp/About'
import {Cv} from './comp/Cv'
import {Work} from './comp/Work'
import { BrowserRouter } from 'react-router-dom';

function App() {
  document.title = "Caja Boogers"
  return (
    <>
    <BrowserRouter>
    <Layout>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="Contact" element={<Contact />}/>
              <Route path="About" element={<About />} />
              <Route path="Cv" element={<Cv />} />
              <Route path="Work" element={<Work />} />
              <Route path="*" element={<NoPage />} />
          </Routes>
          </Layout>
    </BrowserRouter>
          </>
  );
}

export default App;
