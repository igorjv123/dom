const innitilaState = [
    {
        name: 'div',
        attrs: {
            'class': 'MySuperClass'
        },
        style: {},
        content: [
            {
                name: 'span',
                content: 'Hello, dom',  
                attrs: {
                    'class': 'MySperChild'
                },
                style: {},
                events: {}
            }
        ],
        events: {}
    }
]

const fragment = document.createDocumentFragment();
const createElements = (el) => {
    const node = document.createElement(el.name);
    const attrs = Object.keys(el.attrs)
    if (attrs.length !== 0) {
        for(let attr of attrs) {
            node.setAttribute(attr, el.attrs[attr]);
        }
    }
    if(typeof el.content === 'string') {
        node.textContent  = el.content;
    }
    else {
        el.content.forEach(childNode => { 
            node.appendChild(createElements(childNode))
        })
    }
    return node
}

let elements
innitilaState.forEach(el => {
    elements = createElements(el)
});

document.body.appendChild(elements)
console.log(document.body)