<script setup>
import { ref } from "vue";
// donnée réactive pour la saisie du libellé
const motcleR = ref("");

const emit = defineEmits(["rechercherL"]);
</script>

<template>
  <form @submit.prevent="$emit('rechercherL', motcleR)">
    <input
        type="texte"
        v-model="motcleR"
        placeholder="Quelle est votre recherche ? " />
    <input type="submit" value="rechercher" />
  </form>
</template>

<style scoped>
</style>