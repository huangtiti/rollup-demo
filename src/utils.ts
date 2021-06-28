const testArray = (array:number[]) => {
  return array.map(i => ({id:i,name:i}))
}
const a = "nameA";
const b = "nameB";


const funcA = () => {
  console.log('a', a);
}

export { testArray,funcA,a,b }