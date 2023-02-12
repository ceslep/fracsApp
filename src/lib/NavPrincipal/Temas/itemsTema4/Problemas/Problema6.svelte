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
        src="./problemasSuma/tiendaRopa.png"
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
          width="20%"
          src="./problemasSuma/tiendaRopa.png"
          alt=""
        />
      </div>
      <p class="text-justify">
        Una tienda de ropa dan un descuento 1/5 y otro de 1/10 por promoción del
        día Que descuento total tiene el articulo en venta. se sumarían las
        fracciones para obtener un descuento total del 83% (1/5 + 1/10 = 3/10 =
        0.3 = 30%).
      </p>
    </div>
  </div>
</div>

<style>
  .text-justify {
    text-align: justify;
  }
</style>
