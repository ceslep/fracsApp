<script>
  import ModalMatesFacil from "./ModalMatesFacil.svelte";
  import { afterUpdate, createEventDispatcher } from "svelte";

  import ModalMCM from "./ModalMCM.svelte";
  import ModalMCD from "./ModalMCD.svelte";
  import ModalProblemas from "./ModalProblemas.svelte";
  import ModalSumayRestaHeterogeneos from "./ModalSumayRestaHeterogeneos.svelte";
  import ModalSumayRestaHomogeneos from "./ModalSumayRestaHomogeneos.svelte";
  import ModalEjercicios from "./ModalEjercicios.svelte";
  import ModalDefinicion from "../itemsTema1/ModalDefinicion.svelte";

  const dispatch = createEventDispatcher();

  afterUpdate(() => {
    if (cerrarTodo) {
      mostrarModalSumayRestaHomogeneos = false;
      mostrarModalSumayRestaHeterogeneos = false;
      mostrarModalProblemas = false;
      mostrarModalMCM = false;
      mostrarModalMCD = false;
      mostrarModalEjercicios = false;
      mostrarDefinicion = false;
      cerrarTodo = false;
    }
    dispatch("caption", { title });
  });

  let title = "Adición y Sustracción";

  let mostrarModalSumayRestaHomogeneos = false;
  let mostrarModalSumayRestaHeterogeneos = false;
  let mostrarModalProblemas = false;
  let mostrarModalMCM = false;
  let mostrarModalMCD = false;
  let mostrarModalEjercicios = false;
  let refresh = false;
  let mostrarDefinicion = false;
  let mostrarMatesFacil = false;

  afterUpdate(() => {});

  export let cerrarTodo = false;

  afterUpdate(() => {
    console.log("CerrarTodo:", cerrarTodo);
  });
  $: if (cerrarTodo) {
    mostrarModalSumayRestaHomogeneos = false;
    mostrarModalSumayRestaHeterogeneos = false;
    mostrarModalProblemas = false;
    mostrarModalMCM = false;
    mostrarModalMCD = false;
    mostrarModalEjercicios = false;
    refresh = false;
    mostrarDefinicion = false;
  }
</script>

<main class="mt-2">
  <button class="btn btn-info w-100" on:click={() => (mostrarDefinicion = true)}
    ><img src="./canva.png" alt="" width="8%" />Definición de suma y resta</button
  >
  <button
    class="btn btn-danger  w-100 mt-2"
    on:click={() => (mostrarMatesFacil = true)}
    ><img src="./matesfacil.png" alt="" width="18%" />Aprendamos más con
    MatesFacil</button
  >
  <!-- <div class="d-flex justify-content-center align-items-center">
    <img class="img-fluid" src="./adicionSustraccion.png" alt="" />
  </div>

  <p class="text-justify">
    Para poder sumar y restar fracciones, es necesario tener el mismo
    denominador. Cuándo las fracciones tienen ya el mismo denominador, se suman
    o se restan los numeradores y se guarda el denominador. Cuando no tienen el
    mismo denominador, se toman los denominadores y se encuentra el mcm.
  </p> -->
  <iframe
    class="pt-2"
    width="100%"
    height="60%"
    src="https://www.youtube.com/embed/YpSb9LlsFv8"
    title="Comprendiendo la suma y resta de fracciones | Explicación completa"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
  <div class="grid pt-2">
    <button
      class="grid-item btn-grdblue  rounded-0"
      on:click={() => {
        mostrarModalSumayRestaHomogeneos = true;
      }}
      ><!-- <i class="fa fa-calculator me-2" aria-hidden="true" />Sumar y Restar
      Homogéneos -->
      <div class="grid-homogeneas">
        <img
          class="img-fluid"
          width="100px"
          src="./sumahomogeneas/profehomogeneas.png"
          alt=""
        />
        <span class="fs-6 fw-bold">Sumar Fracciones Homogéneas</span>
      </div>
    </button>
    <button
      class="grid-item btn btn-danger bg-gradient bg-opacity-50 rounded-0"
      on:click={() => {
        mostrarModalMCM = true;
      }}
    >
      <div class="grid-homogeneas">
        <img
          class="img-fluid"
          width="100px"
          src="./mcm/profesoramcm.png"
          alt=""
        />
        <span class="fs-6 fw-bold">M.C.M Mínimo Común Múltiplo</span>
      </div>
    </button>
    <button
      class="grid-item btn btn-tomato  rounded-0"
      on:click={() => {
        mostrarModalMCD = true;
      }}
      ><div class="grid-homogeneas">
        <img
          class="img-fluid"
          width="100px"
          src="./mcd/profesormcd.png"
          alt=""
        />
        <span class="fs-6 fw-bold">M.C.D Máximo Común Divisor</span>
      </div></button
    >
    <button
      class="grid-item btn btn-lightgreen rounded-0"
      on:click={() => {
        mostrarModalSumayRestaHeterogeneos = true;
      }}
      ><div class="grid-homogeneas">
        <img
          class="img-fluid"
          width="100px"
          src="./sumahetero/profesorheterogeneo.png"
          alt=""
        />
        <span class="fs-6 fw-bold">Sumar Fracciones Heterogeneas</span>
      </div></button
    >
    <!-- <button
      class="grid-item btn btn-problemas rounded-0 d-block"
      on:click={() => (mostrarModalProblemas = true)}
    >
      <div class="grid-homogeneas">
        <img
          class="img-fluid"
          width="100px"
          src="./problemas/problemas.png"
          alt=""
        />
        <span class="fs-6 fw-bold">Problemas suma y resta de fracciones</span>
      </div>
    </button>
    <button
      class="grid-item btn btn-ejercicios rounded-0 d-block"
      on:click={() => {
        mostrarModalEjercicios = true;
        refresh = true;
      }}
    >
      <div class="grid-homogeneas">
        <img
          class="img-fluid"
          width="100px"
          src="./ejercicios/ejercicios.png"
          alt=""
        />
        <span class="fs-6 fw-bold">Ejercicios suma y resta de fracciones</span>
      </div>
    </button> -->
  </div>
  <button
    class="grid-item btn btn-ejercicios rounded-0 d-block"
    on:click={() => {
      mostrarModalEjercicios = true;
      refresh = true;
    }}
  >
    <div class="grid-homogeneas">
      <img
        class="img-fluid"
        width="200px"
        src="./ejercicios/ejercicios.png"
        alt=""
      />
      <span class="fs-6 fw-bold">Test Ejercicios suma y resta de fracciones</span
      >
    </div>
  </button>
