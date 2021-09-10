import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Items from './pages/Items/Items';
import ItemDetail from './pages/ItemDetail/ItemDetail';
import Layout from './components/Layout/Layout';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Items} />
            <Route path="/story/:objectID" component={ItemDetail} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;