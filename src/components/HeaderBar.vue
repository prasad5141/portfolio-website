<template>
<div class="landing-page">
  <span>
    <div class="header-nav-bar">
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#"><h2>SAIPRASAD MALKAPURM</h2></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only"> </span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Resume</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact Me</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </span>
  <div class="body">
    <div class="icon-group">
      <font-awesome-icon icon="fa-brands fa-twitter s-icon" class="s-icon"/>
      <font-awesome-icon icon="fa-brands fa-github s-icon" class="s-icon"/>
      <font-awesome-icon icon="fa-brands fa-linkedin s-icon" class="s-icon"/>
    </div>
    <div class="intro">
      <span class="intro-white">
        Hello, I'M
        <span class="intro-highlight">Saiprasad</span>
      </span>
    </div>
    <div class="auto-typer">
      <AutoTyperVue 
      componentTag="h2" 
      :text="text"
    />
  
    </div>
  </div>
</div>
</template>
<script>

import { AutoTyperVue } from "auto-typer-vue3";

let text = [
  'This is a demo.',
  'And this is another Demo!'
];
export default{
  name:"HeaderBar",
  components: {
    AutoTyperVue,
  },
  data(){
    return {
      text:text
    }
  }
};
</script>
<style>
  @import "auto-typer-vue3/dist/style.css";

h1 {
  text-align: left;
}
.header-nav-bar {
  color: rgb(255, 255, 255);
  margin-top: 75px;
  margin-left: 185px;
  margin-right: 185px;
}
.landing-page{
  overflow: auto; 
  height: 500px;
  background-color:rgb(36, 38, 59) ;
}
.navbar{
  color:white !important;
}
a{
  color: white !important;
}
body {
  overflow: hidden; /* Hide scrollbars */
}
.navbar-nav > li{
  padding-left:30px;
  padding-right:30px;
  color: rgb(255,88,35) !important;
  font-size: 20px;
  font-family: Poppins Regular;
}
.navbar-brand{
  font-family: Poppins ExtraBold;
  font-size: 32px;
  /* fontPoppins ExtraBold; */
}
.s-icon{
  color: white;
  margin-left: 18px;
}
.icon-group{
  margin-left: -1090px;
  margin-top: 100px;
}
.intro-white{
  font-family: Poppins SemiBold;
  font-size: 24px;
  color: white;
  margin-left: -953px;
}
.intro-highlight{
  font-family: Poppins SemiBold;
  font-size: 24px;
  color: rgb(255,88,35);
}
.auto-typer{
  margin-left: 188px;
  color: white;
  font-size: 1px !important;
  text-align: left;
}
</style>
