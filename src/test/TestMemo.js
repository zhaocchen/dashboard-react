import React from 'react';

function Comp (props) {
    return (<div>memo

        <p>memo(函数式组件) = pureComponent</p>
        <p>base: reactV16.6+</p>
    </div>)
}

const TestMemo = React.memo(Comp);

export default TestMemo
