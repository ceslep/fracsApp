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

  const login = async (form) => {
    dispatch("login",{login:true});
    if (!form.target.checkValidity()) {
      form.stopPropagation();
      return;
    }

    form.target.classList.add("was-validated");

    console.log(form.target);
    let data = Object.fromEntries(new FormData(form.target));
    console.log(data);
  };
</script>

<article
  use:modal
  class="modal"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div
    class="modal-dialog 
     modal-dialog-centered
    animate__animated animate__flipInX
    "
  >
    <div class="modal-content">
      <header class="modal-header bg-warning bg-gradient bg-opacity-25">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">
          <i class="fa-solid fa-user-graduate"></i>Iniciar Sesión
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          on:click={() => {
            dispatch("close");
          }}
        />
      </header>
      <form
        class="needs-validation"
        on:submit|preventDefault={(frm) => {
          login(frm);
        }}
      >
        <main class="modal-body">
          <div class="row">
            <div class="col-sm-12">
              <div class="form-group">
                <label for="usuario" class="form-label">Estudiante</label>
                <input
                  type="text"
                  class="form-control"
                  id="usuario"
                  name="usuario"
                  placeholder="Escribe aquí tu nombre"
                  value="Estudiante"
                  required
                />
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
            </div>
          </div>
          <div class="row">
            
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
          <button type="submit" class="btn btn-success bg-gradient bg-opacity-25 rounded-0">Ingresar</button
          >
        </footer>
      </form>
    </div>
  </div>
</article>
