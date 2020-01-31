import React from 'react'

class RadioGroup extends React.Component {
    render() {
        return (<div>
            {console.log(this.props.children)}
            {
                React.Children.map(this.props.children, child => {
                    console.log(this.props.name)
                    // child.props.name = this.props.name
                    const NewChild = React.cloneElement(child, {
                        name: this.props.name
                    })
                    return NewChild
                })
            }
        </div>)
    }
}

class Radio extends React.Component {
    render() {
        const {children, ...rest} = this.props;
        // console.log(this.props, children, rest)
        return (<p>            
            <label>
                <input type="radio" {...rest} />
                {children}
            </label>
        </p>);
    }
}

export default class TestRadio extends React.Component {
    render() {
        return (<div>
            <RadioGroup name="favorite">
                <Radio value="apple">apple</Radio>
                <Radio value="banana">banana</Radio>
                <Radio value="orange">orange</Radio>
            </RadioGroup>
        </div>);
    }
}
