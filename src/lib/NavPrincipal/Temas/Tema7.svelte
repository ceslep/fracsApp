<script>
    import { createEventDispatcher } from "svelte";
  import Multiplicacion from "./itemsTema6/Multiplicacion.svelte";
  import ProblemasMultiplicacion from "./itemsTema7/ProblemasMultiplicacion.svelte";
   
  
    const dispatch = createEventDispatcher();
  
  
  </script>
  
  <main >
  
    <ProblemasMultiplicacion on:caption={(e)=>{
      console.log(e.detail.title);
      dispatch("caption",{title:e.detail.title});
    }}/>
  
  </main>
    