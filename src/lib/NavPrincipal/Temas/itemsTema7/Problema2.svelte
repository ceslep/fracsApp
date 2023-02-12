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
          src="./problemasSuma/cultivo.png"
          alt=""
        />
      </div>
      <p class="text-justify">
        Un jardinero quiere saber cuántos metros cuadrados de césped debe
        comprar para cubrir un área de su jardín que mide 3/2 de hectárea.
      </p>
      <p class="text-justify">
        Si sabe que 1 hectárea es equivalente a 10,000 metros cuadrados y cada rollo de césped cubre 1/5 de un hectárea, ¿Cuántos rollos de césped necesita comprar?
      </p>
      <p class="text-justify">
        Para resolver este problema, primero se convierte 3/2 hectárea a metros cuadrados, 3/2 x 10,000 = 15,000 metros cuadrados. Luego se multiplica 1/5 x 15,000 = 3,000 metros cuadrados. Entonces el jardinero necesita comprar 3,000/10,000 = 3/10 de hectárea en rollos de césped para cubrir el área deseada.
      </p>
      <p class="text-justify">
      
      </p>
    </div>
  </div>
</div>

<style>
  .text-justify {
    text-align: justify;
  }
</style>
