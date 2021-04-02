const format = (node: Element, level: number) => {
  const indentBefore = new Array(level++ + 1).join('  ')
  const indentAfter = new Array(level - 1).join('  ')
  let textNode

  for (let i = 0; i < node.children.length; i++) {
    textNode = document.createTextNode('\n' + indentBefore)
    node.insertBefore(textNode, node.children[i])

    format(node.children[i], level)

    if (node.lastElementChild === node.children[i]) {
      textNode = document.createTextNode('\n' + indentAfter)
      node.appendChild(textNode)
    }
  }

  return node
}

const process = (str: string) => {
  const div = document.createElement('div')
  div.innerHTML = str.trim()
  return format(div, 0).innerHTML.trim()
}

const beautifyHTML = (codeStr: string) => {
  return process(codeStr)
}

export default beautifyHTML
