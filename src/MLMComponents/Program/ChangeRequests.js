import React from 'react'

import Grid from '@material-ui/core/Grid'

import BasePageContainer from '_common/BasePageContainer'
import BasePageToolbar from '_common/BasePageToolbar'

const ChangeRequests = () => {
  return (
    <BasePageContainer>
      <BasePageToolbar
        title={'ProgramChangeRequests'}
        // actionsComponent={DashboardActions}
      ></BasePageToolbar>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {/* <SubscriptionsHistory /> */}
        </Grid>

      </Grid>
    </BasePageContainer>
  )
}

export default ChangeRequests
