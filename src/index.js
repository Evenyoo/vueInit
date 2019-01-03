import Vue from 'vue';
import App from './app.vue';
import './styles/index.css'; // 借助webpack我们可以import任何类型文件
import './styles/test.styl'; // 借助webpack我们可以import任何类型文件
import './assets/images/fruits.jpg';

const root=document.createElement('div');
document.body.appendChild(root)

new Vue({
  render: h =>{
    return h(App)
  }
}).$mount(root)