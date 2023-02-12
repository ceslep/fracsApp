<script>
    import { afterUpdate, createEventDispatcher } from "svelte";
  
    const dispatch = createEventDispatcher();
  
    afterUpdate(() => {
      dispatch("caption", { title });
    });
  
    let title = "Ejercicios Generales";
  
    let Buttons = [
      { b: 1 },
      { b: 2 },
      { b: 3 },
      { b: 4 },
      { b: 5 },
      { b: 6 },
      { b: 7 },
      { b: 8 },
      { b: 9 },
      { b: 10 },
     
    ];
  </script>
  
  <main class="pt-5 m-2">
    <div class="gridc">
      {#each Buttons as button, index}
        {#if index % 2 === 0}
          <div class="btn btn-info bg-gradient bg-opacity-25 rounded-0">
            <i class="fa-solid fa-file-circle-question"></i>Cuestionario {button.b}
          </div>
        
        {:else}
          <div class="btn btn-secondary bg-gradient bg-opacity-25 rounded-0">
            <i class="fa-solid fa-file-circle-question"></i> Cuestionario {button.b}
          </div>
        {/if}
      {/each}
    </div>
  </main>
  
  <style>
    .gridc {
      display: grid;
      grid-template-columns:auto;
      grid-template-rows: auto;
      gap: 18px;
    }
  </style>
  