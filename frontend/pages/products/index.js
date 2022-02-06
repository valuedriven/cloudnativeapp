import { TableBody, TableCell, TableRow } from '@mui/material';
import List from '@mui/material/List';
import { useEffect, useState } from 'react';
import PageContent from '../../components/pagetemplate/PageContent';
import PageContentLabels from '../../components/pagetemplate/PageContentLabels';
import PageHeader from '../../components/pagetemplate/PageHeader';

const pageLabel = 'Products';

const itemsLabels = [
  'Id',
  'Name',
  'Price',
  'Category',
  'Count',
  'Rating',
  'Actions',
];

const productsList = [
  { name: 'P1', price: 1, category: 'C1', count: 1, rating: 1, id: 1 },
  { name: 'P2', price: 2, category: 'C2', count: 2, rating: 2, id: 2 },
];

export default function Products() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    setProducts(productsList);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <List>
      <PageHeader pageLabel={pageLabel}></PageHeader>
      <PageContent>
        <PageContentLabels labels={itemsLabels} />
        <PageContentItems products={products} />
      </PageContent>
    </List>
  );
}

function PageContentItems({ products }) {
  return (
    <TableBody>
      {products.map((product) => (
        <TableRow key={product.id}>
          <TableCell>{product.id}</TableCell>
          <TableCell>{product.name}</TableCell>
          <TableCell>{product.price}</TableCell>
          <TableCell>{product.category}</TableCell>
          <TableCell>{product.count}</TableCell>
          <TableCell>{product.rating}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
