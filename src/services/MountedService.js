export default class MountedService {
    constructor() {
        this._elements = []
    }
    add(component) {
        if(component.mounted) {
            this._elements.push(component)
        }
    }
    run() {
        this._elements.forEach(component => {
            component.mounted()
        })
    }
}