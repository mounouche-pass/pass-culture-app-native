export const t = (text: string | Array<string>) => {
  if (typeof text === text) {
    return text.trim()
  } else if (text instanceof Array) {
    return text.map((t) => t.trim()).join(' ')
  }
  return text
}

type Plural = {
  value: number
  one: string
  other: string
}

export const plural = (count: number | Plural, plural: Plural) => {
  if (isNaN(count as number)) {
    plural = count as Plural
    if (plural.value <= 1) {
      return plural.one.replace('#', `${plural.value}`)
    }
    return plural.other.replace('#', `${plural.value}`)
  }
  if (count <= 1) {
    return plural.one.replace('#', `${count}`)
  }
  return plural.other.replace('#', `${count}`)
}
