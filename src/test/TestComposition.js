import React from 'react';

class Box extends React.Component {
    render() {
        const styles = {
            card: {
                border: 'solid 1px red',
            }
        }
        console.log(this.props.children)
        return (<div style={styles.card}>
            卡片
            {this.props.children}
        </div>);
    }
}

class Card extends React.Component {
    render() {
        const testData = {
            name: "Mary",
            age: 16,
        };
        return this.props.children(testData);
    }
}

export default class TestComposition extends React.Component{
    render() {
        return (<div>
            <h1>
            复合
            </h1>
            <Box>
                <p>
                    slot1
                </p>
                <p>
                    slot2
                    <span>
                        grandchildren
                    </span>
                </p>
            </Box>
            <Card>
                {({ name, age }) => (
                <div>
                    <p>名字：{ name }</p>
                    <p>年龄: { age }</p>
                </div>
                )}
            </Card>
            </div>);
    }
}