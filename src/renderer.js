export const createElements = (el, mountedService) => {
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
    if(el.events && Object.keys(el.events).length !== 0) (
        Object.keys(el.events).forEach((eventName) => {
            const event =  el.events[eventName]
            node.addEventListener(eventName, event.handler, event.capture)
        })
    )
    if(typeof comp.content === 'string') {
        node.textContent  = comp.content;
    }
    else {
        comp.content.forEach(childNode => { 
            node.appendChild(createElements(childNode, mountedService))
        })
    }
    
    return node
}
export const renderDOM = (vDOM, mountedService) => {
    const fragment = document.createDocumentFragment();
    vDOM.forEach(el => {
        fragment.appendChild(createElements(el, mountedService)) 
    }); 
    return fragment
}