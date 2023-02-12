<script>
    import { createEventDispatcher } from "svelte";
  import ProblemasAdicion from "./itemsTema5/ProblemasAdicion.svelte";
   
  
    const dispatch = createEventDispatcher();
  
  
  </script>
  
  <main >
  
    <ProblemasAdicion on:caption={(e)=>{
      console.log(e.detail.title);
      dispatch("caption",{title:e.detail.title});
    }}/>
  
  </main>
    