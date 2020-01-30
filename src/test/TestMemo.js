import React from 'react';

function Comp (props) {
    return (<div>memo</div>)
}

const TestMemo = React.memo(Comp);

export default TestMemo
