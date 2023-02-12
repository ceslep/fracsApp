<script>
    import { createEventDispatcher } from "svelte";
  import ProblemasGenerales from "./itemsTema10/ProblemasGenerales.svelte";
  
  
  
  
    const dispatch = createEventDispatcher();
  
  
  </script>
  
  <main >
  
    <ProblemasGenerales on:caption={(e)=>{
      console.log(e.detail.title);
      dispatch("caption",{title:e.detail.title});
    }}/>
  
  </main>
    