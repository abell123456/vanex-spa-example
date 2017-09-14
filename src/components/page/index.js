import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Page extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                我是导航页~

                <div><Link to="/pagea">跳到page-a页面</Link></div>

                <div><Link to="/pageb">跳到page-b页面</Link></div>
            </div>
        );
    }
}
