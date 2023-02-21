<script setup>
import { ref } from "vue";
// -- donnée réactive pour la saisie du libellé
const libelle1 = ref("");
const libelle2 = ref("");
const libelle3 = ref("");

const emit = defineEmits(["ajouterL"]);
</script>

<template>
  <form @submit.prevent="$emit('ajouterL', libelle1, libelle2, libelle3)">
    <input
        type="titre"
        v-model="libelle1"
        placeholder="Renseignez le titre du livre"
    />
    <input
        type="number"
        v-model="libelle2"
        placeholder="Renseignez sa quantité"
    />
    <input type="number" v-model="libelle3" placeholder="Renseignez son prix" />
    <input type="submit" value="ajouter" />
  </form>
</template>

<style scoped>
</style>
