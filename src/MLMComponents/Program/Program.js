import React from 'react'

import Grid from '@material-ui/core/Grid'

import BasePageContainer from '_common/BasePageContainer'
import BasePageToolbar from '_common/BasePageToolbar'
import EngProgramGrid from './EngProgramGrid'
const Program = () => {
  return (
    <BasePageContainer>
      <BasePageToolbar
        title={'Program'}
        // actionsComponent={DashboardActions}
      ></BasePageToolbar>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <EngProgramGrid />
        </Grid>

      </Grid>
    </BasePageContainer>
  )
}

export default Program
