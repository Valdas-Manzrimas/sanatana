function darkenColor(hex, amount = 20) {
  let usePound = false;
  
  if (hex[0] === "#") {
    hex = hex.slice(1);
    usePound = true;
  }

  const num = parseInt(hex, 16);
  let r = (num >> 16) - amount;
  let b = ((num >> 8) & 0x00FF) - amount;
  let g = (num & 0x0000FF) - amount;

  r = r < 0 ? 0 : r;
  b = b < 0 ? 0 : b;
  g = g < 0 ? 0 : g;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16).padStart(6, '0');
}

export default darkenColor