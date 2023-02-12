<script>
  import { afterUpdate, onMount } from "svelte";
  import Swal from "sweetalert2";

  export let refresh;

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  let questions = [
    {
      id: 1,
      pregunta: "Que es el numerador",
      opciones: [
        {
          orden: 1,
          texto: "Es una fracción",
          correcta: false,
          retroalimentacion:
            "Lo siento. Debes volver a leer el texto sobre fracciones",
        },
        {
          orden: 2,
          texto: "Es un decimal",
          correcta: false,
          retroalimentacion:
            "Lo siento. Debes volver a leer el texto sobre fracciones",
        },
        {
          orden: 3,
          texto: "Es un entero",
          correcta: true,
          retroalimentacion:
            "Correcto. El númerador pertenece al conjunto de los numeros enteros",
        },
      ],
    },
    {
      id: 2,
      pregunta: "Que es el denominador",
      opciones: [
        {
          orden: 1,
          texto: "Es una fracción",
          correcta: false,
          retroalimentacion:
            "Lo siento. Debes volver a leer el texto sobre fracciones",
        },
        {
          orden: 2,
          texto: "Es un decimal",
          correcta: false,
          retroalimentacion:
            "Lo siento. Debes volver a leer el texto sobre fracciones",
        },
        {
          orden: 3,
          texto: "Es un entero",
          correcta: true,
          retroalimentacion:
            "Correcto el numerador pertenece al conjunto de los numeros reales",
        },
      ],
    },
    {
      id: 3,
      pregunta: "Que puedes representar con una fracción",
      opciones: [
        {
          orden: 1,
          texto: "Un todo",
          correcta: false,
          retroalimentacion:
            "Lo siento. Debes volver a leer el texto sobre fracciones",
        },
        {
          orden: 2,
          texto: "Una parte de algo",
          correcta: false,
          retroalimentacion:
            "Lo siento. Debes volver a leer el texto sobre fracciones",
        },
        {
          orden: 3,
          texto: "La parte decimal de un número",
          correcta: true,
          retroalimentacion:
            "Correcto. El númerador pertenece al conjunto de los numeros enteros",
        },
      ],
    },
    {
      id: 4,
      pregunta: "Una fracción es una parte de un todo",
      opciones: [
        {
          orden: 1,
          texto: "Un todo",
          correcta: false,
          retroalimentacion:
            "Lo siento. Debes volver a leer el texto sobre fracciones",
        },
        {
          orden: 2,
          texto: "Una parte de algo",
          correcta: false,
          retroalimentacion:
            "Lo siento. Debes volver a leer el texto sobre fracciones",
        },
        {
          orden: 3,
          texto: "La parte decimal de un número",
          correcta: true,
          retroalimentacion:
            "Correcto. El númerador pertenece al conjunto de los numeros enteros",

        },
      ],
    },
  ];

  const validar = (opcion, e) => {
    if (!opcion.correcta)
      Toast.fire({
        icon: "error",
        title: opcion.retroalimentacion,
      });
    else
      Toast.fire({
        icon: "success",
        title: opcion.retroalimentacion,
      });
  };

 afterUpdate(()=>{
    questions=[...questions.sort(()=>.5-Math.random())];
    console.log(questions);
    document.querySelectorAll(".form-check-input").forEach(q=>{
        // @ts-ignore
        q.checked=false;
    });
 })
  

</script>

<main>
    {#if refresh || !refresh}
    
      {#each questions.sort( () => .5 - Math.random() ) as question, index}
    <form>
      <h3>{index + 1}. {question.pregunta}</h3>
    
      {#each question.opciones.sort( () => .5 - Math.random() ) as opcion, index}
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios{index}"
            value="option1"
            on:click={(e) => {
              validar(opcion, e);
            }}
          />
          <label class="form-check-label" for="exampleRadios1">
            {opcion.texto}
          </label>
        </div>
      {/each}
    </form>
  {/each}
  {/if}
</main>

