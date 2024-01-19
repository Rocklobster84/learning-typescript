// arrays of one type
const activeUsers: string[] = []
activeUsers.push("Tony")
//activeUsers.push(4)

const ageList: number[] = [45, 56, 13];
ageList[0] = 99
//ageList[0] = "asd"

// Is the same way as above
const bools: Array<boolean> = []
//const bools: boolean[] = []

type Point = {
  x: number,
  y: number
}
// Array of custom Point type
const coords: Point[] = []
coords.push({x: 23, y: 8})
// error missing y
coords.push({x: 45})

// Multi dimensional arrays
const board: string[][] = [["X", "O", "X"],
                           ["X", "O", "X"],
                           ["X", "O", "X"]
];

const demo: number[][][] = [[[1]]]

