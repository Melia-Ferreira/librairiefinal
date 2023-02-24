<script setup>
defineProps(["livre"]);
const emit = defineEmits(["suppL", "quantiteP", "quantiteM"]);
</script>

<template>
  <!--  <li>
   {{ livre.afficher() }}
   <button @click="$emit('suppL', livre.id)">Supprimer</button>
   <button @click="$emit('quantiteM', livre)">-</button>
   <button @click="$emit('quantiteP', livre)">+</button>
 </li> -->
<div class="livre">
    <img src="../assets/couvertureouverte.jpg" align="absmiddle" alt= "Loupe Icone">
    <div class ="titre">
      {{livre.titre}}
    </div>
    <div class="prix">
      {{"Prix : "+livre.prix+"€"}}
    </div>
    <div class="quantite">
      <button @click="$emit('quantiteM', livre)">-</button>
      {{livre.qtestock}}
      <button @click="$emit('quantiteP', livre)">+</button>
    </div>
    <button @click="$emit('suppL', livre.id)">Supprimer</button>
  </div>
 </template>

 <style>

 livre {
   margin: 0;
   padding: 0;
   display: flex;
   flex-wrap: wrap;
 }

 button{
   border: none;
   background-color: hotpink;
   color: white;
 }
 img {
   width : 120px;
   height :120px;
 }
 .titre {
   color: #D36E70;
   text-align: center;
   font-family: 'Courier New', Courier, monospace;
   font-weight:bold;
   font-size: 130% ;
 }
 .prix {
   color: deeppink;
   text-align: center;
   font-family: 'Courier New', Courier, monospace;
   font-weight:normal;
   font-size: 100% ;
 }
 .quantite {
   color: hotpink;
   text-align: center;
   font-family: 'Courier New', Courier, monospace;
   font-weight:bolder;
   font-size: 100% ;
 }
 </style>
