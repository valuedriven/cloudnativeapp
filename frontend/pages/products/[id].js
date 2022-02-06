import List from '@mui/material/List';
import React from 'react';
import PageContent from '../../components/pagetemplate/PageContent';
import PageHeader from '../../components/pagetemplate/PageHeader';

const pageLabel = 'Edit Product';

export default function Product() {
  return (
    <List>
      <PageHeader pageLabel={pageLabel} />
      <PageContent></PageContent>
    </List>
  );
}
