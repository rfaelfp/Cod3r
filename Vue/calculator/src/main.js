import Vue from 'vue'
import App from './app'

new Vue({
    el: "#app",
    render(createElement) {
        return createElement(App)
    }
}).$mount('#app')