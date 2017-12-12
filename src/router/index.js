import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import resume from '@/components/resume'
import demo from '@/components/demo'
import note from '@/components/note'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/resume',
            component: resume
        },
        {
            path: '/demo',
            component: demo
        },
        {
            path: '/note',
            component: note
        },
    ]
})