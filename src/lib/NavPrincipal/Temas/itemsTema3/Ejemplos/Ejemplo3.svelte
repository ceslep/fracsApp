<script>
	import { afterUpdate } from 'svelte';
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
      <p class="text-justify">
        Un ejemplo de cómo se utilizan las fracciones equivalentes en la vida
        cotidiana podría ser al cocinar. 
      </p>
      <p class="text-justify">
        Supongamos que estás preparando una
        receta que requiere 1/2 taza de harina, pero solo tienes una cucharada
        medidora a mano. 
    </p>
    <p class="text-justify">
        Sabes que 1 cucharada es equivalente a 1/16 taza, así
        que necesitas ajustar la cantidad de harina que agregas a la receta.
    </p>  
    <p class="text-justify">
        Para hacerlo, puedes convertir 1/2 taza en fracciones equivalentes
        utilizando 1/16 como unidad de medida:
     </p>
     <p class="text-justify">
        1/2 = (1*8)/(2*8) = 8/16 
    </p>      
        <p class="text-justify">   
        Entonces,
        8 cucharadas son equivalentes a 1/2 taza, así que agregas 8 cucharadas
        de harina a tu receta en lugar de medir 1/2 taza. 
        </p> 
        <p class="text-justify">  
        De esta forma, puedes
        cocinar la receta y obtener los mismo resultados ya que las fracciones
        son equivalentes.
      
      </p>
    </div>
  </div>
</div>

<style>
  .text-justify {
    text-align: justify;
  }
</style>
