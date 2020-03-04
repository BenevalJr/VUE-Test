<template>
  <div id="sidebar-wrapper">
    <ul
      id="sidebar_menu"
      class="sidebar-nav"
    >
      <li class="sidebar-brand">
        <a
          id="menu-toggle"
          href="#"
        >
          Menu
          <span
            id="main_icon"
            class="glyphicon glyphicon-align-justify"
          />
        </a>
      </li>
    </ul>
    <ul
      class="sidebar-nav"
      id="sidebar"
    >
      <li>
        <router-link to="/main/start">Inicial</router-link>
      </li>
      <li>
        <router-link to="/main/tarefas">Tarefas</router-link>
      </li>
      <li>
        <router-link to="/main/contatos">Contatos</router-link>
      </li>
      <li>
        <router-link to="/main/cadastro">Cadastro</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuSideBar',
};
</script>
