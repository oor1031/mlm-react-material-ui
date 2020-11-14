import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import pkg from '../../../package.json'

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="left">
        <Link
          color="primary"
          href="https://github.com/modularcode/modular-material-admin-react/releases"
        >
                  {`MLM Material + React`}{' '}
                  v{pkg.version}
        </Link>
        {' | '}

        {'DEV'}
      </Typography>

    </footer>
  )
}

const useStyles = makeStyles(theme => ({
  footer: {
    display: 'flex',
    background: '#fff',
    padding: '0.5rem 1rem',
    justifyContent: 'space-between',
  },
}))

export default Footer
