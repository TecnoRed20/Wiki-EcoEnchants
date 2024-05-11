export const allFilters = (enchants, filters) => {
  enchants.sort((a,b) => {
    const weight = {
      common: 0,
      uncommon: 1,
      rare: 2,
      epic: 3,
      special: 4,
      veryspecial: 5,
      legendary: 6,
      artifact: 7

    }
    
    if(weight[a.rarity] > weight[b.rarity])
      return 1
    else if(weight[a.rarity] < weight[b.rarity])
      return -1
    else 
      return 0
  })

  let enchantsFilters = enchants.map(enchant => {
    if(filters["rarities"] === "none") {
      return enchant
    } else if(filters["rarities"] === enchant["rarity"]) {
      return enchant
    } else 
      return ""
  })
  enchantsFilters = enchantsFilters.filter(e => e !== "")

  enchantsFilters = enchantsFilters.map(enchant => {
    if(filters["allTargets"] === "none") {
      return enchant
    } else if(enchant["targets"].includes(filters["allTargets"]) || enchant["targets"][0] === "all") {
      return enchant
    } else 
      return ""
  })
  enchantsFilters = enchantsFilters.filter(e => e !== "")

  enchantsFilters = enchantsFilters.map(enchant => {
    if(!filters["artifacts"] && enchant["type"] === "artifact") {
      return ""
    } else 
      return enchant
  })
  enchantsFilters = enchantsFilters.filter(e => e !== "")

  enchantsFilters = enchantsFilters.map(enchant => {
    if(!filters["curses"] && enchant["type"] === "curse") {
      return ""
    } else 
      return enchant
  })
  enchantsFilters = enchantsFilters.filter(e => e !== "")


  // Sort by length description
  // enchantsFilters.sort((a,b) => {
  //   if(a["description"].length < b["description"].length)
  //     return 1
  //   else if(a["description"].length > b["description"].length)
  //     return -1
  //   else
  //     return 0
  // })


  return enchantsFilters
}

export const convertDecimalToRoman = (decimal) => {
  let str = '';
  let roman = {
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  for (let i of Object.keys(roman)) {
    var q = Math.floor(decimal / roman[i]);
    decimal -= q * roman[i];
    str += i.repeat(q);
  }

  return str;
}
