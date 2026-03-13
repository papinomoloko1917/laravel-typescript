import './bootstrap'

import { createApp, h, nextTick, type DefineComponent } from 'vue'
import { createInertiaApp, router } from '@inertiajs/vue3'
import AppLayout from './Layouts/AppLayout.vue'

type PageModule = {
    default: DefineComponent & {
        layout?: unknown
    }
}

router.on('navigate', () => {
    nextTick(() => {
        window.HSStaticMethods?.autoInit()
    })
})

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob<PageModule>('./Pages/**/*.vue', { eager: true })
        const page = pages[`./Pages/${name}.vue`]

        if (!page) {
            throw new Error(`Page not found: ${name}`)
        }

        page.default.layout ??= AppLayout

        return page
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el)
    },
})