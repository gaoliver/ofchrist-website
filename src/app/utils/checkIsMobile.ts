export function checkIsMobile() {
  const screen = window.screen.width;
  return screen <= 600;
}

export function checkIsTablet() {
  const screen = window.screen.width;
  return screen <= 768;
}
