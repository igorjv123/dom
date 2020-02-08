import MyComp from './component'

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
    },
    MyComp
]


// for(let i = 0; i < 1200; i++){
//     innitilaState.push(innitilaState[0])
// }

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
const dateStart = new Date()
innitilaState.forEach(el => {
    document.body.appendChild(createElements(el)) 
});
const dateFinish = (new Date()) - dateStart

console.log(dateFinish)

console.log(document.body)