<script>
    import { createEventDispatcher } from "svelte";
   import Division from "./itemsTema8/Division.svelte";
  import ProblemasDivision from "./itemsTema9/ProblemasDivision.svelte";
  
  
    const dispatch = createEventDispatcher();
  
  
  </script>
  
  <main >
  
    <ProblemasDivision on:caption={(e)=>{
      console.log(e.detail.title);
      dispatch("caption",{title:e.detail.title});
    }}/>
  
  </main>
    