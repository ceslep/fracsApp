<script>
    let refresh;
    export let id;

  let collapseEl;
  const collapse = (el) => {
    // @ts-ignore
    //collapseEl => new bootstrap.Collapse(el);
    el.addEventListener("hidden.bs.collapse", (event) => {
      refresh = true;
    });

    el.addEventListener("shown.bs.collapse", (event) => {
      refresh = false;
    });
  };
</script>




<div class="accordion-item" use:collapse>
    <h2 class="accordion-header" id="flush-heading{id}">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapse{id}"
        aria-expanded="false"
        aria-controls="flush-collapse{id}"
      >
      <img src="./cokitos.png" alt="" width="8%">
        Juguemos con Cokitos Web
      </button>
    </h2>
    <div
      id="flush-collapse{id}"
      class="accordion-collapse collapse"
      aria-labelledby="flush-heading{id}"
      data-bs-parent="#accordion"
    >
      <div class="accordion-body">
        <iframe title="" id="playframe" width="100%" height="384" frameborder="0" scrolling="no" src="https://phet.colorado.edu/sims/html/fractions-intro/latest/fractions-intro_es.html"></iframe>
      </div>
    </div>
  </div>
  
  <style>
   
  </style>
  