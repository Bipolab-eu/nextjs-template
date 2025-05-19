export function fetchComponents(
  dynamicZone: any[], 
  __component: string
) {
  return dynamicZone.filter(
    (zone: any) => zone.__component === __component
  );
}

export function fetchComponentbyName(
  dynamicZone: any[],
  __component: string
) {
  return dynamicZone.find(
    (zone: any) => zone.__component === __component
  );
}


export function fetchComponentbyId(
  dynamicZone: any[],
  id: number,
  __component: string
) {
  return dynamicZone.find(
    (zone: any) => zone.id === id && zone.__component === __component
  );
}