<template>
  <div>
    <!-- <div
      class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm"
    >
      <h5 class="my-0 mr-md-auto font-weight-normal">Contatos</h5>
    </div>-->
    <h5 class="my-0 mr-md-auto font-weight-normal">Contatos</h5>
    <hr />

    <lv-add-contato></lv-add-contato>
    <lv-contatos></lv-contatos>
    <hr />
  </div>
</template>

<script>
import { mapState } from "vuex";
import LvAddContato from "./LvAddContato.vue";
import LvContatos from "./LvContatos.vue";

export default {
  name: "app",
  components: { LvAddContato, LvContatos }
};
</script>
