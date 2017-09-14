import React, { Component } from 'react';

import { Route, HashRouter } from 'react-router-dom';

import { vanex } from 'vanex';

// console.log('hashHistory:', hashHistory);

import Page from './components/page';
import Pagea from './components/page-a';
import Pageb from './components/page-b';

@vanex('modela', 'modelb')
export default class App extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <div><Route path="/page" component={Page} /></div>
                    <div><Route path="/pagea" component={Pagea} /></div>
                    <div><Route path="/pageb" component={Pageb} /></div>
                </div>
          </HashRouter>
        );
    }
}
