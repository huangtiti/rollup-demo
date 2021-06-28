/* eslint-disable import/no-default-export */
declare interface IObject {
  [index:string]:any;
}

declare module React { }
declare module '*.scss' {
  const content: any;
  export default content;
}

declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
 }