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
      <img
        class="rounded-circle"
        width="7%"
        alt=""
        src="./set-fracciones.jpg"
      />
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
      <div class="text-center">
        <img
          class="img-fluid"
          width="50%"
         src="./set-fracciones.jpg"
          alt=""
        />
      </div>
      <p class="text-justify">
        Determinar la cantidad de productos que se necesitan para una compra:
      </p>
      <p class="text-justify">
        Si un cliente quiere comprar una caja de productos que contiene 12
        unidades, pero sólo necesita la mitad, se puede utilizar la fracción 1/2
        para calcular la cantidad necesaria.
      </p>
      <p class="text-justify">
        El cálculo sería: 12 unidades x 1/2 = 6 unidades, lo que significa que
        el cliente necesita comprar 6 unidades.
      </p>
      <p class="text-justify" />
    </div>
  </div>
</div>

<style>
  .text-justify {
    text-align: justify;
  }
</style>
