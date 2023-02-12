<script>
	import ModalDefinicion from './ModalDefinicion.svelte';
  import ModalJuegoFraccionesEquivalentes from "./ModalJuegoFraccionesEquivalentes.svelte";
  import { afterUpdate, createEventDispatcher } from "svelte";
  import ModalQuizz from "./ModalQuizz.svelte";
  import ModalDefinicion2 from './ModalDefinicion2.svelte';
  import ModalKahoot from './ModalKahoot.svelte';

  const dispatch = createEventDispatcher();

  afterUpdate(() => {
    dispatch("caption", { title });
  });

  let title = "Fracciones Equivalentes";
  let mostrarJuego = false;
  let mostrarQuizziz=false;
  let mostrarDefinicion=false;
  let mostrarDefinicion2=false;
  let mostrarKahoot=false;
</script>

<main>
 
  <button class="btn btn-info rounded-0 mb-2 w-100" on:click={()=>mostrarDefinicion=true}>
    <img src="./prezi.png" alt="" class="img-fluid" width="8%" />Entendiendo las Fracciones equivalentes
  </button>
  <button class="btn btn-secondary rounded-0 mb-2 w-100" on:click={()=>mostrarDefinicion2=true}>
    <img src="./matesfacil.png" alt="" class="img-fluid" width="18%" />Aprendamos más con matesFacil
  </button>
  <div class="d-grid gap-1 mt-2">
    <button class="btn btn-warning" on:click={()=>mostrarQuizziz=true}>
      <img src="./quizizz.png" alt="" class="img-fluid" width="13%" >
      Juego de Fracciones Equivalentes</button>

      <button class="btn btn-warning" on:click={()=>mostrarKahoot=true}>
        <img src="./khoot.png" alt="" class="img-fluid" width="13%" >
        Aprendamos Jugando con Khoot</button>
    <button
      class="btn btn-success bg-gradient bg-opacity-50 rounded-0"
      on:click|stopPropagation={() => (mostrarJuego = true)}
      ><i class="fa-solid fa-paper-plane" /> Ejemplos</button
    >
  </div>
</main>


<ModalDefinicion
show={mostrarDefinicion}
on:close={() => {
  mostrarDefinicion = false;
}}
/>

<ModalDefinicion2
show={mostrarDefinicion2}
on:close={() => {
  mostrarDefinicion2 = false;
}}
/>
<ModalJuegoFraccionesEquivalentes
  show={mostrarJuego}
  on:close={() => {
    mostrarJuego = false;
  }}
/>


<ModalQuizz
show={mostrarQuizziz}
on:close={() => {
  mostrarQuizziz = false;
}}
/>

<ModalKahoot
show={mostrarKahoot}
on:close={() => {
  mostrarKahoot = false;
}}
/>

<style>
 
</style>
