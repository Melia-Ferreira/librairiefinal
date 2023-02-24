<script setup>
import { ref } from "vue";
// -- donnée réactive pour la saisie du libellé
const libelle1 = ref("");
const libelle2 = ref("");
const libelle3 = ref("");

const emit = defineEmits(["ajouterL"]);
</script>

<template>
  <main id="blocajout">
    <div id ="barreajout">
      <h1><img src="../assets/bouttonplus.png" align="absmiddle" alt= "Loupe Icone"> Section d'ajout</h1>
    </div>
  <form @submit.prevent="$emit('ajouterL', libelle1, libelle2, libelle3)">
    <div id="element">
    <input
        type="titre"
        v-model="libelle1"
        placeholder="Renseignez le titre du livre"
        size="30"
        style='background-color: white;font-family:Courier New, Courier, monospace;color:hotpink'
    />
    <input
        type="number"
        v-model="libelle2"
        placeholder="Renseignez sa quantité"
        style='width:250px;background-color: white;font-family:Courier New, Courier, monospace;color:hotpink'
    />
    <input type="number" v-model="libelle3" placeholder="Renseignez son prix"
           style='width:250px;background-color: white;font-family:Courier New, Courier, monospace;color:hotpink' />
    <input type="submit" value="ajouter" style='background-color: hotpink;color: white'/>
    </div>
  </form>

  </main>
  <br>
</template>

<style scoped>
h1{
  background-color: hotpink;
  width: 350px;
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

#blocajout{
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
  margin-left: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  flex-wrap: wrap;
}
input{
  border-color: hotpink;
}

</style>
