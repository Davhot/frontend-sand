import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Products extends Component {
  state = { products: [] }

  componentDidMount() {
    this.setState({
      products: [
        { id: 1, name: 'Товар 1', price: 1000 },
        { id: 2, name: 'Товар 2', price: 2000 },
        { id: 3, name: 'Товар 3', price: 3000 },
        { id: 4, name: 'Товар 4', price: 4000 },
        { id: 5, name: 'Товар 5', price: 5000 },
      ]
    })
  }

  // ... - [...[1, 2, 3], 5] => [1, 2, 3, 5]
  create = (id, name, price) => this.setState({
    products: [
      ...this.state.products,
      { id: id, name: name, price: price }
    ]
  })

  update = (target_id, name, price) => this.setState({
    products: this.state.paroducts.map(product => (
      product.id !== target_id ? product : {
        id: target_id, name: name, price: price
      }
    ))
  })

  delete = (target_id) => this.setState({
    products: this.state.products.filter(({ id }) => id !== target_id)
  })

  render() {
    const { products } = this.state
    return (
      <table className="products">
        <thead>
          <tr>
            <th className="products-th">#</th>
            <th className="products-th">Название</th>
            <th className="products-th">Цена</th>
            <th className="products-th">Действия</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ id, name, price }) => (
            <tr key={id}>
              <td className="products-td">{id}</td>
              <td className="products-td">{name}</td>
              <td className="products-td">{price}</td>
              <td className="products-td">
                <button
                  className="products-btn"
                  onClick={() => this.delete(id)}
                >Удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

ReactDOM.render(<Products/>, document.getElementById('root'))
