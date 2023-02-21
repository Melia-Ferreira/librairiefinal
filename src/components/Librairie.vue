<script setup>
import { reactive, onMounted } from "vue";
import LibrairieListe from "./LibrairieListe.vue";
import LibrairieForm from "./LibrairieForm.vue";
import Livre from "../Livre";
import LibrairieRecherche from "@/components/LibrairieRecherche.vue";

const listeL = reactive([]);
const listeRecherche = reactive([]);

// on indique l'url de l'API
const url = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/19/livres";

// handler pour enlever une quantité au stock
function handlerQuantiteMoins(livre) {
  console.log(livre);
  livre.QuantiteMoinsUn();
  // entête http pour la req AJAX
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // -- la chose modifiée est envoyé au serveur
  //  via le body de la req AJAX
  const fetchOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify({"id": livre.id, "titre" : livre.titre, "qtestock" : livre.qtestock, "prix" : livre.prix}),
  };
  // -- la req AJAX
  fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        getLivres();
      })
      .catch((error) => console.log(error));
}

function handlerQuantitePlus(livre) {
  console.log(livre);
  livre.QuantitePlusUn();
  // entête http pour la req AJAX
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // -- la chose modifiée est envoyé au serveur
  //  via le body de la req AJAX
  const fetchOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify({"id": livre.id, "titre" : livre.titre, "qtestock" : livre.qtestock, "prix" : livre.prix}),
  };
  // -- la req AJAX
  fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        getLivres();
      })
      .catch((error) => console.log(error));
}
// handler pour supprimer un livre à partir de son id
function handlerDelete(id) {
  console.log(id);
  const fetchOptions = {
    method: "DELETE",
  };
  // l'id du livre à supprimer doit être ajouté à la fin de l'url
  fetch(url + "/" + id, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        getLivres();
      })
      .catch((error) => console.log(error));
}
// handle pour ajouter un nouveau livre à partir de son titre, sa quantité et son prix
function handlerAjoutLivre(titre, qtestock, prix) {
  console.log(titre, qtestock, prix);
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // le libelle de la nouvelle chose est envoyé au serveur via le body de la req AJAX
  const fetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(
        { titre: titre,
        qtestock: qtestock ,
         prix: prix }
    ),
  };
  fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        getLivres();
      })
      .catch((error) => console.log(error));
}
// requête AJAX pour rechercher un livre à partir d'une chaîne de caractères
function chercherLivre(motcle) {
  const fetchOptions = { method: "GET" };
  // la chaîne de caractère à rechercher doit être ajouté à la fin de l'url
  fetch(url + "?search=" + motcle, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        // vider la liste des livres
        listeRecherche.splice(0, listeL.length);
        // pour chaque donnée renvoyée par l'API on crée un objet instance de la classe Livre et l'ajouter dans la liste listeRecherche
        dataJSON.forEach((v) =>
            listeRecherche.push(new Livre(v.id, v.titre, v.qtestock, v.prix))
        );
      })
      .catch((error) => console.log(error));
}
// requête AJAX pour récupérer les livres et les stocker dans la listeL
function getLivres() {
  const fetchOptions = { method: "GET" };
  fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        // vider la liste des livres
        listeL.splice(0, listeL.length);
        // pour chaque donnée renvoyée par l'API
        //  créer un objet instance de la classe Livre
        //  et l'ajouter dans la liste listeL
        dataJSON.forEach((v) =>
            listeL.push(new Livre(v.id, v.titre, v.qtestock, v.prix))
        );
      })
      .catch((error) => console.log(error));
}
// fonction du cycle de vie du composant exécutée 1 seule fois à la création
onMounted(() => {
  getLivres();
  chercherLivre();
});
</script>

<template>
  <h3>Liste des livres</h3>
  <LibrairieForm @ajouterL="handlerAjoutLivre"></LibrairieForm>
  <LibrairieRecherche @rechercherL="chercherLivre"></LibrairieRecherche>
  <LibrairieListe
      v-for="livre of listeRecherche"
      :key="livre.id"
      :livre="livre"
      @suppL="handlerDelete"
      @quantiteM="handlerQuantiteMoins"
      @quantiteP="handlerQuantitePlus"
  />

  <ul>
    <LibrairieListe
        v-for="livre of listeL"
        :key="livre.id"
        :livre="livre"
        @suppL="handlerDelete"
        @quantiteM="handlerQuantiteMoins"
        @quantiteP="handlerQuantitePlus"

    />
  </ul>
</template>

<style scoped>
</style>
