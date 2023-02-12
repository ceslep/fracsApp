<script>
  import ModalEjercicios from "../itemsTema4/ModalEjercicios.svelte";
  import ModalProblemas from "../itemsTema4/ModalProblemas.svelte";
  import ModalEducaplay from "./ModalEducaplay.svelte";
  import ModalYoutube from "./ModalYoutube.svelte";

  let mostrarYoutube=false;
  let mostrarEducaplay = false;
  let mostrarModalProblemas = false;
  let mostrarModalEjercicios = false;
  let refresh = false;
</script>

<button
  class="grid-item btn btn-educaplay rounded-0 d-block"
  on:click={() => (mostrarEducaplay = true)}
>
  <div class="grid-homogeneas">
    <img class="img-fluid" width="100px" src="./educaplay.png" alt="" />
    <span class="fs-6 fw-bold">Hagamos un test con Educaplay</span>
  </div>
</button>
<button
  class="grid-item btn btn-youtube rounded-0 d-block"
  on:click={() => (mostrarYoutube = true)}
>
  <div class="grid-homogeneas">
    <img class="img-fluid" width="250px" src="./youtube.png" alt="" />
    <span class="fs-6 fw-bold">Veamos un video sobre problemas</span>
  </div>
</button>


<button
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
      width="200px"
      src="./ejercicios/ejercicios.png"
      alt=""
    />
    <span class="fs-6 fw-bold">Test Problemas suma y resta de fracciones</span>
  </div>
</button>

<ModalYoutube
show={mostrarYoutube}
on:close={() => {
  mostrarYoutube = false;
}}
/>

<ModalEducaplay
  show={mostrarEducaplay}
  on:close={() => {
    mostrarEducaplay = false;
  }}
/>

<ModalProblemas
  show={mostrarModalProblemas}
  on:close={() => {
    mostrarModalProblemas = false;
  }}
/>

<ModalEjercicios
  show={mostrarModalEjercicios}
  tipoFilter={"problema"}
  {refresh}
  on:close={() => {
    mostrarModalEjercicios = false;
    refresh = false;
  }}
/>

<style>
  .grid-homogeneas {
    display: grid;
    grid-template-columns: 3fr 4fr;
    align-items: center;
  }

  
  .btn-youtube {
    background: linear-gradient(rgb(255, 22, 22), rgb(255, 255, 255));
  }
  .btn-educaplay {
    background: linear-gradient(rgb(157, 255, 199), rgb(224, 167, 255));
  }

  .btn-problemas {
    background: linear-gradient(rgb(130, 0, 100), rgb(224, 167, 255));
  }

  .btn-ejercicios {
    background: linear-gradient(rgb(130, 106, 0), rgb(255, 245, 186));
  }
</style>
