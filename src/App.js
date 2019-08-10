import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Posts, About, Login, MyPage, Search, NotFound } from './routes';
// import Home from './routes/Home';
// import Post from './routes/Post';
import Header from './components/Header';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    
                    <Route exact path="/" component={Home} />
                    <Route path="/about/:username" component={About} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/mypage" component={MyPage} />
                    <Route path="/login" component={Login} />
                    <Route path="/search" component={Search} />
                    <Route path="/render" render={() => (
                        <h3>Render Test</h3>
                    )} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;