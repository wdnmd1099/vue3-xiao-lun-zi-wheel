import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './view/Home.vue'
import Start from './view/Start.vue'
import Introduction from './components/Introduction.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import Button from './components/ButtonDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Install from './components/install.vue'
import Comming from './components/Document-start.vue'
import DiaLogDemo from './components/diaLogDemo.vue'
import KeyBoard from './components/KeyBoard.vue'
import test from './lib/test.vue'
import Toast from './components/toastDemo.vue'
import Calendar  from './components/CalendarDemo.vue'

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
                { path: 'dialog', component: DiaLogDemo },
                { path: 'tabs', component: TabsDemo },
                { path: 'toast', component: Toast },
                { path: 'calendar', component: Calendar },
                { path: 'keyBoard', component: KeyBoard },
                { path: 'test', component: test },
                
            ],
        },
    ]
})
