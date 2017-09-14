import React, { Component } from 'react';

// import { render } from 'react-dom';

import App from './src/app';

// render(<App />, document.querySelector('#root'));

import modela from './src/components/page-a/model';
import modelb from './src/components/page-b/model';


import relation from './src/relation';

import { start } from 'vanex';

start({
    component: App,
    container: '#root',
    models: {
        modela,
        modelb,
    },
    // 注册关系
    relation,
});
