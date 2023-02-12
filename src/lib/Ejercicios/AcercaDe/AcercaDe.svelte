<script>
  import { afterUpdate, createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  afterUpdate(() => {
    dispatch("caption", { title });
  });

  let title = "Acerca de...";
</script>

<main class="pt-5 mt-2 container">
  <div class="m-2 d-flex justify-content-center align-items-center">
    <img class="img-fluid" src="./udes.png" alt="" />
  </div>

  <p class="text-justify m-2 fs-4">
    Aplicación para el mejoramiento de las competencias en Números Fraccionarios
    para grado séptimo
  </p>

  <p class="m-2">Realizado por:<br /></p>
  <div class="text-center fs-4">
    <ul class="list-group">
      <li class="list-group-item text-success fw-bold">Jon James Vasco Rodriguez</li>
      <li class="list-group-item text-success fw-bold">Lina María Ruiz Giraldo</li>
      <li class="list-group-item text-success fw-bold">César Leandro Patiño Vélez</li>
    </ul>
    &#169; {(new Date()).getFullYear()}
  </div>
</main>

<style>
  .text-justify {
    text-align: justify;
  }
</style>
