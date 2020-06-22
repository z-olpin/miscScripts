/**
* Creates an element with the provided attributes and textContent, if any.
* @param tag         | A valid tagname: String or null
* @param textContent | The element's textContent: String or undefined
* @param attributes  | The element's attrbutes: [...Array<String, String>]
* @return HTML Element
*
* E.g. elementBuilder('p', 'Lorem ipsum dolor something', [['class', 'item'], ['style', 'color:red']])
*    => <p class="item" style="color:red">Lorem ipsum dolor something</p>
*/
const elementBuilder = (tag, textContent=null, attributes) => {
  const element = document.createElement(tag)
  if (textContent) {
    const text = document.createTextNode(textContent)
    element.appendChild(text)
  }
  attributes.forEach(attrVal => element.setAttribute(attrVal[0], attrVal[1]))
  return element
}
