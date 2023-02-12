<script>
   import { createEventDispatcher } from "svelte";
  import Division from "./itemsTema8/Division.svelte";
 
 
   const dispatch = createEventDispatcher();
 
 
 </script>
 
 <main >
 
   <Division on:caption={(e)=>{
     console.log(e.detail.title);
     dispatch("caption",{title:e.detail.title});
   }}/>
 
 </main>
   