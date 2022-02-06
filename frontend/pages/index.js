import { Typography } from '@mui/material';
import Head from 'next/head';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Cloud Native App</title>
        <meta name="description" content="Example of Cloud Native App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Typography component="h4" variant="h4">
          Welcome to Cloud Native App!
        </Typography>
      </div>
    </div>
  );
}
