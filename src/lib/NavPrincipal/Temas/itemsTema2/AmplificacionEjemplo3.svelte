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
      <i
        class="fa-solid fa-file-circle-question me-2 text-icon-color-1"
      />Ejemplo de Problemas 
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
          width="150"
          src="./ejemplos/amplificacionYsimplificacion/estudiantes.png"
          alt=""
        />
      </div>
      <p class="text-justify">
        Imagina que un maestro tiene un examen que cubre el 40% del contenido
        del curso y quiere que el próximo examen cubra el 60% del contenido. El
        maestro puede calcular la diferencia entre el 40% y el 60%
        convirtiéndolos en fracciones (40/100 y 60/100) y luego restarlas,
        obtendría (60/100) - (40/100) = 20/100, que representa el 20% del
        contenido del curso que se va a cubrir en el siguiente examen.
      </p>
    </div>
  </div>
</div>

<style>
  .text-justify {
    text-align: justify;
  }

  .text-icon-color-1 {
    color: rgb(255, 250, 111);
  }
</style>
