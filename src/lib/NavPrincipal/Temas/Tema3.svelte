<script>
    import { createEventDispatcher } from "svelte";
  import FraccionesEquivalentes from "./itemsTema3/FraccionesEquivalentes.svelte";
   
  
    const dispatch = createEventDispatcher();
  
  
  </script>
  
  <main >
  
    <FraccionesEquivalentes on:caption={(e)=>{
      console.log(e.detail.title);
      dispatch("caption",{title:e.detail.title});
    }}/>
  
  </main>
    