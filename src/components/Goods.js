import React from 'react';

export default class Goods extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            goodList: [
                {id: 1, text: "商品1"},
                {id: 2, text: "商品2"},
            ],
            cart: [],
            inputText: '',
        }
        this.addGood = this.addGood.bind(this);
    }
    inputChange = (e) => {
        const newVal = e.target.value;
        console.log(newVal)
        this.setState({
            inputText: newVal,
        })
    }
    addGood() {
        this.setState(prevState => {
            return {
                goodList: [...prevState.goodList, {
                    id: prevState.goodList.length + 1,
                    text: `商品${prevState.goodList.length + 1}`
                }]
            };
        })

    }
    addToCart = (good) => {
        console.log('加入购物车', good);
        const newCart = [...this.state.cart];
        const index = newCart.findIndex(c => c.id === good.id);
        console.log('当前索引', index)
        if (index > -1) {
            const item = newCart[index];
            newCart.splice(index, 1, {
                ...item,
                count: item.count + 1,
            })
        } else {
            newCart.push({
                ...good,
                count: 1,
            }) 
        }
        // set
        this.setState({
            cart: newCart,
        })
        console.log(this.state.cart);
    }
    add = (good) => {
        console.log('购物车数量增加', good)
        const newCart = [...this.state.cart];
        const index = newCart.findIndex(c => c.id === good.id);
        const item = newCart[index];
        newCart[index].count = item.count + 1;
        this.setState({
            cart: newCart,
        })

    }
    minus = (good) => {
        console.log('购物车数量减少', good)
        const newCart = [...this.state.cart];
        const index = newCart.findIndex(c => c.id === good.id);
        const item = newCart[index];
        if (item.count > 1) {
            newCart[index].count = item.count - 1;
        } else {
            newCart.splice(index, 1)
        }
        this.setState({
            cart: newCart,
        })
    }
    render() {
        // const title = this.props.title ? <h1>{this.props.title}</h1> : null;
        const title = this.props.title && <h1>{this.props.title}</h1>;
        return (<div>
            购物车
            {/* 条件渲染 */}
            { title }

            {/* 列表渲染 */}
            <ul>
                {this.state.goodList.map(good => (<li key={good.id}>
                    {good.text}
                    <button onClick={() => this.addToCart(good)}>加入购物车</button>
                    </li>))}
                {/* <li>商品1</li> */}
            </ul>
            <Cart data={this.state.cart} add={this.add} minus={this.minus}/>
            <button onClick={this.addGood}>添加商品</button>
            <div>

                <h2>双向绑定</h2>
                <input type="text" value={this.state.inputText} onChange={this.inputChange}/>
                <p>输入内容：{this.state.inputText}</p>
            </div>
            
        </div>);
    }
}

function Cart({ data, add, minus }) {
    // console.log(data)
    return (<table>
        <thead>
            <tr>
                <th>商品</th>
                <th>数量</th>
                <th>单价</th>
            </tr>
        </thead>
        <tbody>
            { data.map(item => (<tr key={item.id}>
                <td>{item.text}</td>
                <td>
                    <button onClick={() => add(item)}>+</button>
                    {item.count}
                    <button onClick={() => minus(item)}>-</button>
                </td>
                <td>--</td>
            </tr>))}
        </tbody>
    </table>)
}
