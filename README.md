<h1 align="center" width="100%" height="300px" background="#000">
    <img alt="Backend Node" title="Backend Node" src="https://miro.medium.com/max/3200/1*OvYjQmX9G7QXZkMYQE-wpQ.jpeg" width="100%" />
</h1>

<p align="center">
  <a href="#-tecnologia">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-comandos">Comandos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=7159c1&labelColor=ce" alt="PRs welcome!" />

 <img src="https://img.shields.io/static/v1?label=&message=React&color=61dbfb&labelColor=ce" alt="React.JS" />

 <img src="https://img.shields.io/static/v1?label=&message=Babel&color=f4c430&labelColor=ce" alt="Babel" />

 <img src="https://img.shields.io/static/v1?label=&message=Webpack&color=1b4f8f&labelColor=ce" alt="Webpack" />
</p>

<br>

## 🚀 Tecnologia

Projeto desenvolvido com a stack [React.JS](https://pt-br.reactjs.org/docs/getting-started.html). Apresentando os conceitos básicos da stack.

## 💻 Projeto

Nesse projeto contém os primeiros conceitos do React.js. Dentre eles tem: 

### Babel

- Converte (transpila) o código do React para um código que o browser entenda.
- Babel não entende arquivos .css, .png e entre outros. Por isso se utiliza o Webpack

### Webpack

Para cada de tipo de arquivo (.js, .css, .png) eu vou converter o código de uma maneira diferente.

#### Loaders

É usado pelo Webpack, para o babel reconhecer arquivos externos.

- babel-loader
- css-loader
- image-loader

### Conceitos React

- Componente - Partes da Aplicação, divisão da aplicação. Pedaços da aplicação que podem ser reaproveitado o código.

- Propriedade - informações que eu posso passar de um componente pai para um componente filho.

- Estado - É uma propriedade do componente onde colocamos dados que, quando mudados, devem causar uma nova renderização.

- Imutabilidade - Não podemos multar variáveis, alterar o seu formato. precisa recriar a informação com o que você quer.

- useState - retorna um array com 2 posições.
  1. Variável com o seu valor inicial.
  2. Função para atualizarmos esse valor.

- useEffect - serve para disparar funções assim que um ação for executada ou quando a página for aberta. recebe 2 parâmetros.
  1. Qual função eu quero disparar.
  2. Quando eu quero disparar essa função.

## 👨🏻‍💻 Comandos

> Configurando o babel
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
> Configurando o webpack
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
> Componentização
```
cd src; touch App.js; cd ..
```
```
cd src; mkdir components; cd components; touch Header.js; cd ../..
```
> Importando CSS e imagens
```
yarn add style-loader css-loader
```
```
cd src; touch App.css; cd ..
```
```
yarn add file-loader
```
> Listando Projetos da API
```
yarn add axios
```
```
cd src; mkdir services; cd services; touch api.js; cd ../..
```
> Cadastrando Projetos
```
yarn add @babel/plugin-transform-runtime -D
```

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

---

Feito com ♥ by Adrianderson Lira 
