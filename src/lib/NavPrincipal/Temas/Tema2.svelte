<script>
  import { createEventDispatcher } from "svelte";
  import Amplificacion from './itemsTema2/Amplificacion.svelte';

  const dispatch = createEventDispatcher();


</script>

<main >

  <Amplificacion on:caption={(e)=>{
    console.log(e.detail.title);
    dispatch("caption",{title:e.detail.title});
  }}/>

</main>
  


