<script setup xmlns:background-color="http://www.w3.org/1999/xhtml">
import { ref } from "vue";
// donnée réactive pour la saisie du libellé
const motcleR = ref("");

const emit = defineEmits(["rechercherL"]);
</script>

<template>
  <main id="blocrecherche">
    <div id ="barre">
  <h1><img src="../assets/louperose2.png" align="absmiddle" alt= "Loupe Icone"> Section de recherche</h1>
    </div>
    <form @submit.prevent="$emit('rechercherL', motcleR)">
      <div id="element">
      <input
        type="texte"
        v-model="motcleR"
        placeholder="Quel livre recherchez-vous ?"
        size="35"
        style='background-color: white;font-family:Courier New, Courier, monospace;color:hotpink'/>
    <input type="submit"
           value="Rechercher"
           style='background-color: hotpink;color: white'
    />

      </div>
  </form>
  </main>
  <br>

</template>

<style scoped>

h1{
  background-color: hotpink;
  width: 400px;
  margin : 30px;
  padding : 10px;
  border-radius: 30px;
  color: white;
  font-family: 'Courier New', Courier, monospace;
  font-weight:initial;
  font-size: 150% ;
  display: inline-block;
}

input {
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}

img {
  width : 50px;
  height :50px;
}

hr{
  height: 2px;
  background-color: hotpink;
  border: none;
  width : 900px;
}

#blocrecherche{
  content:"";
  clear:both;
  align-content: baseline;
}
div{
  float:left;
  height: 50px;
  width: 30%;
  padding: 10px;
  text-align : center;
}
#element{
  margin-top: 55px;
  margin-left: 40px;
}
input{
  border-color: hotpink;
}

</style>