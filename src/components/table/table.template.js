const CODES = {
  A: 65,
  Z: 90
}

// function createCell() {
//   return `
//     <div class="cell" contenteditable>B2</div>
//   `
// }

function toColumn(col) {
  return `
    <div class="column">${col}</div>
  `
}

function createRow(content) {
  return `
    <div class="row">
      <div class="row_info"></div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  let cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')

  rows.push(createRow(cols))

  for (let i = 1; i <= rowsCount; i++) {
    cols = new Array(colsCount)
    cols[0] = i
    cols = cols
        .map(toColumn)
        .join('')
    rows.push(createRow(cols))
  }

  return rows.join('')
}
