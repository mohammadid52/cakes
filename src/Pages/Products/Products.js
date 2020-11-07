import React from 'react';
import { map } from 'lodash';
import { PageTitle } from '../../Components';
import './Products.css';
import ProductCard from './ProductCard';
import { ProductList } from '../../Constants';

const Products = () => (
  <>
    <div>
      <PageTitle>Products</PageTitle>
      <div className="products__container">
        <div className="products__row">
          {map(ProductList, (data) => (
            <ProductCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Products;
