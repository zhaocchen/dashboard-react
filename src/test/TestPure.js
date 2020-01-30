import React from 'react';

// export default class TestPure extends React.Component {
export default class TestPure extends React.PureComponent {
    constructor() {
        super();
        this.state = {
          isShow: false
        };
        console.log('constructor');
      }
      changeState = () => {
        // const prevState = this.state.isShow;
        // const newState = !prevState;
        const newState = true;
        this.setState({
          isShow: newState
        })
      };
      render() {
        console.log('render after click');
        return (
          <div>
            <button onClick={this.changeState}>点击(浅比较)</button>
            <div>{this.state.isShow.toString()}</div>
          </div>
        );
      }
}
