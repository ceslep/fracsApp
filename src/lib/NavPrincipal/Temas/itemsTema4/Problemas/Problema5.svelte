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
      <img class="rounded-circle" width="7%" alt="" src="./problemasSuma/cultivo.png" />
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
                src="./problemasSuma/cultivo.png"
                alt=""
              />
            </div>
        <p class="text-justify">
            Un agricultor posee un terreno en el cual desea hacer lo siguiente: 1/8 del terreno para construir la casa, 3/5 para un estanque y 1/4 para el granero o bodega, cual es el area que le queda para realizar cultivos?
        </p>
        <p class="text-justify">
            Para calcular el área que quedaría para cultivos, primero debemos calcular cuánto del terreno estaría ocupado por la casa, el estanque y el granero o bodega.
        </p>
        <p class="text-justify">
            
            
            Entonces si sumamos las tres fracciones obtenemos:
        </p>
        <p class="text-justify">
            (1/8) + (3/5) + (1/4) = (5 + 12 + 8) / 40 = 25/40
        </p>
        <p class="text-justify">
            Entonces ese 25/40 del terreno total estaría ocupado por la casa, el estanque y el granero o bodega. Por lo tanto, el área restante sería:
        </p>
            
            <p class="text-justify">   
            1 - 25/40 = 15/40 del terreno total.
            </p>
            <p class="text-justify">
            Entonces el área restante para cultivos es el 15/40 del terreno total.  
        </p>
      </div>
    </div>
  </div>
  
  <style>
    .text-justify {
      text-align: justify;
    }
  </style>
  