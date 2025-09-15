export function assertComponent(name: string, Comp: any) {
  if (process.env.NODE_ENV !== 'production' && (Comp === undefined || Comp === null)) {
    throw new Error(`[assertComponent] ${name} is undefined. Check its export and import style.`);
  }
}
