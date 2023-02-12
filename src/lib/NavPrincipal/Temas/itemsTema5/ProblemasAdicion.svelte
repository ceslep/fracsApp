<script>
    import { afterUpdate, createEventDispatcher } from "svelte";
    import Problemas from "../itemsTema4/Problemas/Problemas.svelte";
  import ProblemasYEjercicios from "./ProblemasYEjercicios.svelte";
   
    const dispatch = createEventDispatcher();
  
    afterUpdate(() => {
      dispatch("caption", { title });
    });
  
    let title = "Problemas de fracciones";
  </script>
  
  <main class="pt-5 m-2">
   <ProblemasYEjercicios/>

  </main>
  

  <style>
   
  </style>
  
  