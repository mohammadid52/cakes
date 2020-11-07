import React from 'react';
import { map } from 'lodash';
import { useHistory } from 'react-router-dom';
import { PageTitle } from '../../Components';
import './Products.css';
import ProductCard from './ProductCard';
import { ProductList } from '../../Constants';

const Products = ({ cart }) => {
  const history = useHistory();
  return (
    <>
      <div>
        <PageTitle>Products</PageTitle>
        <div className="products__container">
          <div className="products__row">
            {map(ProductList, (data) => (
              <ProductCard key={data.id} data={data} cart={cart} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
