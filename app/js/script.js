const pricingValue = document.querySelector('.pricing-value')
const updatePricingValue = (value = 15) => {
  pricingValue.textContent = `$${value}.00`
}
updatePricingValue()
