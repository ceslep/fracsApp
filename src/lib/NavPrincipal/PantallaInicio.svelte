<script>
	
  import { createEventDispatcher } from "svelte";
  
  
 
  

  const dispatch = createEventDispatcher();
</script>

<main class="inicio">
  <div class="grid">
    <div class="text-center">
      <img src="./logocvudes.png" width="50%" class="img-fluid" alt="" />
    </div>
    <h1 class="mx-auto">FracsApp</h1>
    <div class="text-center">
      <div class="text-center mx-auto">Creado Por:</div>
      <ul class="lista fw-bold text-success">
        <li>James Vasco</li>
        <li>Lina Ruiz</li>
        <li>Cesar Pantalla</li>
      </ul>
    </div>
    <h2 class="mx-auto">&#169; {new Date().getFullYear()}</h2>
    <div class="mx-auto">
      <button
        class="btn btn-warning"
        on:click={() => {
          dispatch("close");
        }}
      >
        Siguiente <i class="fa-solid fa-circle-arrow-right" />
      </button>
    </div>
  </div>
  <button class="btn btn-outline-success fixed-bottom" on:click={()=>dispatch("inicio")}>&nbsp;&nbsp;</button>
 

</main>

<style>
  .inicio {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(white, green);
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
</style>
