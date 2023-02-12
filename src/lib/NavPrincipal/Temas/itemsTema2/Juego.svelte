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
        />Juguemos con Scratch
      </button>
    </h2>
    <div
      id="collapse{no}"
      class="accordion-collapse collapse"
      aria-labelledby="heading{no}"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        <iframe title="" src="https://scratch.mit.edu/projects/208591861/embed"  width="100%" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
      </div>
    </div>
  </div>
  
  <style>
    
    .text-icon-color-1 {
      color: rgb(255, 250, 111);
    }
  </style>
  


