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
      <img class="rounded-circle" width="7%" alt="" src="./problemasSuma/arroz.png" />
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
                src="./problemasSuma/arroz.png"
                alt=""
              />
            </div>
        <p class="text-justify">
            Tenemos 250gr de arroz y lo necesitamos sumar con 3/8 de kilogramo de arroz y 1/5 de kilogramo de arroz 
            A continuación se muestra cómo se sumarían las tres cantidades de arroz:
        </p>
        <p class="text-justify">   
            250 gramos de arroz = 250/1000 kilogramos = 1/4 de kilogramo
         </p>
         <p class="text-justify">   
            Entonces, si sumamos las tres cantidades de arroz usando fracciones:
    </p>   
    <p class="text-justify">
            (1/4)+(3/8)+(1/5)
    </p>
            <p class="text-justify">
            Calculando el Mínimo Común Múltilplo de los denominadores tenemos que és 40
           
            <p class="text-justify">
            (1/4) + (3/8) + (1/5) = (1*10 + 3*5 + 1*8) / 40 = 
            </p>
            <p class="text-justify">
            ( 10 + 15 + 8 )/40 = 33 / 40 kilogramos
            </p>
            <p class="text-justify">
            Entonces el resultado es 33/40 kilogramos o 825 gramos.
        </p>
      </div>
    </div>
  </div>
  
  <style>
    .text-justify {
      text-align: justify;
    }
  </style>
  