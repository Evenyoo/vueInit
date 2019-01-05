<template>
  <div class='vue-container'>
    <div>
      <header>
        <h1 style="text-align:center">{{msg}}</h1>
      </header>
      <section>
        <body-content :content='content'></body-content>
      </section>
      <footer>
        <footer-content></footer-content>
      </footer>
    </div>
  </div>
</template>
<script type="text/javascript">
import BodySection from './components/body-section.vue'
import Footer from './components/footer.jsx'
  export default{
    components:{
      'body-content':BodySection,
      'footer-content':Footer
    },
    data(){
      return {
        msg:'Hello,world！',
        content:'This is a sample vue project that built by webpack4, it did not use vue-cli and it is easy to learn vue.js!'
      }
    }
  }
</script>
<style scoped>
  .vue-container{
    width:80%;
    margin:0 auto;
  }
    
</style>