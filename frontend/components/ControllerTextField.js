import { ListItem, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

export function ControllerTextField({ name, label, rules, control, errors }) {
  return (
    <>
      <ListItem>
        <Controller
          name={name}
          control={control}
          defaultValue=""
          rules={rules}
          render={({ field }) => (
            <TextField
              variant="outlined"
              fullWidth
              id={name}
              label={label}
              error={Boolean(errors)}
              helperText={errors ? `${label} is required` : ''}
              {...field}
            ></TextField>
          )}
        />
      </ListItem>
    </>
  );
}
