import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import serviceDetails from './data/serviceDetails';
import Add from './components/pages/Add';
import Service from './components/pages/Service';
import Classes from './components/pages/Classes';
import GetIdFromParams from './components/GetIdFromParams';
import Layout from './components/layout/Layout';

// three things needed to define routes with react-router-dom
import {
  BrowserRouter as Router, //alias browser router -> router
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* ALL REACT ROUTER DOM STUFF MUST GO IN A ROUTER!!!!!!!!!!!!! */}

      <Router>
        {/* all routes must fo in the Routes component */}


        <Layout>



          <Routes>
            {/* route needs a path and an element. path = url, element = component */}
            <Route
              exact path='/'
              element={<Home />}
            />

            <Route
              exact path='/services' // if making more specific paths, 'exact path' the less specific one
              element={<Services services={serviceDetails} />}
            />

            {/* details pages in react router rules
            rule1: the details page should be /page/:id
            rule2: you need to exact path the less specific page
            rule3: both paths should be given the same props 
            rule4: please never send data through react router dom links
            (in react/stateful app state is always the single source of truth)
          */}
            <Route
              path='services/:id'
              element={<Service services={serviceDetails} />}
            />

            <Route
              path='/contact'
              element={<Contact />}
            />

            <Route
              path='/add/:x/:y' // /add/10/30 => 40
              element={<Add />}
            />

            <Route
              path='/classes/:classId'
              element={<GetIdFromParams ClassComponent={Classes} />}
            />

            {/* 404 ROUTE MUST BE ON BOTTOM */}
            <Route
              path='*'
              element={<NotFound />}
            />
          </Routes>
        </Layout>

      </Router>
    </div>
  );
}

export default App;