</main>

<ModalDefinicion
  show={mostrarDefinicion}
  on:close={() => {
    mostrarDefinicion = false;
  }}
/>

<ModalMatesFacil
  show={mostrarMatesFacil}
  on:close={() => {
    mostrarMatesFacil = false;
  }}
/>

<ModalSumayRestaHomogeneos
  show={mostrarModalSumayRestaHomogeneos}
  on:close={() => {
    mostrarModalSumayRestaHomogeneos = false;
  }}
/>

<ModalSumayRestaHeterogeneos
  show={mostrarModalSumayRestaHeterogeneos}
  on:close={() => {
    mostrarModalSumayRestaHeterogeneos = false;
  }}
/>

<ModalMCM
  show={mostrarModalMCM}
  on:close={() => {
    mostrarModalMCM = false;
  }}
/>

<ModalMCD
  show={mostrarModalMCD}
  on:close={() => {
    mostrarModalMCD = false;
  }}
/>

<ModalProblemas
  show={mostrarModalProblemas}
  on:close={() => {
    mostrarModalProblemas = false;
  }}
/>

<ModalEjercicios
  show={mostrarModalEjercicios} tipoFilter={"aritmetico"}
  {refresh}
  on:close={() => {
    mostrarModalEjercicios = false;
    refresh = false;
  }}
/>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 3px;
    grid-row-gap: 3px;
  }

  .grid-item:nth-child(1) {
    grid-area: 1 / 1 / 2 / 2;
  }
  .grid-item:nth-child(2) {
    grid-area: 1 / 2 / 2 / 3;
  }
  .grid-item:nth-child(3) {
    grid-area: 2 / 1 / 3 / 2;
  }
  .grid-item:nth-child(4) {
    grid-area: 2 / 2 / 3 / 3;
  }
  .grid-item:nth-child(5) {
    grid-area: 3 / 1 / 3 / 2;
  }
  .grid-item:nth-child(6) {
    grid-area: 3 / 2 / 3 / 3;
  }

  .grid-homogeneas {
    display: grid;
    grid-template-columns: 3fr 4fr;
    align-items: center;
  }

  .btn-tomato {
    background: linear-gradient(tomato, yellow);
  }

  .btn-grdblue {
    background: linear-gradient(blue, rgb(117, 237, 255));
  }

  .btn-lightgreen {
    background: linear-gradient(rgb(78, 255, 8), rgb(255, 247, 22));
  }

  /* .btn-problemas {
    background: linear-gradient(rgb(130, 0, 100), rgb(224, 167, 255));
  } */

  .btn-ejercicios {
    background: linear-gradient(rgb(130, 106, 0), rgb(255, 245, 186));
  }
</style>
