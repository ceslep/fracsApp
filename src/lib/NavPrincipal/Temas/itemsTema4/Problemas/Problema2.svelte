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
      <img class="rounded-circle" width="7%" alt="" src="./problemasSuma/tienda.png" />
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
              src="./problemasSuma/tienda.png"
              alt=""
            />
          </div>
        <p class="text-justify">
            Un ejemplo de un problema cotidiano en una tienda de abarrotes donde se necesite sumar y restar fracciones es cuando un cliente compra varios productos que se venden en términos de fracciones de kilogramos. Por ejemplo, el cliente compra 1/4 de kilogramo de manzanas, 1/2 kilogramo de plátano y 3/4 de kilogramo de naranjas. Si desea saber cuánto peso total compró el cliente, debería sumar las fracciones de kilogramo: 1/4 + 1/2 + 3/4 = 2/4 + 3/4 = 5/4 de kilogramo.
            Es necesario hacer una simplificacion antes de sumar, en este caso 5/4 de kilogramo es lo mismo que 1.25 kilogramos
        </p>
      </div>
    </div>
  </div>
  
  <style>
    .text-justify {
      text-align: justify;
    }
  </style>
  