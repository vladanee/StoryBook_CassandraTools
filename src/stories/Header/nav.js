import * as React from 'react'
import { Link } from 'gatsby'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { RiMenuFill } from 'react-icons/ri';
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import './nav.scss'

const drawerWidth = 240

function DrawerAppBar(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Link to="/" className="navLink">
        <Typography variant="h6" sx={{ my: 2 }}>
          Cassandra.Tools
        </Typography>
      </Link>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ display: 'flex', flexDirection: 'column' }}>
            <a href="https://cassandra.link/" target="_blank" className="navLink">
              <ListItemText primary="Knowledge Base" className="navItems" sx={{ color: 'black' }} />
            </a>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ display: 'flex', flexDirection: 'column' }}>
            <Link to="/contact" target="_blank" className="navLink">
              <ListItemText primary="Contact Us" className="navItems" sx={{ color: 'black' }} />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ display: 'flex', flexDirection: 'column' }}>
            <Link to="/contribute" target="_blank" className="navLink">
              <ListItemText primary="Contribute" className="navItems" sx={{ color: 'black' }} />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }} className="navMenuContainer">
      <AppBar component="nav" className="navMenu">
        <Toolbar
          sx={{
            width: { xs: '90%', sm: '95%', md: '90%', xl: '80%' },
            margin: { sm: 0, md: '0 auto', xl: '0 auto' },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <RiMenuFill className="menuIcon" />
          </IconButton>

          <Box
            className="logoContainer"
            variant="h6"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link className="navLogoLink" to="/">
              Cassandra.Tools
            </Link>
          </Box>

          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
            }}
            className="nav-links"
          >
            <a href="https://cassandra.link/" target="_blank" style={{ marginRight: '20px' }}>
              <Typography sx={{ color: '#333146', fontFamily: 'Lato, sans-serif' }}>
                Knowledge Base
              </Typography>
            </a>
            <Link to="/contact" activeClassName="active" style={{ marginRight: '20px' }}>
              <Typography sx={{ color: '#333146', fontFamily: 'Lato, sans-serif' }}>
                Contact Us
              </Typography>
            </Link>
            <Link to="/contribute" activeClassName="active">
              <Typography sx={{ color: '#333146', fontFamily: 'Lato, sans-serif' }}>
                Contribute
              </Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}

export default DrawerAppBar
