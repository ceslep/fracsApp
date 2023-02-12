<script>
  import Fraccion from "../../../../Fractions/Fraccion.svelte";
import Fraccion3 from "../../../../Fractions/Fraccion3.svelte";

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
          src="./problemasSuma/deportista.png"
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
            src="./problemasSuma/deportista.png"
            alt=""
          />
        </div>
        <p class="text-justify">
            Un deportista decide entrenar recorriendo cierta pista de atletismo.  El primer día recorre 3/4 de la pista, el segundo 4/5 y el tercer día 7/8 .  ¿Cuántas vueltas le dio a la pista en total?
         </p>
         <p class="text-justify">
            Para determinar cuántas vueltas dio en total, debemos sumar los recorridos hechos cada día.  En esta ocasión, en lugar de usar la fórmula de la suma, transformaremos las fracciones a unas equivalentes con denominador igual al mínimo común múltiplo de los denominadores, :
         </p>
         <p class="text-justify">     
            Así, obtenemos una suma de fracciones homogéneas que es mucho más fácil de hacer.  Ahora solo se deben sumar los numeradores:
            
        </p>
        <div class="row">
            <div class="col-3">
                <Fraccion3 {...{n1:3,d1:4,n2:4,d2:5,n3:7,d3:8,s1:"+",s2:"+"}}/>
            </div>
            <div class="col-1">=</div>
            <div class="col-3">
                <Fraccion3 {...{n1:30,d1:40,n2:32,d2:40,n3:35,d3:40,s1:"+",s2:"+"}}/>
            </div>
            <div class="col-1">=</div>
            <div class="col-3">
                <Fraccion {...{n:97,d:40}}/>
            </div>
        </div>
        
      </div>
    </div>
  </div>
  
  <style>
    .text-justify {
      text-align: justify;
    }
  </style>
  