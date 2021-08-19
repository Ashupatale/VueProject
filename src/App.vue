<template>
  <div id="app">
    <!-- <Home/>
   <FormValidation/> -->
   <router-view></router-view>
    </div>
</template>

<script>
// import Home from './components/Home.vue'
  // import FormValidation from './components/FormValidation.vue'
export default {
  name: 'App',
  components: {
    // Home,
    // FormValidation,
  },
  provide:{
    username:'Welcome Aakash'
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

.home-height{
   
    background-image: url("https://previews.123rf.com/images/tirachard/tirachard1802/tirachard180200064/95656773-creative-flat-lay-photo-of-workspace-desk-top-view-office-desk-with-laptop-blank-empty-notebooks-and.jpg");
 background-repeat: no-repeat;
  background-size: cover;
  
  }




</style>
