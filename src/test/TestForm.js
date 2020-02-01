import React from 'react'



// hoc: 事件处理+数据收集+校验

function FormCreate(Comp) {
    class NewComp extends React.Component {
        constructor(props) {
            super(props);
            this.options = {};
            this.state = {};
        }

        validateField = field => {
            const { rules } = this.options[field]
            // console.log('rules', rules)
            const res = !rules.some(rule => {
                // validate required
                if (rule.required && !this.state[field]) {
                    // fill error message
                    this.setState({
                        [field+'Message']: rule.message
                    })
                    return true
                }
            })
            // clear error message
            if (res) {
                this.setState({
                    [field+'Message']: ""
                })
            }
            return res
        }
    
        handleChange = e => {
            const { name, value } = e.target
            // console.log(name, value)
            this.setState({
                [name]: value
            }, () => {
                this.validateField(name)
                // console.log(this.options, this.state)
            })
        }

        getFieldDec = (field, option) => {
            this.options[field] = option
            return InputComp => (<div>
                {React.cloneElement(InputComp, {
                    name: field,
                    value: this.state[field] || "",
                    onChange: this.handleChange
                })}
                {/* error message */}
                {this.state[field+'Message'] && (
                    <p style={{color: 'red'}}>
                        {this.state[field+'Message']}
                    </p>
                )}
            </div>)
        }

        validateAll = cb => {
            const resList = Object.keys(this.options).map(field => {
                return this.validateField(field)
            })
            const res = resList.every(v => v === true)
            cb(res, this.state)
        }

        render() {
            return <Comp {...this.props}
            getFieldDec={this.getFieldDec}
            validateAll={this.validateAll}
            ></Comp>
        }
    }
    return NewComp
}

@FormCreate
class Form extends React.Component {
    onSubmit = () => {
        // alert('提交！')
        const { validateAll } = this.props;
        validateAll((isValid, data) => {
            if (isValid) {
                alert("提交成功")
            } else {
                console.log("校验失败")
            }
        })
    }
    render() {
        const styles = {
            form: {
                border: 'solid 1px red',
            }
        }
        const { getFieldDec } = this.props
        // console.log(this.props.children)
        return <div style={styles.form}>
            {/* {this.props.children}             */}
            {getFieldDec("username", {
                rules: [{
                    required: true,
                    message: "请输入用户名"
                }]
            })(<input type="text" />)}
            {getFieldDec("password", {
                rules: [{
                    required: true,
                    message: "请输入密码"
                }]
            })(<input type="password" />)}
                
                <button onClick={this.onSubmit}>
                    登录
                </button>
        </div>;
    }
}

export default class TestForm extends React.Component {
    render() {
        return (<div>
            <h1>实现表单</h1>
            <Form>
                
            </Form>
        </div>);
    }
}
