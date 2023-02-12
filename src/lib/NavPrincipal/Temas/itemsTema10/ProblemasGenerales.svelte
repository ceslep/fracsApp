<script>
  import { afterUpdate, createEventDispatcher } from "svelte";
  import ModalEjercicios from "./ModalEjercicios.svelte";
  import ModalVideo from "./ModalVideo.svelte";

  const dispatch = createEventDispatcher();

  afterUpdate(() => {
    dispatch("caption", { title });
  });

  let title = "Ejercicios Mixtos";
  let mostrarVideo = false;
  let mostrarEjercicios=false;
</script>

<main class="pt-3 m-2">
  <button
    class="grid-item btn btn-youtube rounded-0 w-100"
    on:click={() => (mostrarVideo = true)}
  >
    <div class="grid-homogeneas">
      <img class="img-fluid" width="150px" src="./youtube.png" alt="" />
      <span class="fs-6 fw-bold">Veamos un video </span>
    </div>
  </button>
  <button
    class="grid-item btn btn-ejercicios rounded-0 w-100 mt-2"
    on:click={() => (mostrarEjercicios= true)}
  >
    <div class="grid-homogeneas">
      
      <span class="fs-6 fw-bold">Ejercicios Propuestos </span>
    </div>
  </button>
</main>

<ModalEjercicios show={mostrarEjercicios} on:close={() => (mostrarEjercicios = false)} />
<ModalVideo show={mostrarVideo} on:close={() => (mostrarVideo = false)} />

<style>
  .btn-youtube {
    background: linear-gradient(rgb(255, 22, 22), rgb(255, 255, 255));
  }

  .btn-ejercicios {
    background: linear-gradient(rgb(175, 255, 47), rgb(255, 255, 255));
  }
</style>
