<script>
	import ModalVideo from './ModalVideo.svelte';
  import { afterUpdate, createEventDispatcher } from "svelte";
  import Problema1 from "./Problema1.svelte";
  import Problema2 from "./Problema2.svelte";
  import Problema3 from "./Problema3.svelte";
  import Problema4 from "./Problema4.svelte";
  import ModalBlog from './ModalBlog.svelte';

  const dispatch = createEventDispatcher();

  afterUpdate(() => {
    dispatch("caption", { title });
  });

  let mostrarBlog=false;
  let mostrarVideo=false;

  let title = "Problemas con multiplicación";
</script>

<main class="pt-3 m-2">
  <button
    class="grid-item btn btn-ccfglobal rounded-0 d-block"
    on:click={() => (mostrarBlog = true)}
  >
    <div class="grid-homogeneas">
      <img class="img-fluid" width="75px" src="./ccfglobal.png" alt="" />
      <span class="fs-6 fw-bold">Veamos un blog sobre problemas</span>
    </div>
  </button>
  <button
    class="grid-item btn btn-youtube rounded-0 d-block"
    on:click={() => (mostrarVideo = true)}
  >
    <div class="grid-homogeneas">
      <img class="img-fluid" width="250px" src="./youtube.png" alt="" />
      <span class="fs-6 fw-bold">Veamos un video sobre problemas</span>
    </div>
  </button>
  <div class="accordion" id="accordionExample">
    {#each [Problema1, Problema2, Problema3, Problema4] as problema, index}
      <svelte:component this={problema} no={index + 1} />
    {/each}
  </div>
</main>

<ModalBlog
show={mostrarBlog}
on:close={() => {
  mostrarBlog = false;
}}
/>

<ModalVideo
show={mostrarVideo}
on:close={() => {
  mostrarVideo = false;
}}
/>
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
