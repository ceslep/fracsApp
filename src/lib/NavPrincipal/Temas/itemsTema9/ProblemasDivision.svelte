<script>
  import { afterUpdate, createEventDispatcher } from "svelte";
  import ModalBlog from "./ModalBlog.svelte";
  import ModalGeogebra from "./ModalGeogebra.svelte";
  import ModalVideo from "./ModalVideo.svelte";

  const dispatch = createEventDispatcher();

  afterUpdate(() => {
    dispatch("caption", { title });
  });

  let title = "Problemas de División";
  let mostrarVideo = false;
  let mostrarBlog = false;
  let mostrarGeogebra=false;
</script>

<main class="pt-3 m-2">
  <button
    class="grid-item btn btn-youtube rounded-0 d-block"
    on:click={() => (mostrarVideo = true)}
  >
    <div class="grid-homogeneas">
      <img class="img-fluid" width="250px" src="./youtube.png" alt="" />
      <span class="fs-6 fw-bold">Veamos un video sobre problemas</span>
    </div>
  </button>
  <button
    class="grid-item btn btn-ccfglobal rounded-0 d-block"
    on:click={() => (mostrarBlog = true)}
  >
    <div class="grid-homogeneas">
      <img class="img-fluid" width="70px" src="./ccfglobal.png" alt="" />
      <span class="fs-6 fw-bold">Veamos un Blog sobre problemas</span>
    </div>
  </button>
  <button
    class="btn btn-light w-100 rounded-0 mt-2"
    on:click={() => (mostrarGeogebra = true)}
  >
   <img src="./geogebra.png" alt="" width="10%">
    Aprendamos más con Geogebra
  </button>
</main>

<ModalVideo show={mostrarVideo} on:close={() => (mostrarVideo = false)} />

<ModalBlog show={mostrarBlog} on:close={() => (mostrarBlog = false)} />

  <ModalGeogebra show={mostrarGeogebra} on:close={() => (mostrarGeogebra = false)} />
<style>
  .grid-homogeneas {
    display: grid;
    grid-template-columns: 3fr 4fr;
    align-items: center;
  }

  .btn-ccfglobal {
    background: linear-gradient(rgb(22, 205, 255), rgb(255, 255, 255));
  }

  .btn-youtube {
    background: linear-gradient(rgb(255, 22, 22), rgb(255, 255, 255));
  }
</style>
