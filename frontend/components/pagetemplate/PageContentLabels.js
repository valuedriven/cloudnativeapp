import { TableCell, TableHead, TableRow } from '@mui/material';

export default function PageContentLabels({ labels }) {
  return (
    <>
      <TableHead>
        <TableRow>
          {labels.map((label, key) => {
            return <TableCell key={key}>{label}</TableCell>;
          })}
        </TableRow>
      </TableHead>
    </>
  );
}
