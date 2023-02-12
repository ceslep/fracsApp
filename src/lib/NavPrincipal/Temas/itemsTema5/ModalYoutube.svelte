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
      <header class="modal-header bg-info bg-gradient bg-opacity-50">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">
          <img src="./youtube.png" width="15%" alt="" />
          <span class="fs-6">Youtube.com</span>
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
        <iframe
          width="100%"
          height="40%"
          src="https://www.youtube.com/embed/WWPYX5K--wo"
          title="EJERCICIOS CON FRACCIONES  (Suma y resta de fracciones) Super facil  - Para principiantes"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
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
