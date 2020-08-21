<template>
  <div id="app">
   <div class="container-fluid">
     <div class="row">
         <div class="col-md-3 col-3">
          <LeftSideBar />
       </div>
       <div class="col-md-5 col-12">
         <Main />
       </div>
       <div class="col-md-4 col-4 right-bar">
        <RightSidebar />
       </div>
     </div>
   </div>
  </div>
</template>

<script>
import LeftSideBar from './components/LeftSideBar'
import Main from './components/main/Main'
import RightSidebar from './components/RightSidebar'
export default {
  name: 'App',
  components: {
    LeftSideBar,Main,RightSidebar
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
