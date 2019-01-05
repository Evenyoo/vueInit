<template>
  <div>
    {{content}}
  </div>
</template>
<script>
  export default{
   props:{
    content:{
      type:String,
      default:()=>''
    }
   }

  }
</script>
