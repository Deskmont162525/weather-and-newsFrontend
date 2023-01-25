import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import TableWeather from '../../elements/TableWeather'

import { useStyleAccordionsWeather } from './AccordionsWeather.style'
const dataDrivingRequi = [
  {
    titulo: 'Historial de Consultas',
    contenido: '',
  },
]
const AccordionsWeather = () => {
  const classes = useStyleAccordionsWeather()
  return (
    <div className={classes.container}>
      <Typography className={classes.title}>HISTORIAL DE CONSULTAS REALIZADAS</Typography>
      <Grid container >
      <TableWeather />
      </Grid>
    </div>
  )
}

export default AccordionsWeather
