<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<main class="inicio">
  <div class="grid">
    <div class="text-center">
      <img src="./logocvudes.png" width="20%" class="img-fluid" alt="" />
    </div>
    <h3 class="mx-auto">Introducción</h3>
    <div class="text-justify text-dark">
      La estrategia educativa diseñada en svelte.dev busca fortalecer la
      habilidad de resolver problemas que involucren numeros fraccionarios. El proceso comienza repasando los
      contenidos básicos necesarios para abordar una serie de temas.
      </div>
      <div class="text-justify text-dark"> Dentro de la aplicación móvil, hay un menú que lleva a las sesiones para el
      estudiante. Encontrará una sesión de introducción, objetivos y luego,
      mediante iconos, accederá a cada una de las actividades en las 10 clases.
    </div>
    <br/>

    <div class="mx-auto grid2">
      <button
        class="btn btn-warning"
        on:click={() => {
          dispatch("anterior");
        }}
      >
      <i class="fa-solid fa-circle-arrow-left" /> Anterior
      </button>
    <button
      class="btn btn-warning"
      on:click={() => {
        dispatch("close");
      }}
    >
    Siguiente <i class="fa-solid fa-circle-arrow-right" />
    </button>
  </div>
  </div>
</main>

<style>
  .inicio {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgb(135, 255, 195), rgb(0, 86, 0));
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.7fr 0.5fr 1fr 1fr;
    align-items: center;
    justify-content: center;
  }

  .text-justify {
    text-align: justify;
    padding-left: 20px;
    padding-right: 30px;
  }

  .grid2{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        gap:15px;
    }
</style>
