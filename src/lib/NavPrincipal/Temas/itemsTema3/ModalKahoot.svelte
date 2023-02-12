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
        <header class="modal-header bg-quizizz">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
              <img src="./khoot.png" alt="" class="img-fluid" width="13%" ><span
              class="fs-6">&nbsp;</span
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
          <div
            style="width:100%;display:flex;flex-direction:column;gap:8px;min-height:635px;"
          >
            <iframe
              src="https://kahoot.it/challenge/71087ed0-496c-4673-b30e-3392a944bc6b_1673923725224"
              title="EL JUEGO DE LAS FRACCIONES EQUIVALENTES - Kahoot"
              style="flex:1;"
              frameBorder="0"
              allowfullscreen
            />
          </div>
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
      .bg-quizizz{
        background:linear-gradient(#ff00d9,white);
      }
    </style>