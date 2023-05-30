import { data } from "./data.js";

const { createApp } = Vue;
createApp({
  data() {
    return {
      title: "Tabla dinamica usando v-for",
// Estoas tres que sigen se ocupan en la tarea:
      info: [],
      par: "par",
      odd: "odd",
    };
  },
  created() {
    this.getElements();
  },
  methods: {

    getElements() {
      this.info = data;
    },
  },
  computed:{
    elementosCss(){
      return{
        'color': this.blanco,
        'background-color': this.bgcol
      }
    }
  },
}).mount("#app");
