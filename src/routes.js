import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import IdeaMain from './components/idea/IdeaMain';
import SearchMain from './components/search/SearchMain';

export default (    
    <Route path="/" component={App}>
        <IndexRoute component={SearchMain}/>
        <Route path="ideas" component={IdeaMain}/>
    </Route>
);

        
