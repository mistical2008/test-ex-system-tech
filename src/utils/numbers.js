function formatPrice(number, fixTo = 2, currencySym = '₽') {
  return `${number.toFixed(fixTo)} ${currencySym}`
}

export {
  formatPrice,
}
