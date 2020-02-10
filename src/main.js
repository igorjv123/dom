import MyComp from './component'
import MountedService from './services/MountedService'

const mountedService = new MountedService()
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
    MyComp.addProps({ text: 'HELLO FROM PROPS' })
]


for(let i = 0; i <10 ; i++){
    innitilaState.push(innitilaState[0])
}

const fragment = document.createDocumentFragment();

const createElements = (el) => {
    if(el.beforeMount) {
        el.beforeMount()
    }
    mountedService.add(el)
    var comp = el
    if(el.comp) comp = el.comp()
    const node = document.createElement(comp.name);
    const attrs = Object.keys(comp.attrs)
    if (attrs.length !== 0) {
        for(let attr of attrs) {
            node.setAttribute(attr, comp.attrs[attr]);
        }
    }
    if(typeof comp.content === 'string') {
        node.textContent  = comp.content;
    }
    else {
        comp.content.forEach(childNode => { 
            node.appendChild(createElements(childNode))
        })
    }
    
    return node
}
const dateStart = new Date()
innitilaState.forEach(el => {
    fragment.appendChild(createElements(el)) 
});
mountedService.run()
document.body.appendChild(fragment)
const dateFinish = (new Date()) - dateStart


console.log(dateFinish)

console.log(document.body)