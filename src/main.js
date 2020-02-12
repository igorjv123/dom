import MyComp from './component'
import MountedService from './services/MountedService'
import { renderDOM } from './renderer'
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


for(let i = 0; i <10000 ; i++){
    innitilaState.push(innitilaState[0])
}



const dateStart = new Date()

const dom = renderDOM(innitilaState, mountedService)
document.body.appendChild(dom)
mountedService.run()
const dateFinish = (new Date()) - dateStart


console.log(dateFinish)

console.log(document.body)