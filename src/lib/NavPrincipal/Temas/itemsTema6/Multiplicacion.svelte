<script>
	import Multiplicacion from './Multiplicacion.svelte';
    import { afterUpdate, createEventDispatcher } from "svelte";
  import ModalDefinicion from './ModalDefinicion.svelte';
  import ModalJuego from './ModalJuego.svelte';
  
  
    const dispatch = createEventDispatcher();
  
    afterUpdate(() => {
      dispatch("caption", { title });
    });
  
    let title = "Multiplicación de Fracciones";
    let mostrarDefinicion=false;
    let mostrarJuego=false;
  </script>
  
  <main class="pt-3 m-2">
    
    <button class="btn btn-info w-100 rounded-0"
    on:click={()=>mostrarDefinicion=true}>
    <img src="./educaplay.png" alt="" width="10%">
      Definición de Multiplicación
    </button>

    <button class="btn btn-danger w-100 rounded-0 mt-2"
    on:click={()=>mostrarJuego=true}>
    <img src="./wordwall.png" alt="" width="10%">
      Juguemos para Aprender
    </button>
    
    
  
  </main>
  
  <ModalDefinicion 
  show={mostrarDefinicion}
  on:close={()=>mostrarDefinicion=false}/>

  <ModalJuego
  show={mostrarJuego}
  on:close={()=>mostrarJuego=false}/>
 
  