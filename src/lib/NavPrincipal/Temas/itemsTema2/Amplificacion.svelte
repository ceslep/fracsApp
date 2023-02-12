<script>
  import { afterUpdate, createEventDispatcher } from "svelte";
  import AmplificacionEjemplo1 from "./AmplificacionEjemplo1.svelte";
  import AmplificacionEjemplo2 from "./AmplificacionEjemplo2.svelte";
  import AmplificacionEjemplo3 from "./AmplificacionEjemplo3.svelte";
  import Definicion from "./Definicion.svelte";
  import Juego from "./Juego.svelte";
  import Juego2 from "./Juego2.svelte";
  import Juego3 from "./Juego3.svelte";
  import Video1 from "./Video1.svelte";
  import Video2 from "./Video2.svelte";

  const dispatch = createEventDispatcher();

  afterUpdate(() => {
    dispatch("caption", { title });
  });

  let title = "Simplificación y Amplificación";
</script>

<main class="mt-3">
 
  
  
  <div class="d-grid gap-1">
    <div class="accordion" id="accordionExample">
      {#each [Video1,Video2,Definicion,Juego,Juego2,Juego3,AmplificacionEjemplo1, AmplificacionEjemplo2, AmplificacionEjemplo3] as ejemplo, index}
        <svelte:component this={ejemplo} no={index + 1} />
      {/each}
    </div>

    
  </div>
</main>


