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
          src="./cokitos.png"
          alt=""
        />
      </div>
      <p class="text-justify">
        Si un producto tiene un precio original de $100 y se está ofreciendo un
        50% de descuento, se puede utilizar la fracción 1/2 (que representa el
        50%) para calcular el precio final.
      </p>
      <p class="text-justify">
        El cálculo sería: $100 x 1/2 = $50, lo que significa que el precio final con el descuento sería $50.
      </p>
      <p class="text-justify">
       
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
