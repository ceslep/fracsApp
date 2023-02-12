<script>
  import { createEventDispatcher } from "svelte";
  import ModalPregunta from "./ModalPregunta.svelte";
  const dispatch = createEventDispatcher();
  export let visibility=true;
  
  const toolTip = (el) => {
    
   
    // @ts-ignore
    tippy(el, {
      // default
      theme: 'light',
      content: `<div class="d-flex justify-content-center align-items-center"><img class="img-fluid" width="140" src="./preguntaProfesor.png" alt=""><strong class="fs-4"><a href="#!">Haz una pregunta a tu profesor</a></strong>`,
      allowHTML: true,
      arrow: true,
    });
  };

  const preguntar=()=>{
    showPregunta=true;
    visibility=false;
  }

  let showPregunta=false;
</script>

<ModalPregunta show={showPregunta} on:close={()=>{
    showPregunta=false;
    visibility=true;
    dispatch("questionClose");
}}/>

{#if visibility}
<button id="el" class="float btn" use:toolTip on:click={preguntar}>
  <a
    href="#!"
    class="mt-float"
    on:click={preguntar}
    ><i class="fa-solid fa-question" /></a
  >
</button>
{/if}
<style>
  .float {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 40px;
    right: 10px;
    background-color: #0c9;
    color: rgb(234, 252, 192);
    border-radius: 50px;
    text-align: center;
    box-shadow: 2px 2px 3px #999;
    z-index: 2500;
    background: radial-gradient(
      circle,
      rgb(65, 209, 20) 0%,
      rgb(23, 228, 105) 15%,
      rgb(18, 101, 5) 100%
    );
  }
  .mt-float {
    position: absolute;
    top: 4px;
    left: 20px;
    font-size: 2rem;
    text-decoration: none;
    color:white;
  }
</style>
