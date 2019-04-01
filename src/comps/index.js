/**
 * Created by fight on 2019/3/4.
 */

import './styles/index.scss'
import button from './components/button/button.vue'
import buttonGroup from './components/button/button-group'
import Tag from './components/tag/tag.vue'
import Radio from './components/radio/radio.vue'
import RadioGroup from './components/radio/radio-group.vue'
import Input from './components/input/input.vue'
import Grid from './components/grid/grid.vue'
import Grids from './components/grid/grids.vue'





const components = [
    button,
	buttonGroup,
	Tag,
	Radio,
	RadioGroup,
	Input,
	Grid,
	Grids,
];


const install = function (Vue) {
    if(install.installed) return;
    components.map(component => Vue.component(component.name, component))
}

if(typeof window !=='undefined' && window.Vue){
    install(window.Vue)
}


export default {
    install,
    ...components
}
