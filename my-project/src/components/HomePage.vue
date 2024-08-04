<template>
    <h1>Home Page</h1>
    <Router-link to="/Hello">HelloWorld</Router-link>
    <h1>{{ $store.getters.count }}</h1>
    <button @click="increaseCount">click</button>
    <button @click="goToHello">GotoHello</button>
   </template>
   
   <script>
   export default {
     name: 'HomePage',
     methods: {
      increaseCount(){
        this.$store.dispatch('increment');
      },
      goToHello(){
        this.$router.push('/Hello')
      }
     }
   }
   </script>
   
   <!-- Add "scoped" attribute to limit CSS to this component only -->
   <style scoped>
   
   </style>
   