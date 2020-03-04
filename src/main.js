/* eslint-disable linebreak-style */
import Vue from "vue";
// import { BootstrapVue } from "bootstrap-vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import storedata from "./storedata";

import Login from "./components/Login.vue";
import MainArea from "./components/MainArea.vue";
import Start from "./components/Start.vue";
import GerenciaTarefas from "./components/Tarefas/LvGerenciaTarefas.vue";
import GerenciaContatos from "./components/Contatos/LvGerenciaContatos.vue";
import ListarCadastro from "./components/Cadastro/ListarCadastro.vue";

import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/style.css";

Vue.use(VueRouter);
// Vue.use(BootstrapVue);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Login },
    {
      path: "/main",
      component: MainArea,
      children: [
        { path: "start", component: Start },
        { path: "tarefas", component: GerenciaTarefas },
        { path: "contatos", component: GerenciaContatos },
        { path: "cadastro", component: ListarCadastro }
      ]
    }
  ]
});

new Vue({
  el: "#app",
  store: storedata,
  router,
  render: h => h(App)
});
