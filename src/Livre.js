// on définit ce qu'est un livre
export default class Livre {
    constructor(id, titre, qtestock, prix) {
        this._id = id;
        this._titre = titre;
        this._qtestock = qtestock;
        this._prix = prix;
    }
    // les getters
    get id() {
        return this._id;
    }
    get titre() {
        return this._titre;
    }
    get qtestock() {
        return this._qtestock;
    }
    get prix() {
        return this._prix;
    }

    // les setters
    set titre(titre) {
        this._titre = titre;
    }
    set prix(prix) {
        this._prix = prix;
    }

    QuantitePlusUn(){
        this._qtestock += 1;
    }

    QuantiteMoinsUn(){
        this._qtestock -= 1;
    }
    afficher() {
        return `--> ${this._titre} ${this._prix} ${this._qtestock}`;
    }
}
