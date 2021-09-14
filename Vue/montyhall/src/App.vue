<template>
    <div id="app">
        <h1>Problema de MontyHall</h1>
        <Door number="1" :hasGift="false"/>
        
    </div>
  
</template>

<script>
import Door from './components/Door.vue'

export default {
    name: "App",
    components: { Door }

}
</script>
<style>
* {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body {
    color: #fff;
    background: #B993D6;  
    background: -webkit-linear-gradient(to right, #8CA6DB, #B993D6);  
    background: linear-gradient(to right, #8CA6DB, #B993D6); 

}

#app {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#app h1 {
    border: 1px solid #000;
    background-color: #0004;
    padding: 20px;
    margin-bottom: 60px;
}
</style>
