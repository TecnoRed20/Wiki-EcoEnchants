import React from "react"

import { useSelector } from "react-redux"
import { Divider, Grid } from "@material-ui/core"
import { Tooltip } from "@mui/material";


import CheckIcon from '@mui/icons-material/Check';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';

import Grindstone from "../assets/grindstone.png"
import NoGrindstone from "../assets/nogrindstone.png"

import Table from "../assets/table.png"
import NoTable from "../assets/notable.png"
import Villager from "../assets/villager.png"
import NoVillager from "../assets/novillager.png"
import Chest from "../assets/chest.png"
import NoChest from "../assets/nochest.png"

import Bow from "../assets/allItems/bow.png"
import Crossbow from "../assets/allItems/crossbow.png"
import Elytra from "../assets/allItems/elytra.png"
import Fishing_Rod from "../assets/allItems/fishing_rod.png"
import Iron_Axe from "../assets/allItems/iron_axe.png"
import Iron_Boots from "../assets/allItems/iron_boots.png"
import Iron_Chestplate from "../assets/allItems/iron_chestplate.png"
import Iron_Helmet from "../assets/allItems/iron_helmet.png"
import Iron_Hoe from "../assets/allItems/iron_hoe.png"
import Iron_Leggings from "../assets/allItems/iron_leggings.png"
import Iron_Pickaxe from "../assets/allItems/iron_pickaxe.png"
import Iron_Shovel from "../assets/allItems/iron_shovel.png"
import Iron_Sword from "../assets/allItems/iron_sword.png"
import Shears from "../assets/allItems/shears.png"
import Shield from "../assets/allItems/shield.png"
import Trident from "../assets/allItems/trident.png"
import Written_Book from "../assets/allItems/written_book.png"
import { convertDecimalToRoman } from "store/actions/EnchantsAction";

