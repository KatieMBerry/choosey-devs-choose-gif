import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import GIFSearch from '../../containers/GIFSearch';
// import FavoritesList from '../../containers/FavoritesList';
// import FavoritesById from '../../containers/FavoritesById';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={GIFSearch} />
          {/* <Route exact path="/favorites" component={FavoritesList} /> */}
          {/* <Route exact path="/favorites/:id" component={FavoritesById} /> */}
        </Switch>
      </Router>
    </>
  );
}

