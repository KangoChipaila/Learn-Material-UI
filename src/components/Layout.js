import React from 'react'
import { Drawer, Typography, makeStyles } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 240;

const useStyles = makeStyles({
  page: {
    background: '#f9f9f9',
    width: '100%'
  },
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  },
  root: {
    display: 'flex'
  }
})

export default function Layout({ children }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {/* app bar */}
      <div>app bar</div>
      
      {/* side drawer */}

      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{ paper: classes.drawerPaper }}>
        <Typography variant="h5">
            <div>side drawer</div>
        </Typography>
      </Drawer>  

      {/* main content */}
      <div className={classes.page}>
        { children }
      </div>
    </div>
  )
}