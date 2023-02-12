<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<main class="inicio">
  <div class="grid">
    <div class="text-center">
      <img src="./logocvudes.png" width="20%" class="img-fluid" alt="" />
    </div>
    <h3 class="mx-auto">Objetivos</h3>
    <div class="text-justify text-dark fw-bold">
     
        Objetivo General
    </div>  
        
     <div class="text-justify">
        Fortalecer la competencia matemática sobre el uso de los números
          racionales en la resolución de problemas en diferentes contextos para
          el grado séptimo usando una unidad didáctica a través de una
          aplicación móvil en la institución educativa Instituto Guática.
     </div>
    </div>
    <div class="text-justify text-dark fw-bold">
     
        Objetivos Específicos
    </div>  
        
     <div class="text-justify">
       <ul class="fs-7">
        <li>Identificar el mínimo común denominador en las fracciones.</li>
        <li>Sumar y restar fracciones con diferentes denominadores</li>
        <li>Conocer y manejar el concepto de fracción.   </li>
        <li>Aplicar las operaciones con números fraccionarios en la resolución de problemas.</li>
        <li>Aplicar adecuadamente las operaciones de suma, resta, multiplicación y división.</li>
        <li>Identificar el uso de las fracciones en situaciones de diferentes contextos. </li>
        <li>Emplear la suma y la resta de fracciones para resolver situaciones problema.</li>
        <li>Conocer cuándo dos fracciones son equivalentes.</li>
       </ul>
     </div>
    
    <div class="mx-auto grid2">
      <button
        class="btn btn-warning"
        on:click={() => {
          dispatch("anterior");
        }}
      >
        <i class="fa-solid fa-circle-arrow-left" /> Anterior
      </button>
      <button
        class="btn btn-warning"
        on:click={() => {
          dispatch("close");
        }}
      >
        Siguiente <i class="fa-solid fa-circle-arrow-right" />
      </button>
    </div>

</main>

<style>
  .inicio {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgb(135, 255, 195), rgb(0, 86, 0));
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.5fr 0.5fr 3fr;
    align-items:baseline;
    justify-content: center;
  }

  .grid2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 15px;
  }

  .text-justify {
    text-align: justify;
    padding-left: 20px;
    padding-right: 30px;
  }

  .fs-7{
    font-size: 0.8rem;
  }
</style>
