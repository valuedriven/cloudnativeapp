import { Button, Card, Grid, ListItem } from '@mui/material';
import List from '@mui/material/List';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ControllerTextField } from '../../components/ControllerTextField';
import PageContent from '../../components/pagetemplate/PageContent';
import PageHeader from '../../components/pagetemplate/PageHeader';
import { getData, postData, putData } from '../../middlewares/data';

const pageLabel = 'Edit Product';

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmitForm = async () => {
    const name = watch('name');
    const price = watch('price');
    const category = watch('category');
    const count = watch('count');
    const rating = watch('rating');
    const body = { name, price, category, count, rating };
    try {
      if (id === '-1') {
        await postData('products', body);
      } else {
        await putData('products', id, body);
      }
      router.back();
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (typeof id !== 'undefined' && id !== '-1') {
      const fetchData = async () => {
        try {
          const data = await getData(`products/${id}`);
          setValue('name', data.name);
          setValue('price', data.price);
          setValue('category', data.category);
          setValue('count', data.count);
          setValue('rating', data.rating);
        } catch (error) {
          console.error(error.message);
        }
      };
      fetchData();
    }
  }, [id, setValue]);

  return (
    <List>
      <PageHeader pageLabel={pageLabel} />
      <PageContent>
        <ListItem>
          <Grid item md={12} xs={12}>
            <Card>
              <form onSubmit={handleSubmit(onSubmitForm)}>
                <List>
                  <ListItem>
                    <ControllerTextField
                      name="name"
                      label="Name"
                      control={control}
                      errors={errors.name}
                      rules={{ required: true }}
                    />
                  </ListItem>
                  <ListItem>
                    <ControllerTextField
                      name="price"
                      label="Price"
                      control={control}
                      errors={errors.price}
                      rules={{ required: true }}
                    />
                  </ListItem>
                  <ListItem>
                    <ControllerTextField
                      name="category"
                      label="Category"
                      control={control}
                      errors={errors.category}
                      rules={{ required: true }}
                    />
                  </ListItem>
                  <ListItem>
                    <ControllerTextField
                      name="count"
                      label="Count"
                      control={control}
                      errors={errors.count}
                      rules={{ required: true }}
                    />
                  </ListItem>
                  <ListItem>
                    <ControllerTextField
                      name="rating"
                      label="Rating"
                      control={control}
                      errors={errors.rating}
                      rules={{ required: true }}
                    />
                  </ListItem>
                  <ListItem>
                    <Button
                      variant="contained"
                      type="submit"
                      fullWidth
                      color="primary"
                    >
                      Save
                    </Button>
                    <NextLink href="/products/" passHref>
                      <Button
                        variant="contained"
                        type="submit"
                        fullWidth
                        color="primary"
                      >
                        Cancel
                      </Button>
                    </NextLink>
                  </ListItem>
                </List>
              </form>
            </Card>
          </Grid>
        </ListItem>
      </PageContent>
    </List>
  );
}
