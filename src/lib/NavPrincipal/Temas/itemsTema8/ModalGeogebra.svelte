<script>
  
  import {
    onDestroy,
    createEventDispatcher,
    onMount,
    afterUpdate,
  } from "svelte";
  import "animate.css";

  const dispatch = createEventDispatcher();

  let Modal;
  const modal = (el) => {
    // @ts-ignore
    Modal = new bootstrap.Modal(el);
  };

  afterUpdate(() => {});

  onDestroy(() => {
    Modal.dispose;
    Modal = undefined;
  });
  export let show = false;

  $: if (Modal) {
    if (show) Modal.show();
    else Modal.hide();
  }

  // array para almacenar las fracciones
</script>

<article
  use:modal
  class="modal"
  id="modalFE"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div
    class="modal-dialog 
             modal-dialog-centered
             modal-fullscreen
             animate__animated animate__fadeInRight
             animate__animated animate__bounceOutDown
            "
  >
    <div class="modal-content">
      <header class="modal-header bg-warning bg-gradient bg-opacity-25">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">
          <img src="./geogebra.png" alt="" width="10%" />
          <span class="fs-6">Secuencia de división por Geogebra</span>
        </h1>
        <button
          type="button"
          class="btn"
          data-bs-dismiss="modal"
          aria-label="Close"
          on:click={() => {
            dispatch("close");
          }}
        >
          <i class="fa fa-arrow-left" aria-hidden="true" />
        </button>
      </header>

      <main class="modal-body">
        {#if show}
          <iframe
          title=""
          width="100%"
          height="100%"
            src="https://www.geogebra.org/classic/cypu235n"
            frameborder="0"
          />
        {/if}
      </main>
      <footer class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary rounded-0"
          data-bs-dismiss="modal"
          on:click={() => {
            dispatch("close");
          }}>Cerrar</button
        >
      </footer>
    </div>
  </div>
</article>

<style>
</style>
