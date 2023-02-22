import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './view/Home.vue'
import Start from './view/Start.vue'
import Introduction from './components/Introduction.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import Button from './components/ButtonDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Install from './components/install.vue'
import Comming from './components/Document-start.vue'
import DatePicker from './lib/datePicker.vue'



const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/start', component: Start,
            children:[
                { path: "", redirect: '/start/introduction' },
                { path: 'introduction', component: Introduction },
                { path: 'install', component: Install },
                { path: 'comming', component: Comming },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: Button },
                { path: 'dialog', component: Start },
                { path: 'tabs', component: TabsDemo },
                { path: 'DatePicker', component: DatePicker },
            ],
        },
    ]
})
