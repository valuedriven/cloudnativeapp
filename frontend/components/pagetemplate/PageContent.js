import { TableContainer } from '@mui/material';

export default function PageContent({ children }) {
  return (
    <>
      <TableContainer>{children}</TableContainer>
    </>
  );
}
