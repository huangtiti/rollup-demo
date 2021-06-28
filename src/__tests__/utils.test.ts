import { testArray } from '../utils';

describe('Component RollupDemo test', () => {
  test('array', () => {
    expect(testArray([1, 2, 3])).toEqual([{id:1,name:1},{id:2,name:2},{id:3,name:3}])
  })
})
