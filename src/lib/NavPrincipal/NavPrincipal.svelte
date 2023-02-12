<script>
  
  import { afterUpdate, createEventDispatcher } from "svelte";
  import Tema1 from "./Temas/Tema1.svelte";
  import Tema2 from "./Temas/Tema2.svelte";
  import Tema3 from "./Temas/Tema3.svelte";
  import Tema4 from "./Temas/Tema4.svelte";
  import Tema5 from "./Temas/Tema5.svelte";
  import Tema6 from "./Temas/Tema6.svelte";
  import Tema7 from "./Temas/Tema7.svelte";
  import Tema8 from "./Temas/Tema8.svelte";
  import Tema9 from "./Temas/Tema9.svelte";
  import Tema10 from "./Temas/Tema10.svelte";
  import Tema from "./Tema.svelte";

  import Login from "../Login/Login.svelte";
  import Question from "./Temas/Buttons/Question.svelte";
  import ModalTema1 from "./Temas/itemsTema1/ModalTema1.svelte";

  const dispatch = createEventDispatcher();
  let imagenVisible = true;

  export let login = false;
  
  let mostrarLogin = false;
  let showTema = false;
  let Identificarse = "Identificarse";
  

  export let show = "";
  export let expanded = false;

  const abrirLogin = () => {
    mostrarLogin = true;
     show="show";
    expanded = true;
  };

  let temas = [
    { Tema: "Definición de Fracción", component: Tema1 },
    {
      Tema: "Simplificación y Amplificación de Fracciones",
      component: Tema2,
    },
    {
      Tema: "Fracciones Equivalentes",
      component: Tema3,
    },
    {
      Tema: "Adición y sustracción de Fracciones",
      component: Tema4,
    },
    { Tema: "Problemas sobre adición y sustracción", component: Tema5 },
    { Tema: "Multiplicación de Fracciones", component: Tema6 },
    { Tema: "Problemas con multiplicación de Fracciones", component: Tema7 },
    { Tema: "División de Fracciones", component: Tema8 },
    { Tema: "Problemas con división de Fracciones", component: Tema9 },
    { Tema: "Ejercicios Mixtos", component: Tema10 },
  ];

  const enviarTema = (tema) => {
    imagenVisible = false;
    dispatch("Tema", tema);

    showTema = true;
  };

  export let title = "FracsApp";

  afterUpdate(() => {
    console.log("Show:", show);
  });

  $: console.log("Show:", show);
</script>

<Login
  show={mostrarLogin}
  on:close={() => {
    mostrarLogin = false;
    dispatch("questionClose");
  }}
  on:login={() => {
    mostrarLogin = false;
    document.querySelectorAll(".d-none").forEach((d) => {
      d.classList.remove("d-none");
    });
    dispatch("showMenuFixed");
    Identificarse = "Cerrar Sesión";
  }}
/>

<main>
  <nav
    class="navbar navbar-expand-xl navbar-warning bg-success bg-gradient  fixed-top"
  >
    <div class="container-fluid">
      <a
        class="navbar-brand text-white fs-7"
        href="#!"
        on:click={() => {
          dispatch("inicio");
        }}
      >
        <img src="./logocvudes.png" alt="" style="width:25px;" />
        {title}</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="navbar-collapse  {show}" id="navbarNavAltMarkup">
        <ul class="navbar-nav menu-root">
          <li class="nav-item d-none">
            <a
              href="#!"
              class="nav-link text-white"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
              on:click|preventDefault={abrirLogin}
              >🧑‍🎓{Identificarse}
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-white show"
              href="#!"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded={expanded}
            >
              📚Temas
            </a>
            <ul
              class="dropdown-menu show"
              aria-labelledby="inasistenciasMenuLink"
            >
              {#each temas as tema, index}
                <Tema
                  {index}
                  {tema}
                  on:Tema={() => {
                    enviarTema(tema);
                  }}
                />
              {/each}
            </ul>
          </li>

          <li class="nav-item">
            <a
              class="nav-link text-white"
              href="#!"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
              on:click={() => {
               
                dispatch("acerca");
              }}
            >
              📚 Acerca de...
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white position-relative" href="#!" on:click={()=>dispatch("creditos")}>
              ©️ Créditos
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</main>
{#if imagenVisible}
  <div
    class="d-flex align-items-center justify-content-center"
    style="heigth:70vh;"
  >
    <!-- {#if !showTema}
      <img class="img-fluid mt-5 pt-5" src="./fractions.png" alt="" />
    {/if} -->
    <p />
  </div>
{/if}



{#if login}
  <Question />
{/if}
