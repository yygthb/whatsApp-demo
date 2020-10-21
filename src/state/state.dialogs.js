// create state - array of dialogs

export default function createDialogs (num) {
  const arr = []
  for (let i = 1; i <= num; i++) {
    arr.push(
      {
        userId: i,
        userName: `Name ${i}`
      }
    )
  }
  return arr
}