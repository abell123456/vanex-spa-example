import React, {
    Component
} from 'react';

import {
    vanex,
} from 'vanex';


@vanex('modelb')
export default class CountComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        // 可以调用 model 的方法触发数据改变
        this.modelb.inc();
        // 也可以直接修改 model 中的值
        // this.modelb.counts ++;
    }

    render() {
        // 可以直接通过 this.modelb 访问被 @vanex 注入的 modelb
        // 也可以通过 this.props.modelb 访问，但是除非是纯函数组件否则推荐通过 this 访问
        return (
            <div>
                <button onClick={this.clickHandler}>
                    Click {this.modelb.counts}
                </button>


                <div>pagea count: {this.modelb.pageaNum}</div>
            </div>
        );
    }
}
