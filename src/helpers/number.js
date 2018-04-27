export const toMoney = (value) => {
  if (typeof (value) === 'string') {
    let number = new Intl.NumberFormat('pt-BR')
    return number.format(value)
  }
}

export const toFloat = (value) => {
  return parseFloat(value)
}
