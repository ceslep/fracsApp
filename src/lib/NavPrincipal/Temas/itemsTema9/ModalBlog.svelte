<script>
  import {
    onDestroy,
    createEventDispatcher,
    onMount,
    afterUpdate,
  } from "svelte";
  import "animate.css";

  import Tema7 from "../Tema7.svelte";

  export let elTema = "Problemas con multiplicación de Fracciones";

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
      <header class="modal-header bg-warning bg-gradient bg-opacity-75">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">
          <img src="./ccfglobal.png" alt="" width="10%" /><span class="fs-6"
            >CcfGlobal.com</span
          >
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
        <div class="d-none">{elTema}</div>
        {#if show}
          <iframe
            width="100%"
            height="100%"
            src="https://edu.gcfglobal.org/es/fraccionarios/problemas-con-division-de-fracciones/1/"
            title="DIVISIÓN DE FRACCIONES Super fácil - Para principiantes"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
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
