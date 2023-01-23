import { Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { getDataMapAccordionWeather } from '../../../helpers/ui/datamap'
import AccordionWeather from '../../elements/AccordionWeather'

import { useStyleAccordionsWeather } from './AccordionsWeather.style'
const dataDrivingRequi = [
  {
    titulo: 'Historial de Consultas',
    contenido: '',
  },
]
const AccordionsWeather = ({ dataVistos }) => {
  const classes = useStyleAccordionsWeather()

  const [expanded, setExpanded] = React.useState('')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }
  return (
    <div className={classes.container}>
      <Typography className={classes.title}>LISTA DE CIUDADES VISTAS</Typography>
      <Grid container className={classes.container}>
        {getDataMapAccordionWeather(
          dataDrivingRequi,
          AccordionWeather,
          expanded,
          handleChange,
          dataVistos,
        )}
      </Grid>
    </div>
  )
}

export default AccordionsWeather
