<script>
  import { afterUpdate, createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  afterUpdate(() => {
    dispatch("caption", { title });
  });

  let title = "Simplificacion de Fracciones";
</script>

<main>
  <div class="d-flex justify-content-center align-items-center">
    <img class="img-fluid" src="./simplificacion.png" alt="" />
  </div>

  <p class="text-justify">
    Siempre que en una fracción, dividas numerador y denominador por el mismo
    número, obtendrás una fracción equivalente. A este proceso se le conoce como
    simplificación. Fíjate que para poder dividir el numerador y el denominador
    por el mismo número, este tiene que ser divisor común de los dos.
  </p>
  <iframe width="100%" height="60%" src="https://www.youtube.com/embed/3HNyVbBNGQQ" title="SIMPLIFICAR FRACCIONES super fácil | para principiantes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <div class="d-grid gap-1">
    <button class="btn btn-success bg-gradient bg-opacity-50 rounded-0"><i class="fa-solid fa-paper-plane"></i> Ejercicios</button>
    <button class="btn btn-info bg-gradient bg-opacity-50 rounded-0"><i class="fa-solid fa-question"></i> Cuestionarios</button>

  </div>

</main>


<style>
  .text-justify {
    text-align: justify;
  }

 
</style>
