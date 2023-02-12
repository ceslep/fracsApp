<script>
    import { createEventDispatcher } from "svelte";
  import Multiplicacion from "./itemsTema6/Multiplicacion.svelte";
   
  
    const dispatch = createEventDispatcher();
  
  
  </script>
  
  <main >
  
    <Multiplicacion on:caption={(e)=>{
      console.log(e.detail.title);
      dispatch("caption",{title:e.detail.title});
    }}/>
  
  </main>
    