<template>
  <h2 class="red">hello是我哦{{msg}}</h2>
</template>

<script>

  export default{
    name:'test',
    props:{
      msg:{
        type:String,
        default:"test msg"
      }
    },
    methods:{

    },
    data(){
      return{}
    },
  }
</script>

<style>
  .red{color: aqua;}
</style>
