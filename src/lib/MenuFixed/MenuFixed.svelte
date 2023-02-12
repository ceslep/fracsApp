<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
   let showMenuFixed=true;
</script>

{#if showMenuFixed}
<main class="display-grid-menu pt-2">
  <div>&nbsp;</div>
  <div class="display-grid-buttons">
    <button class="btn btn-sucess btn-circle"
      >
      <i class="fa-solid fa-caret-right" />
      </button
    >
    <button class="btn btn-sucess btn-circle"
     on:click={()=>{
        dispatch("menu");
     }} ><i class="fa-solid fa-bars" /></button
    >
    <button class="btn btn-sucess btn-circle"
      >
      <i class="fa-solid fa-caret-left" />
      </button
    >
  </div>
</main>
{/if}
<style>
  .display-grid-menu {
    position:sticky;
    z-index: 1000;
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: auto;
  }

  .display-grid-buttons {
    position:fixed;
    top:140px;
    right:20px;
    margin-right: 0;
    display: grid;
    grid-template-columns: auto;
    row-gap: 1px;
    grid-template-rows: 1fr 1fr 1fr;
    z-index: 1500;
  }

  .btn-circle {
    width: 50px;
    height: 50px;
    padding: 13px 18px;
    border-radius: 60px;
    font-size: 15px;
    text-align: center;
    background: radial-gradient(rgb(1, 97, 19), lightgreen);
    color: white;
  }
</style>
