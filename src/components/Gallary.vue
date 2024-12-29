<template>
  <div class="parallax_container">
    <div class="center-container">
  <h1>APIs are essential</h1>
  <div>
    <router-link class="pro" to="/projects">Projects</router-link>
    <router-view></router-view>
  </div>
</div>

    <div class="parallax_layer_1 basic_setting ">
      <video autoplay muted loop class="video-background" >
        <source src="../assets/video/burnout.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="parallax_layer_2 basic_setting">
      <video autoplay muted loop class="video-background" >
        <source src="../assets/video/google.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="parallax_layer_3 basic_setting">
      <video autoplay muted loop class="video-background" >
        <source src="../assets/video/movies.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="parallax_layer_4 basic_setting">
      <video autoplay muted loop class="video-background" >
        <source src="../assets/video/url.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <button class="parallax_layer_5 basic_setting"></button>
 
  </div>
  </template>
  <style >
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
.center-container {
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center;    /* Center items horizontally */
  justify-content: center; /* Center items vertically */
  text-align: center;     /* Center text */
  margin-bottom: 20vh;
}

h1 {
  margin-bottom: 20px; /* Add space between the heading and the div */
  font-family: "Sigmar One", serif;
  font-weight: 400;
  font-style: normal;
}

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
.pro {
  font-family: "Bubbler One", serif;
  font-weight: 400;
  font-style: normal;
}
.parallax_container {
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  perspective: 10px;
  background: black;
}

.parallax_container .basic_setting {
  background-size: cover;
  background-repeat: no-repeat;
  width: auto;
  height: auto;
  position: absolute;
  top: 0px;
  box-shadow: inset 0px 0px 300px black;
  filter: brightness(100%);
  transition: filter 0.5s;
  
}

.parallax_container .basic_setting:hover {
  filter: brightness(130%);
}

.parallax_container .parallax_layer_1 {
  transform: translateZ(-2px) rotateZ(0deg);

  top: -0;
  left: 5%;
  background-position: center;
}
.video-background{
  width: 200%;
  height: 400px;
}

.parallax_container .parallax_layer_2 {
  top: 80%;
  right: -20%;
  background-position: center;
 
  transform: translateZ(-6px) rotateZ(0deg);

}

.parallax_container .parallax_layer_3 {
  top: 20%;
  left: -40%;
  transform: translateZ(-10px) rotateZ(0deg);

  background-size: 900px;
}

.parallax_container .parallax_layer_4 {
  top:150%;
  left: -0%;
  background-position: center;

  background-size: 1000px ;
  transform: translateZ(-18px) rotateZ(0deg);
}

.parallax_container .parallax_layer_5 {
  outline: 0px;
  border: 0px;
  top: 180%;
  left: 5%;
 
  background-size:300px ;

  transform: rotateZ(0deg);
  background-image: url("../assets/port.jpg");
  transition: all 0.3s;
  background-size: 200px 200px;
  background-image: radial-gradient(
      2px 2px at 40px 60px,
      #ccc,
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(2px 2px at 20px 50px, #ddd, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 30px 100px, #eee, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 40px 60px, rgb(0, 255, 0), rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 110px 90px, rgb(255, 0, 0), rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 190px 150px, rgb(255, 200, 0), rgba(0, 0, 0, 0));
  background-repeat: repeat;
}

.parallax_container .parallax_layer_5:hover {
  cursor: pointer;
}

.parallax_container .parallax_layer_5:focus {
  cursor: pointer;
  transform: rotateZ(0deg);
  top: 130%;
  left: 10%;
  width: 80%;
  height: 80%;
}

.parallax_container .footer {
  color: white;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 210%;
}

.parallax_container .footer a {
  color: white;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background-color: #ececec;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(56, 89, 100, 0.4);
  border: 2px solid #e3e7f0;
}

::-webkit-scrollbar-button {
  height: 0px;
  background: red;
  width: 0px;
}

::-webkit-scrollbar-corner {
  margin-top: 20px;
  background-color: #e3e7f1;
}
* {
  margin: 0;
  padding: 0;
}
body {
  font: 100% / 1.5 Arial;
/*   background: linear-gradient(135deg, #3e028c -50%, #000 100%); */
  background-image: linear-gradient(135deg, #e7627d 0%, #b8235a 25%, #801357 50%, #3d1635 75%, #1c1a27 100%);
}
::-webkit-scrollbar { 
    display: none; 
}
.fixed {
  position: fixed;
  color: white;
  font-weight: 700;
  text-align: center;
  width: 100vw;
  top: 50%;
  font-size: 24px;
}
.parallax {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-perspective: 1px;
  perspective: 1px;
}

.parallax__layer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.parallax__layer--base {
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.parallax__layer--back {
  -webkit-transform: translateZ(-2px) scale(3);
  transform: translateZ(-2px) scale(3);
}
.parallax__layer--back2 {
  -webkit-transform: translateZ(-6px) scale(5);
  transform: translateZ(-6px) scale(5);
}
.parallax__layer--back3 {
  -webkit-transform: translateZ(-12px) scale(6);
  transform: translateZ(-12px) scale(6);
}

/* add some padding to force scrollbars */
.parallax__layer {
  padding: 100vh 0;
}

.starfield > * {
  background-size: 200px 200px;
  background-image: radial-gradient(
      2px 2px at 40px 60px,
      #ccc,
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(2px 2px at 20px 50px, #ddd, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 30px 100px, #eee, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 40px 60px, rgb(0, 255, 0), rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 110px 90px, rgb(255, 0, 0), rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 190px 150px, rgb(255, 200, 0), rgba(0, 0, 0, 0));
  background-repeat: repeat;
}
.starfield > * {
  position: absolute;
  top: -250%;
  left: 0;
  height: 500%;
  width: 100%;
}

.starfield span:nth-child(2) {
  transform: rotate(45deg);
}
.starfield span:nth-child(3) {
  transform: rotate(69deg);
}
.starfield span:nth-child(4) {
  transform: rotate(123deg);
}

</style>