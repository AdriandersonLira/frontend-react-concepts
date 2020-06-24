> Aula 2 - configurando o babel
```
yarn init -y
```
```
mkdir public src
```
```
yarn add react react-dom
```
```
cd public; touch index.html; cd ..
```
```
yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli
```
```
touch babel.config.js
```
```
cd src; touch index.js; cd ..
```
```
yarn add @babel/cli
```
```
yarn babel src/index.js --out-file public/bundle.js
```
> Aula 3 - configurando o webpack
```
touch webpack.config.js
```
```
yarn add babel-loader
```
```
yarn webpack --mode development 
```
```
yarn add webpack-dev-server -D
```
```
yarn webpack-dev-server --mode development
```
```
cd src; touch App.js; cd ..
```
```
cd src; mkdir components; cd components; touch Header.js; cd ../..
```
```
yarn add style-loader css-loader
```
```
cd src; touch App.css; cd ..
```
```
yarn add file-loader
```
```
yarn add axios
```
```
cd src; mkdir services; cd services; touch api.js; cd ../..
```
```
yarn add @babel/plugin-transform-runtime -D
```
