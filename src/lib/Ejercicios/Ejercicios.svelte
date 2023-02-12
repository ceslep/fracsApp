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
    { b: 11 },
    { b: 12 },
    { b: 13 },
    { b: 14 },
    { b: 15 },
    { b: 16 },
    { b: 17 },
    { b: 18 },
    { b: 19 },
    { b: 20 },
    { b: 21 },
    { b: 22 },
    { b: 23 },
    { b: 24 },
    { b: 25 },
    { b: 26 },
    { b: 27 },
    { b: 28 },
    { b: 29 },
    { b: 30 },
  ];
</script>

<main class="pt-5 m-2">
  <div class="gridc">
    {#each Buttons as button, index}
      {#if index % 2 === 0}
        <div class="btn btn-info bg-gradient bg-opacity-25 rounded-0">
            <i class="fa-solid fa-brain" /> Ejercicio {button.b}
        </div>
      {:else if index % 7 === 0}
        <div class="btn btn-success bg-gradient bg-opacity-25 rounded-0">
            <i class="fa-solid fa-brain" />  Ejercicio {button.b}
        </div>
      {:else}
        <div class="btn btn-light bg-gradient bg-opacity-25 rounded-0">
          <i class="fa-solid fa-brain"></i> Ejercicio {button.b}
        </div>
      {/if}
    {/each}
  </div>
</main>

<style>
  .gridc {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 8px;
  }
</style>
