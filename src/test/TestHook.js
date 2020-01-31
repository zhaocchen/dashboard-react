import React, {useState, useEffect} from 'react'

function TestHook() {
    function useTitle() {
        const [title, setTitle] = useState("自定义")
        console.log("=====定义useTitle======")
        useEffect(() => {
            setTimeout(() => {
                console.log("====watch ？=========");
                // setTitle("定时器修改")
            }, 3000)
        })
        return [title, setTitle];
    }

    // const [title] = useState("hah")
    const [title] = useTitle("hah")
    const [count, setCount] = useState(0);
    // console.log(count, setCount)
    const [name, setName] = useState("Mary");
    const [names, setNames] = useState(["Mary", "Jack", "Lucy"])
    const [inputText, setText] = useState("")

    useEffect(() => {
        console.log("watch state!")
    })

    useEffect(() => {
        console.log("watch count!")
    }, [count])

    return (<div>
        <h1>hook 用法</h1>
        <div>
            <p>title:{title}</p>
            <p>点击次数：{count}</p>
            <button onClick={() => setCount(count+1)}>
                点击
            </button>
            <p>当前值班负责人：{name}</p>
            <p>候选负责人列表：(点击可切换)</p>
            <ul>
                {names.map(item => (<li key={item} onClick={() => setName(item)}>{item}</li>))}
            </ul>
            <p>
                <input type="text" value={inputText} onChange={e => setText(e.target.value)}/>
                <button onClick={() => setNames([...names, inputText])}>新建负责人</button>
            </p>
        </div>
        <p>useEffect hook = componentDidMount + componentDidUpdate + componentWillUnmount</p>
        <p>
            注意：在函数式写法中使用
        </p>
    </div>);
}

export default TestHook;
