<script>
    import { createEventDispatcher } from "svelte";
  
    const dispatch = createEventDispatcher();
  </script>
  
  <main class="inicio">
    <div class="grid">
      <div class="text-center">
        <img src="./logocvudes.png" width="20%" class="img-fluid" alt="" />
      </div>
      <h3 class="mx-auto">Presentación</h3>
      <div class="text-justify text-dark">
        La aplicación móvil está diseñada para ayudar a fortalecer la habilidad de
        resolver problemas reales utilizando números fraccionarios. En ella, los
        estudiantes pueden encontrar una variedad de actividades creadas por los
        profesores y almacenadas en diferentes recursos educativos.
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
      grid-template-rows: 0.7fr 0.5fr 1fr 1fr;
      align-items: center;
      justify-content: center;
    }

    .grid2{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        gap:15px;
    }
  
    .text-justify {
      text-align: justify;
      padding-left: 20px;
      padding-right: 30px;
    }
  </style>
  