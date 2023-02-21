<script setup>
defineProps(["livre"]);
const emit = defineEmits(["suppL", "quantiteP", "quantiteM"]);
</script>

<template>
  <li>
    <!--  afficher les informations du livre -->
    {{ livre.afficher() }}
    <!-- bouton Supprimer -->
    <button @click="$emit('suppL', livre.id)">Supprimer</button>
    <!-- bouton -1 quantité -->
    <button @click="$emit('quantiteM', livre)">-</button>
    <!-- bouton +1 quantité -->
    <button @click="$emit('quantiteP', livre)">+</button>
  </li>
</template>

<style>
</style>
