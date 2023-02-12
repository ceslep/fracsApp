<script>
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  const dispatch = createEventDispatcher();

  let menuVisible = false;

  const menuBtn = () => {};
   export let showMenu = false;
</script>

{#if showMenu}
 
    <button
      class="btn btn-sucess myButton"
      on:click={() => {
       dispatch("menu");
      }}><i class="fa-solid fa-house"></i>
     <!--  {#if menuVisible}
      <button
        transition:fade
        class="btn btn-sucess myButton1"
        on:click={() => {
           dispatch("anterior");
        }}><i class="fa-solid fa-circle-arrow-left" /></button
      >

      <button
        transition:fade
        class="btn btn-sucess myButton2"
        on:click={() => {
          dispatch("menu");
        }}><i class="fa-solid fa-bars" /></button
      >

      <button
        transition:fade
        class="btn btn-sucess myButton3"
        on:click={() => {
           dispatch("siguiente");
        }}><i class="fa-solid fa-circle-arrow-right" /></button
      >
    {/if} -->
      </button
    >

    
 
{/if}

<style>
  .myButton {
    position:fixed;
    box-shadow: inset 0px 0px 14px -3px #f2fadc;
    background: linear-gradient(to bottom, #dbe6c4 5%, #9ba892 100%);
    background-color: #dbe6c4;
    border-radius: 50px;
    border: 1px solid #b2b8ad;
    display: inline-block;
    cursor: pointer;
    color: #757d6f;
    font-family: Arial;
    font-size: 20px;
    font-weight: bold;

    text-decoration: none;
    text-shadow: 0px 1px 0px #ced9bf;
    position: fixed;
    right: 30px;
    bottom: 80px;
    z-index: 45000;
  }
  .myButton:hover {
    background: linear-gradient(to bottom, #9ba892 5%, #dbe6c4 100%);
    background-color: #9ba892;
  }
/* 
  .myButton1 {
    position:absolute;
    box-shadow: inset 0px 0px 14px -3px #f2fadc;
    background: linear-gradient(to bottom, #ffefb5 5%, #ffb702 100%);
    background-color: #dbe6c4;
    border-radius: 50px;
    border: 1px solid #b2b8ad;
    display: inline-block;
    cursor: pointer;
    color: #757d6f;
    font-family: Arial;
    font-size: 20px;
    font-weight: bold;

    text-decoration: none;
    text-shadow: 0px 1px 0px #ced9bf;
    position: absolute;
    right: 30px;
    bottom: 60px;
  }
  .myButton1:hover {
    position:absolute;
    background: linear-gradient(to bottom, #ffa807 5%, #ff4f1a 100%);
    background-color: #9ba892;
  }

  .myButton2 {
    position:absolute;
    box-shadow: inset 0px 0px 14px -3px #f2fadc;
    background: linear-gradient(to bottom, #ffefb5 5%, #ffb702 100%);
    background-color: #dbe6c4;
    border-radius: 50px;
    border: 1px solid #b2b8ad;
    display: inline-block;
    cursor: pointer;
    color: #757d6f;
    font-family: Arial;
    font-size: 20px;
    font-weight: bold;

    text-decoration: none;
    text-shadow: 0px 1px 0px #ced9bf;
    position: absolute;
    right: 70px;
    bottom: 0px;
  }
  .myButton2:hover {
    background: linear-gradient(to bottom, #ffa807 5%, #ff4f1a 100%);
    background-color: #9ba892;
  }

  .myButton3 {
    position:absolute;
    box-shadow: inset 0px 0px 14px -3px #f2fadc;
    background: linear-gradient(to bottom, #ffefb5 5%, #ffb702 100%);
    background-color: #dbe6c4;
    border-radius: 50px;
    border: 1px solid #b2b8ad;
    display: inline-block;
    cursor: pointer;
    color: #757d6f;
    font-family: Arial;
    font-size: 20px;
    font-weight: bold;

    text-decoration: none;
    text-shadow: 0px 1px 0px #ced9bf;
    position: absolute;
    right: 30px;
    bottom: -60px;
  }
  .myButton3:hover {
    background: linear-gradient(to bottom, #ffa807 5%, #ff4f1a 100%);
    background-color: #9ba892;
  } */
</style>
