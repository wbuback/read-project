import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Posts from './Posts';
import PostsByCategory from './PostsByCategory';
import AddPost from './AddPost';
import PostDetailPage from './PostDetailPage';
import EditPost from './EditPost';
import NotFound from './NotFound';
import '../styles/css/main.css';
// import '../styles/css/layout.css';

const App = () => (
  <BrowserRouter>
    <div>
      <Header title="Readable" />
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path="/new" component={AddPost} />
        <Route exact path="/error/:errMsg" component={NotFound} />
        <Route exact path="/:category" component={PostsByCategory} />
        <Route exact path="/:category/:postId" component={PostDetailPage} />
        <Route exact path="/:category/:postId/edit" component={EditPost} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