const EnchantCard = (props) => {
  
  const rarity = useSelector(state => state.Enchants.rarity)
  const enchantinfo = props.enchant

  const allItems = {
    bow: Bow,
    crossbow: Crossbow,
    elytra: Elytra,
    rod: Fishing_Rod, 
    axe: Iron_Axe,
    boots: Iron_Boots,
    chestplate: Iron_Chestplate,
    helmet: Iron_Helmet,
    hoe: Iron_Hoe,
    leggings: Iron_Leggings,
    pickaxe: Iron_Pickaxe,
    shovel: Iron_Shovel,
    sword: Iron_Sword,
    shears: Shears,
    shield: Shield,
    trident: Trident,
    all: Written_Book,
  }
  
  return (
    <Grid container direction="column"
      style={{
        border: "2px solid " + rarity[enchantinfo.rarity].color,
        borderRadius: 6,
        backgroundColor: rarity[enchantinfo.rarity].color + "4D",
        minHeight: 300,
        maxHeight: 300,
        minWidth: 260
      }}
    >
      {/* Activo|Nombre|Grindstone */}
      <Grid item container justifyContent="space-between" alignItems="center">
        <Grid item>
          {enchantinfo.enabled ? 
          <Tooltip
            title="Enabled Enchant"
            placement="top"
            arrow
          >
            <CheckIcon
              style={{
                color: "green"
              }}
            /> 
          </Tooltip>
          : 
          <Tooltip
            title="Disabled Enchant"
            placement="top"
            arrow
          >
            <ClearSharpIcon
              style={{
                color: "red"
              }}
            />
          </Tooltip>
          }
        </Grid>
        <Grid item>
          {enchantinfo.name} ({convertDecimalToRoman(enchantinfo["maximum-level"])})
        </Grid>
        <Grid item>
          {enchantinfo.grindstoneable ? 
          <Tooltip
            title="Grindstoneable"
            placement="top"
            arrow
          >
            <img src={Grindstone} alt=""
              style={{
                height: 30
              }}
            />
          </Tooltip>
          :
          <Tooltip
            title="Not Grindstoneable"
            placement="top"
            arrow
          >
            <img src={NoGrindstone} alt=""
              style={{
                height: 30
              }}
            /> 
          </Tooltip>
          }
        </Grid>
      </Grid> 

      {/* Divisor */}
      <Grid item container justifyContent="center">
        <Grid item xs={12}>
          <Divider
            style={{
              backgroundColor: rarity[enchantinfo.rarity].color,
              padding: 0.5
            }}
          />
        </Grid>
      </Grid> 

      {/* Descripcion */}
      <Grid item container justifyContent="center" alignItems="center"
        style={{
          maxHeight: 80,
          minHeight: 80,
        }}
      >
        <Grid item xs={11}>
          {enchantinfo.description}
        </Grid>
      </Grid> 

      {/* Divisor */}
      <Grid item container justifyContent="center">
        <Grid item xs={12}>
          <Divider
            style={{
              backgroundColor: rarity[enchantinfo.rarity].color,
              padding: 0.5
            }}
          />
        </Grid>
      </Grid> 

      {/* Forma de Obtener */}
      <Grid item container justifyContent="space-around" alignItems="center"
        style={{
          maxHeight: 50,
          minHeight: 50,
        }}
      >
        <Grid item xs={2} container justifyContent="center">
          {
            enchantinfo.obtaining.table ?
            <Tooltip
              title = {"Probability: " + rarity[enchantinfo.rarity]["table-probability"] + "%\n Minimum Level: " + rarity[enchantinfo.rarity]["minimum-level"]}
              arrow
              placement="top"
            >
              <img src={Table} alt=""
                style={{
                  height: 40
                }}
              />
            </Tooltip>
            :
            <Tooltip
              title = "Disabled"
              arrow
              placement="top"
            >
              <img src={NoTable} alt=""
                style={{
                  height: 40
                }}
              />
            </Tooltip>
          }
        </Grid>
        <Grid item xs={2} container justifyContent="center">
        {
          enchantinfo.obtaining.villager ?
            <Tooltip
              title = {"Probability: " + rarity[enchantinfo.rarity]["villager-probability"] + "%\n"}
              arrow
              placement="top"
            >
              <img src={Villager} alt=""
                style={{
                  height: 40
                }}
              />
            </Tooltip>
            :
            <Tooltip
              title = "Disabled"
              arrow
              placement="top"
            >
              <img src={NoVillager} alt=""
                style={{
                  height: 40
                }}
              />
            </Tooltip>
          }
        </Grid>
        <Grid item xs={2} container justifyContent="center">
        {
          enchantinfo.obtaining.loot ?
            <Tooltip
              title = {"Probability: " + rarity[enchantinfo.rarity]["loot-probability"] + "%\n"}
              arrow
              placement="top"
            >
              <img src={Chest} alt=""
                style={{
                  height: 40
                }}
              />
            </Tooltip>
            :
            <Tooltip
              title = "Disabled"
              arrow
              placement="top"
            >
              <img src={NoChest} alt=""
                style={{
                  height: 40
                }}
              />
            </Tooltip>
          }
        </Grid>
      </Grid> 

      {/* Divisor */}
      <Grid item container justifyContent="center">
        <Grid item xs={12}>
          <Divider
            style={{
              backgroundColor: rarity[enchantinfo.rarity].color,
              padding: 0.5
            }}
          />
        </Grid>
      </Grid>

      {/* Aplicable: */}
      <Grid item container justifyContent="space-around" alignItems="center"
        spacing={1}
        style={{
          width: '100%',
          margin: '15px 0 0 0',
          maxHeight: 100,
          minHeight: 100,
        }}
      >
        {
          enchantinfo.targets.map(target => {
            return(
              <Grid item xs={3} key={target} container justifyContent="center">
                <img src={allItems[target]} alt=""
                  style={{
                    height: 40
                  }}
                />
              </Grid>
            )
          })
        }
      </Grid> 
    </Grid>
  )
}

export default EnchantCard