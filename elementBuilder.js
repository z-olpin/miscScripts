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

// TODO: accept arbitrarily nested elements

// E.g. for...

// <ul>
//   <li>Some text</li>
//   <li>
//     And a <a href="#">link</a>
//   </li>
// </ul>

// Something like...

const build = elementTree => {
  // do something
}
const root = document.querySelector('.some-root')

root.appendChild(build(
  {tag: "ul", children: [
    {tag: "li", textContent: "Some text"},
    {tag: "li", textContent: "And a ", children: [
      {tag: "a", attributes: ["href", "#"], textContent: "link"}
    ]},
  ]}
))
// But will have to deal with <p>Some text before a <strong>child</strong> but also after</p>

// Also maybe variable length params for siblings? E.g. for...

// <h3>Something</h3>
// <ul class="some-class">
//    <li><a href="#">Text</a><li>
//    <li><a href="#">Text</a><li>
// </ul>
// <p>Text</p>

// Something like...

const maybeThis = (...elementTrees) => {
  // do something
  // return elements in array
} 

for (let e of maybeThis(
  { tag: "h3", textContent: "Something"},
  { tag: "ul",
    attributes: [ "class", "some-class" ],
    children: [
      { tag: "li", children: [
        { tag: "a", attributes: ["href", "#"], textContent: "Text"}
      ]},
      { tag: "li", children: [
        { tag: "a", attributes: ["href", "#"], textContent: "Text"}
      ]}
    ]
  },
  { tag: "p", textContent: "Text"}
)) {
  root.appendChild(e)
}
