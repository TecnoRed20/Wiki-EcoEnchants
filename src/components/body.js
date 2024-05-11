import React from 'react'

import { useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'

import EnchantCard from 'components/enchantcard'
import { allFilters } from 'store/actions/EnchantsAction'

const Body = () => {

  const filters = useSelector(store => store.Enchants.filters)
  const enchants = useSelector(state => state.Enchants.enchants)

  const enchantsFilters = allFilters(enchants, filters)

  return (
    <Grid container justifyContent='center' spacing={2}
      className="containerBody"
      style={{
        margin: '76px 0 0 0',
        width: '100%',
        backgroundColor: '#fffefa',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))'
      }}
    >
      {
        enchantsFilters.map(enchant => {
          return(
            <Grid item key={enchant.name} xs>
              <EnchantCard 
                enchant = {enchant}
              />
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default Body