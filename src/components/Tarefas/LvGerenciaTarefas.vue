<template>
  <div>
    <!-- <div
      class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm"
    >-->
    <h5 class="my-0 mr-md-auto font-weight-normal">Tarefas</h5>
    <hr />
    <!-- </div> -->
    <lv-addtarefa></lv-addtarefa>
    <lv-tarefas></lv-tarefas>
    <lv-busca></lv-busca>
  </div>
</template>

<script>
import { mapState } from "vuex";
import LvAddtarefa from "./LvAddTarefa.vue";
import LvTarefas from "./LvTarefas.vue";
import LvBusca from "./LvBusca.vue";

export default {
  name: "app",
  components: { LvAddtarefa, LvTarefas, LvBusca },
  computed: {
    ...mapState(["nome"])
  },
  mounted() {
    console.log(this.nome);
  }
};
</script>
