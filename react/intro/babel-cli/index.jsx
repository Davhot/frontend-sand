// npm install
// npm start

// Babel-cli позволяет производить статическую компиляцию,
// при которой мы явно создаем код на JavaScript
// ./node_modules/.bin/babel index.jsx --out-file app.js

class Hello extends React.Component {
  render() {
    return <h1 > Hello, React < /h1>;
  }
}
ReactDOM.render(
  <Hello></Hello>,
  document.getElementById("app")
)
