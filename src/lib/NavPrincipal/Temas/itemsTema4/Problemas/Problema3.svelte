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
    <img class="rounded-circle" width="7%" alt="" src="./problemasSuma/fabrica.png" />
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
              src="./problemasSuma/fabrica.png"
              alt=""
            />
          </div>
      <p class="text-justify">
        Un ejemplo de un problema cotidiano en una fábrica de calzado donde se
        necesite restar fracciones es durante el proceso de producción, donde se
        revisa el inventario de materiales y se detecta que hay un exceso en la
        cantidad de cierto material. Por ejemplo, si se habían cortado 2 y 1/4
        metros cuadrados de cuero para un modelo de zapato específico, pero
        durante el proceso de ensamblaje se descubre que solo se necesitan 2
        metros cuadrados, es necesario restar esa fracción para determinar la
        cantidad exacta de cuero que se va a utilizar. En este caso, se restaría
        1/4 de metro cuadrado de 2 y 1/4 metros cuadrados: 2 y 1/4 - 1/4 = 2
        metros cuadrados.
      </p>
    </div>
  </div>
</div>

<style>
  .text-justify {
    text-align: justify;
  }
</style>
