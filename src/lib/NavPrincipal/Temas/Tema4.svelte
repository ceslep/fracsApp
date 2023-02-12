<script>
    import { afterUpdate, createEventDispatcher, onMount } from "svelte";
  import { ShowMenuFixed } from "../../../stores";
  import MenuButtons from "../../MenuFixed/MenuButtons.svelte";
  
  import AdicionSustraccion from "./itemsTema4/AdicionSustraccion.svelte";
  import ProblemasAdicion from "./itemsTema5/ProblemasAdicion.svelte";
  
    const dispatch = createEventDispatcher();
  export let cerrarTodo=false;
  

  onMount(()=>{
    console.log("CerrarTodo->",cerrarTodo);
  })
  </script>
  


  <main >
  
    <AdicionSustraccion on:caption={(e)=>{
      console.log(e.detail.title);
      dispatch("caption",{title:e.detail.title});
    }} bind:cerrarTodo/>
  
  
  </main>
    