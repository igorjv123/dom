export default {
    props: {},
    addProps (props) {
        console.log(this)   
        this.props = props
        return this
    },
    beforeMount() {
        console.log('beforeMount')
        
    },
    mounted() {
        console.log(this.props)
        setTimeout(() => console.log('time-out'), 2000)
    },
    events: {
        click: {
            handler: ()=> {
                alert('click')
            },
            capture: false
        }
    },
    comp() {
        return {
            name: 'p',
            attrs: {
                'class': ''
            },
            style: {},
            content: this.props.text,
            events: {}
        }
    }
}
