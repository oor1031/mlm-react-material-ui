import React from 'react'

import Grid from '@material-ui/core/Grid'

import BasePageContainer from '_common/BasePageContainer'
import BasePageToolbar from '_common/BasePageToolbar'
const HomeContent = (props) => {
  return (
    <BasePageContainer>
      <BasePageToolbar
        title={'Home'}
        // actionsComponent={DashboardActions}
      ></BasePageToolbar>
      <Grid container spacing={3}>
        <Grid item xs={12}>

        <h1>Welcome to the MLM Web App Proof of Concept, {"Oscar"} !</h1>

        <p>Use the Navigation Panel on the left to preview Program Master Data Management features.</p>
        </Grid>

      </Grid>
    </BasePageContainer>
  )
}

export default function Home(props) {
  return <HomeContent/>;
}
