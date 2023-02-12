<script>
  export let no;
</script>

<div class="accordion-item">
  <h2 class="accordion-header" id="heading{no}">
    <button
      class="accordion-button"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapse{no}"
      aria-expanded="true"
      aria-controls="collapse{no}"
    >
      Ejemplo de problema {no}
    </button>
  </h2>
  <div
    id="collapse{no}"
    class="accordion-collapse collapse"
    aria-labelledby="heading{no}"
    data-bs-parent="#accordionExample"
  >
    <div class="accordion-body">
      <p class="text-justify">
        Una forma de comparar fracciones equivalentes es convertirlas a una
        fracción común.
       </p>
       <p class="text-justify">
        Esto se hace multiplicando ambos términos de cada
        fracción por el mismo número, de modo que el denominador de todas las
        fracciones sea el mismo.
    </p> 
    <p class="text-justify">
        Por ejemplo, para comparar 2/5, 2/7 y 2/10,
        podemos convertirlas a una fracción común de 70: 
    </p>
    <p class="text-justify fw-bold">
        2/5 = (2*7)/(5*7) =
        14/35 
    </p>
        <p class="text-justify fw-bold">    
        2/7 = (2*5)/(7*5) = 10/35
     </p>
     <p class="text-justify fw-bold">
     2/10 = (2*7)/(10*7) = 14/70 
     </p>
     <p class="text-justify">
     Ahora vemos
        las fracciones son equivalentes y puedes compararlas.
      </p>
    </div>
  </div>
</div>

<style>
  .text-justify {
    text-align: justify;
  }
</style>
