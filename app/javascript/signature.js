const fadein = () => {
  const signature = document.getElementById("signature")
  signature.animate([{opacity: '0'}, {opacity: '1'}], 1500)
}
window.addEventListener("load", fadein)