import React from "react"
import { useDispatch, useSelector } from "react-redux"

import LogoEcoEnchants from "../assets/LogoEcoEnchants.png"

import { makeStyles } from "@material-ui/core/styles"
import { NativeSelect, Typography } from '@material-ui/core'

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'

import { Grid } from "@material-ui/core"
const useStyles = makeStyles(() => ({
  styleNavBar: {
    backgroundColor: "#b2eced",
    
    position: 'fixed',
    top: 0
  },
  logo: {
    height: 68,
    padding: "4px 4px 0 8px"
  }
}))

const NavBar = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  
  const filters = useSelector(store => store.Enchants.filters)
  
  const handleSelectRarities = (event) => {
    dispatch({
      type: "updateFilterRarity",
      payload: event.target.value
    })
  }

  const handleSelectTargets = (event) => {
    dispatch({
      type: "updateFilterTarget",
      payload: event.target.value
    })
  }


  const handleAvilableArtifacts = (event) => {
    dispatch({
      type: "avilableArtifacts",
    })
  }

  const handleAvilableCurses = (event) => {
    dispatch({
      type: "avilableCurses",
    })
  }
  
  
  return (
    <Grid container
      className={classes.styleNavBar}
      justifyContent="space-between"
    >
      <Grid item container alignItems="center" xs={5}>
        <Grid item>
          <a href="https://github.com/Auxilor/EcoEnchants" target="_blank" rel="noopener noreferrer">
          <img src={LogoEcoEnchants} alt="Logo EcoEnchants" className={classes.logo} />
          </a>
        </Grid>
        <Grid item
          className="titleEcoEnchant"
        >
          <Typography
            variant='h3'
            style={{
              fontFamily: "'Times New Roman', serif",
              fontWeight: "bold",
              color: '#41b379',
            }}
          >
            EcoEnchants
          </Typography>
        </Grid>
      </Grid>
      
      <Grid item container xs={5} justifyContent="flex-end" alignItems="center">
        {/* Implementar un filtros */}
        <Grid item xs>
          <NativeSelect
            disableUnderline
            onChange={handleSelectRarities}
            inputProps={{
              name: "rarity",
              id: "rarity-native-helper",
            }}
            variant="filled"
            value={filters["rarities"]}
          >
            <option value="none">Rarities</option>
            <option value="common">Common</option>
            <option value="uncommon">Uncommon</option>
            <option value="rare">Rare</option>
            <option value="epic">Epic</option>
            <option value="special">Special</option>
            <option value="veryspecial">Very Special</option>
            <option value="legendary">Legendary</option>
            <option value="artifact">Artifact</option>  
          </NativeSelect>
        </Grid>
        <Grid item xs>
          <NativeSelect
            disableUnderline
            onChange={handleSelectTargets}
            inputProps={{
              name: "target",
              id: "target-native-helper",
            }}
            variant="filled"
            value={filters["allTargets"]}
          >
            <option value="none">Targets</option>
            <option value="helmet">Helmet</option>  
            <option value="chestplate">Chestplate</option>
            <option value="leggings">Leggings</option>  
            <option value="boots">Boots</option>
            <option value="shield">Shield</option>  
            <option value="sword">Sword</option>  
            <option value="trident">Trident</option>  
            <option value="bow">Bow</option>
            <option value="crossbow">Crossbow</option>
            <option value="pickaxe">Pickaxe</option>  
            <option value="axe">Axe</option>
            <option value="shovel">Shovel</option>  
            <option value="elytra">Elytra</option>
            <option value="hoe">Hoe</option>  
            <option value="shears">Shears</option>  
            <option value="rod">Rod</option>
            <option value="all">Book</option>
          </NativeSelect>
        </Grid>
        <Grid item container direction="column" xs>
          <Grid>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters["curses"]}
                    onChange={handleAvilableCurses}
                    size="small"
                  />
                }
                label="Curses"
              />
            </FormGroup>       
          </Grid>
          <Grid>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters["artifacts"]}
                    onChange={handleAvilableArtifacts}
                    size="small"
                  />
                }
                label="Artifacts"
              />
            </FormGroup>        
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default NavBar