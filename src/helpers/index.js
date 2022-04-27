export const capitalLetter = str => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const dmAcm = height => {
  let m = height / 10;
  return m
}

export const hgAkg = weight => {
  let kg = weight * 0.1
  return kg
}

export const mayusculas = (str) => {
  return str.toUpperCase()
}

export const background = (type) => {
  let card = 'card_content'
  if (type === 'Steel') {
    return `${card} card_steel`
  }else if(type === 'Water'){
    return `${card} card_water`
  }else if(type === 'Bug'){
    return `${card} card_bug`
  }else if(type === 'Ghost'){
    return `${card} card_ghost`
  }else if (type === 'Fire') {
    return `${card} card_fire`
  }else if(type === 'Fairy'){
    return `${card} card_fairy`
  }else if (type === 'Fighting') {
    return `${card} card_fighting`
  }else if (type === 'Normal') {
    return `${card} card_normal`
  }else if (type === 'Grass') {
    return `${card} card_grass`
  }else if (type === 'Psychic'||type === 'Poison') {
    return `${card} card_psychic`
  }else if (type === 'Ground') {
    return `${card} card_ground`
  }else if (type === 'Dark') {
    return `${card} card_dark`
  }else {
    return `${card} card_ground`
  }
} 