<script>
	import Educaplay from './../itemsTema1/Educaplay.svelte';
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
        />Juguemos con Educaplay
      </button>
    </h2>
    <div
      id="collapse{no}"
      class="accordion-collapse collapse"
      aria-labelledby="heading{no}"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        <iframe title="" width="100%" height="690" frameborder="0" src="https://es.educaplay.com/juego/5543723-simplificacion_de_fracciones.html"></iframe>
      </div>
    </div>
  </div>
  
  <style>
    
    .text-icon-color-1 {
      color: rgb(255, 250, 111);
    }
  </style>
  


