import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import Head from 'next/head';
import NextLink from 'next/link';

export default function Header({ menuItems }) {
  return (
    <div>
      <Head>
        <title>Cloud Native App</title>
        <meta name="description" content="Example of Cloud Native App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cloud Native App
          </Typography>
          {menuItems.map(({ href, title }) => (
            <NextLink key={title} href={href}>
              <Button color="inherit">{title}</Button>
            </NextLink>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
}
