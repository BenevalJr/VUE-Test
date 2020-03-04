export default {
  state: {
    contatos: []
  },
  mutations: {
    ADD_CONTATO: (estado, valor) => {
      estado.contatos.push(valor);
    },
    DEL_CONTATO: (estado, valor) => {
      const posicao = estado.contatos.indexOf(valor);
      if (posicao > -1) estado.contatos.splice(posicao, 1);
    }
  },
  getters: {
    listaContatos: estado => {
      return estado.contatos;
    }
  },
  actions: {
    adicionarContato(contexto, valor) {
      const val = valor;
      contexto.commit("ADD_CONTATO", val);
    },

    removerContato(contexto, valor) {
      contexto.commit("DEL_CONTATO", valor);
    }
  }
};
