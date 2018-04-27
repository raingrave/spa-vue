export const clearMask = (string) => {
  if (string != null) {
    return string.replace(/[.-]/g, '')
  }
}
