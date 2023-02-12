<script>
  import { afterUpdate, createEventDispatcher } from "svelte";
  import ModalDefinicion from "./ModalDefinicion.svelte";
  import ModalGeogebra from "./ModalGeogebra.svelte";
  import ModalJuego from "./ModalJuego.svelte";

  const dispatch = createEventDispatcher();

  afterUpdate(() => {
    dispatch("caption", { title });
  });

  let title = "División de Fracciones";
  let mostrarDefinicion = false;
  let mostrarJuego = false;
  let mostrarGeogebra=false;
</script>

<main class="pt-3 m-2">
  <button
    class="btn btn-info w-100 rounded-0"
    on:click={() => (mostrarDefinicion = true)}
  >
   <img src="./smarticks.png" alt="" width="18%">
    Definición de División por Smarticks.com
  </button>

  <button
    class="btn btn-danger w-100 rounded-0 mt-2"
    on:click={() => (mostrarJuego = true)}
  >
  <img src="./educaplay.png" alt="" width="10%" />
    Juguemos para Aprender con Educaplay
  </button>
  <button
    class="btn btn-light w-100 rounded-0 mt-2"
    on:click={() => (mostrarGeogebra = true)}
  >
   <img src="./geogebra.png" alt="" width="10%">
    Aprendamos más con Geogebra
  </button>
</main>

<ModalDefinicion
  show={mostrarDefinicion}
  on:close={() => (mostrarDefinicion = false)}
/>

<ModalJuego show={mostrarJuego} on:close={() => (mostrarJuego = false)} />

<ModalGeogebra show={mostrarGeogebra} on:close={() => (mostrarGeogebra = false)} />