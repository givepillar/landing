declare module '*.png' {
  const value: any
  export = value
}

declare module '*.gif'
declare module '*.svg' {
  const content: any
  export default content
}
