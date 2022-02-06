import { Grid, ListItem, Typography } from '@mui/material';

export default function PageHeader({ pageLabel, children }) {
  return (
    <ListItem>
      <Grid container alignItems="center">
        <Grid item xs={6}>
          <Typography component="h4" variant="h4">
            {pageLabel}
          </Typography>
        </Grid>
        <Grid align="right" item xs={6}>
          {children}
        </Grid>
      </Grid>
    </ListItem>
  );
}
