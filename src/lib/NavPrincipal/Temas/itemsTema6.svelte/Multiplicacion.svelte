<script>
    import { afterUpdate, createEventDispatcher } from "svelte";
  
    const dispatch = createEventDispatcher();
  
    afterUpdate(() => {
      dispatch("caption", { title });
    });
  
    let title = "Multiplicación de Fracciones";
  </script>
  
  <main class="pt-3 m-2">
    <div class="d-flex justify-content-center align-items-center">
      <img class="img-fluid" src="./multiplicacion.png" alt="" />
    </div>
  
    <p class="text-justify">
        El producto de dos fracciones es otra fracción cuyo numerador es el producto de los numeradores y cuyo denominador es el producto de los denominadores.

        De esta manera, la multiplicación de dos fracciones es otra que tiene:
        
        Por numerador la multiplicación de los numeradores.
        Por denominador la multiplicación de los denominadores.
        Importante, siempre que se pueda debemos simplificar las fracciones. No nos olvidemos de ese detalle.
       
    </p>
    <iframe width="100%" height="60%" src="https://www.youtube.com/embed/Q5yG2kYQG3U" title="Cómo multiplicar fraccionarios | Fraccionarios" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="d-grid gap-1">
      <button class="btn btn-success bg-gradient bg-opacity-50 rounded-0"><i class="fa-solid fa-paper-plane"></i> Ejercicios</button>
      <button class="btn btn-info bg-gradient bg-opacity-50 rounded-0"><i class="fa-solid fa-question"></i> Cuestionarios</button>
  
    </div>
  
  </main>
  
  
  <style>
    .text-justify {
      text-align: justify;
    }
  
   
  </style>
  