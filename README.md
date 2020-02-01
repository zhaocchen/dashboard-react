[部署地址](https://daaasheng.github.io/dashboard-react/)

## 官网开发指南

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


## 配置修改说明

### 1. 开发启动

修改端口```"start": "set PORT=3001 && react-scripts start"```

修改启动开发自动打开浏览器

### 2. 暴露配置文件```npm run eject```

### 3. 配置绝对路径

- @指向src/.
- components指向src/components.

/config/webpack.config.js中alias添加

```
'@': path.resolve(__dirname, '../src'),
'components': path.resolve(__dirname, '../src/components'),
```

### 4. 添加ui组件库, 配置按需加载

.babelrc添加配置

```
"plugins": [
      ["import", {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": "css" // `style: true` 会加载 less 文件
      }]
    ]
```

### 5. 启动编译后的项目

添加静态服务器（static server）

```
npm i -g serve
serve -s build
// 本地查看（默认）http://localhost:5000/
// 添加package.json/script命令启动
"serve": "serve -l 5001 -s build",
npm run serve
```

### 6. 配置github可访问

添加配置`"homepage": "./",`至package.json

添加命令`"deploy": "gh-pages -d build"`至package.json/scripts

```
npm install gh-pages --save-dev
```

运行`npm run build`

运行`npm run deploy`

在远程代码仓库检查是否存在gh-pages分支

github/settings/GitHub Pages切换source为gh-pages branch选项

即可在 *https://daaasheng.github.io/dashboard-react/* 中访问项目

### 7. 高阶组件装饰器

安装`npm i -D babel-plugin-transform-decorators-legacy`

添加`"transform-decorators-legacy"`至.babelrc

如果babel>=7, 需要额外安装`npm i -D @babel/plugin-proposal-decorators`

添加`["@babel/plugin-proposal-decorators", { "legacy": true }]`至.babelrc

应用, 执行顺序`withLog->box`(自下而上)

```
@box
@withLog
class Card extends React.Component
```

注释： 装饰器只能用于class

### 8. redux

- redux
- react-redux
- npm -i -D redux-devtools
- redux-logger
- redux-thunk


### 分离Jest

运行命令 jest 后会自动运行项目下所有.test.js和.spec.js这种格式的文件

