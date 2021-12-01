function getHidenDescription(isOpen: boolean, description: string) {
  return isOpen
    ? description
    : description.length > 25
    ? description.substring(0, 25) + "..."
    : description;
}

export { getHidenDescription };
