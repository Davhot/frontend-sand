import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'

const Product = ({ photo, header, price, description, click }) => (
  <div className="product" onClick={click}>
    <img className="product-photo" src={photo} alt=""/>
    <div className="product-information">
      <h2 className="product-header">{header}</h2>
      <div className="product-price">Цена: {price} рублей</div>
      <div className="product-description">{description}</div>
    </div>
  </div>
)

Product.propTypes = {
  photo: PropTypes.string,
  header: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  click: PropTypes.func,
}

Product.defaultProps = {
  photo: '/img/0.jpg',
  header: 'unknown',
  price: 0,
  description: '...',
  click: () => alert('unknown product')
}

const app = (
  <Fragment>
    <Product
      photo="./img/1.jpg"
      header="Кроссовки"
      price={1000}
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum."
      click={() => alert('Кроссовки')}
    />
    <Product
      photo="/img/2.jpg"
      header="Фотоаппарат"
      price={20000}
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum."
      click={() => alert('Фотоаппарат')}
    />
    <Product
      photo="/img/3.jpg"
      header="Наушники"
      price={1000}
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum."
      click={() => alert('Наушники')}
    />
    <Product
      photo="/img/4.jpg"
      header="Часы"
      price={5000}
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum."
      click={() => alert('Часы')}
    />
  </Fragment>
)
ReactDOM.render(app, document.getElementById('root'));
