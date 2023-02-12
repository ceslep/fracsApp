<script>
  // @ts-nocheck

  import { afterUpdate, onMount } from "svelte";
  import Swal from "sweetalert2";
  import Fraccion from "../../../../Fractions/Fraccion.svelte";
  import Fraccion2 from "../../../../Fractions/Fraccion2.svelte";
  import Fraccion3 from "../../../../Fractions/Fraccion3.svelte";
  import Fraccion4 from "../../../../Fractions/Fraccion4.svelte";
  import Fraccion5 from "../../../../Fractions/Fraccion5.svelte";
  import ModalSumayRestaHeterogeneos from "../ModalSumayRestaHeterogeneos.svelte";
  

  export let refresh = false;
  export let tipoFilter="";



  let letras = ["a", "b", "c"];

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

  let mostrarModalSumayRestaHeterogeneos = false;

  let nums = "";
  let dens = "";

  const openModalSolucion = (n, d) => {
    nums = n;
    dens = d;
    mostrarModalSumayRestaHeterogeneos = true;
  };

  let questions = [
    {
      id: 1,
      tipo: "aritmetico",
      pregunta: `Calcula la Siguiente Suma:`,
      componenteFraccion: Fraccion2,
      fraccion: { n1: 1, d1: 2, n2: 3, d2: 4, s: "+" },
      verSolucion: true,
      onClick: openModalSolucion,
      numeradoresSolucion: "1,3",
      denominadoresSolucion: "2,4",
      opciones: [
        {
          orden: 1,
          texto: "",
          fraccion: { n: 5, d: 8 },
          correcta: false,
          retroalimentacion: "Lo siento. Debes volver a sumar las fracciones",
        },
        {
          orden: 2,
          texto: "",
          fraccion: { n: 10, d: 8 },
          correcta: false,
          retroalimentacion: "Lo siento. Debes volver a sumar las fracciones",
        },
        {
          orden: 3,
          texto: "",
          fraccion: { n: 5, d: 4 },
          correcta: true,
          retroalimentacion: "Correcto.",
        },
      ],
    },
    {
      id: 2,
      pregunta: `El resultado de la Suma es:`,
      tipo: "aritmetico",
      componenteFraccion: Fraccion3,
      verSolucion: true,
      onClick: openModalSolucion,
      numeradoresSolucion: "1,-1,3",
      denominadoresSolucion: "8,3,12",
      fraccion: { n1: 1, d1: 2, n2: 3, d2: 4, n3: 1, d3: 5, s1: "+", s2: "-" },
      verSolucion: true,
      onClick: openModalSolucion,
      numeradoresSolucion: "1,3,-1",
      denominadoresSolucion: "2,4,5",
      opciones: [
        {
          orden: 1,
          texto: "",
          fraccion: { n: 21, d: 20 },
          correcta: false,
          retroalimentacion: "Lo siento. Debes volver a sumar las fracciones",
        },
        {
          orden: 2,
          texto: "",
          fraccion: { n: 10, d: 8 },
          correcta: false,
          retroalimentacion: "Lo siento. Debes volver a sumar las fracciones",
        },
        {
          orden: 3,
          texto: "",
          fraccion: { n: 7, d: 4 },
          correcta: true,
          retroalimentacion: "Correcto.",
        },
      ],
    },
    {
      id: 3,
      pregunta: `Al sumar las siguientes fracciones se obtiene:`,
      tipo: "aritmetico",
      componenteFraccion: Fraccion4,
      verSolucion: true,
      onClick: openModalSolucion,
      numeradoresSolucion: "1,-3,-2,3",
      denominadoresSolucion: "3,4,5,15",
      fraccion: {
        n1: 1,
        d1: 3,
        n2: 3,
        d2: 4,
        n3: 2,
        d3: 5,
        n4: 3,
        d4: 15,
        s1: "-",
        s2: "-",
        s3: "+",
      },
      opciones: [
        {
          orden: 1,
          texto: "",
          fraccion: { n: -37, d: 60 },
          correcta: true,
          retroalimentacion: "Correcto",
        },
        {
          orden: 2,
          texto: "",
          fraccion: { n: 37, d: 60 },
          correcta: false,
          retroalimentacion: "Lo siento. Debes volver a sumar las fracciones",
        },
        {
          orden: 3,
          texto: "",
          fraccion: { n: 38, d: 60 },
          correcta: false,
          retroalimentacion: "Lo siento. Debes volver a sumar las fracciones",
        },
      ],
    },
    {
      id: 4,
      pregunta: `Un niño quiere comprar dulces en una tienda y tiene 7/8 de un dólar. El precio de un caramelo es de 1/4 de dólar y el precio de un chicle es de 3/8 de dólar. ¿Cuántos caramelos y chicles puede comprar el niño con su dinero?`,
      tipo:"problema",
      componenteFraccion: Fraccion,
      fraccion: { n: "", d: "" },
      opciones: [
        {
          orden: 1,
          texto: "",
          fraccion: { n: 5, d: 8 },
          correcta: true,
          retroalimentacion: "Correcto",
        },
        {
          orden: 2,
          texto: "",
          fraccion: { n: 7, d: 8 },
          correcta: false,
          retroalimentacion: "Lo siento. Debes volver a sumar las fracciones",
        },
        {
          orden: 3,
          texto: "",
          fraccion: { n: 9, d: 8 },
          correcta: false,
          retroalimentacion: "Lo siento. Debes volver a sumar las fracciones",
        },
      ],
    },
    {
      id: 5,
      pregunta: `Una fábrica produce tres productos diferentes, A, B y C. El producto A se fabrica con 1/3 de la capacidad total, el producto B se fabrica con 5/18 de la capacidad total y el producto C se fabrica con 2/9 de la capacidad total. Cuantas unidades fabrican en total?`,
      componenteFraccion: Fraccion,
      tipo:"problema",
      fraccion: { n: "", d: "" },
      opciones: [
        {
          orden: 1,
          texto: "",
          fraccion: { n: 5, d: 6 },
          correcta: true,
          retroalimentacion: "Correcto",
        },
        {
          orden: 2,
          texto: "",
          fraccion: { n: 7, d: 9 },
          correcta: false,
          retroalimentacion: "Lo siento. Debes volver a sumar las fracciones",
        },
        {
          orden: 3,
          texto: "",
          fraccion: { n: 5, d: 7 },
          correcta: false,
          retroalimentacion: "Lo siento. Debes volver a sumar las fracciones",
        },
      ],
    },
    {
      id: 6,
      pregunta: `Si un productor de café tiene 3/4 de una hectárea de tierra dedicada a café orgánico y decide destinar 1/6 de esa tierra para cultivar otro producto, ¿cuál sería la fracción de tierra que quedaría dedicada al café orgánico?`,
      tipo:"problema",
      componenteFraccion: Fraccion,
      fraccion: { n: "", d: "" },
      opciones: [
        {
          orden: 1,
          texto: "",
          fraccion: { n: 7, d: 12 },
          correcta: true,
          retroalimentacion: "Correcto",
        },
        {
          orden: 2,
          texto: "",
          fraccion: { n: 5, d: 12 },
          correcta: false,
          retroalimentacion: "Lo siento. Debes volver a sumar las fracciones",
        },
        {
          orden: 3,
          texto: "",
          fraccion: { n: 7, d: 13 },
          correcta: false,
          retroalimentacion: "Lo siento. Debes volver a sumar las fracciones",
        },
      ],
    },
    {
      id: 7,
      pregunta: `Cual sería el resultado de la siguiente suma de fracciones`,
      tipo:"aritmetico",
      componenteFraccion: Fraccion5,
      fraccion: {
        n1: 1,
        d1: 5,
        n2: 1,
        d2: 6,
        n3: 3,
        d3: 4,
        n4: 1,
        d4: 12,
        n5: 1,
        d5: 2,
        s1: "-",
        s2: "-",
        s3: "+",
        s4: "-",
      },
      verSolucion: true,
      onClick: openModalSolucion,
      numeradoresSolucion: "1,-1,-3,1,-1",
      denominadoresSolucion: "5,6,4,12,2",
      opciones: [
        {
          orden: 1,
          texto: "",
          fraccion: { n: 1, d: 5 },
          correcta: true,
          retroalimentacion: "Correcto",
        },
        {
          orden: 2,
          texto: "",
          fraccion: { n: 2, d: 7 },
          correcta: false,
          retroalimentacion: "Lo siento. Debes volver a sumar las fracciones",
        },
        {
          orden: 3,
          texto: "",
          fraccion: { n: 4, d: 15 },
          correcta: false,
          retroalimentacion: "Lo siento. Debes volver a sumar las fracciones",
        },
      ],
    },
    {
      id: 8,
      pregunta: `Calcula la Siguiente Suma:`,
      componenteFraccion: Fraccion2,
      verSolucion: true,
      onClick: openModalSolucion,
      numeradoresSolucion: "1,2",
      denominadoresSolucion: "3,4",
      tipo:"aritmetico",
      fraccion: { n1: 1, d1: 5, n2: 3, d2: 5, s: "-" },
      opciones: [
        {
          orden: 1,
          texto: "",
          fraccion: { n: -2, d: 3 },
          correcta: false,
          retroalimentacion: "Lo siento. Debes volver a sumar las fracciones",
        },
        {
          orden: 2,
          texto: "",
          fraccion: { n: 1, d: 5 },
          correcta: false,
          retroalimentacion: "Lo siento. Debes volver a sumar las fracciones",
        },
        {
          orden: 3,
          texto: "",
          fraccion: { n: -2, d: 5 },
          correcta: true,
          retroalimentacion: "Correcto.",
        },
      ],
    },
    {
      id: 9,
      pregunta: `El resultado de la Suma es:`,
      componenteFraccion: Fraccion3,
      verSolucion: true,
      onClick: openModalSolucion,
      numeradoresSolucion: "1,-1,3",
      denominadoresSolucion: "8,3,12",
      tipo:"aritmetico",
      fraccion: { n1: 1, d1: 8, n2: 1, d2: 3, n3: 3, d3: 12, s1: "-", s2: "+" },
      opciones: [
        {
          orden: 1,
          texto: "",
          fraccion: { n: 1, d: 12 },
          correcta: false,
          retroalimentacion: "Lo siento. Debes volver a sumar las fracciones",
        },
        {
          orden: 2,
          texto: "",
          fraccion: { n: -1, d: 24 },
          correcta: false,
          retroalimentacion: "Lo siento. Debes volver a sumar las fracciones",
        },
        {
          orden: 3,
          texto: "",
          fraccion: { n: 1, d: 24 },
          correcta: true,
          retroalimentacion: "Correcto.",
        },
      ],
    },
    {
      id: 10,
      pregunta: `Sumar estas tres fracciones dá como resultado:`,
      tipo:"aritmetico",
      componenteFraccion: Fraccion3,
      verSolucion: true,
      onClick: openModalSolucion,
      numeradoresSolucion: "1,1,-7",
      denominadoresSolucion: "2,5,15",
      fraccion: { n1: 1, d1: 2, n2: 1, d2: 5, n3: 7, d3: 15, s1: "+", s2: "-" },
      opciones: [
        {
          orden: 1,
          texto: "",
          fraccion: { n: 1, d: 30 },
          correcta: false,
          retroalimentacion: "Lo siento. Debes volver a sumar las fracciones",
        },
        {
          orden: 2,
          texto: "",
          fraccion: { n: -7, d: 30 },
          correcta: false,
          retroalimentacion: "Lo siento. Debes volver a sumar las fracciones",
        },
        {
          orden: 3,
          texto: "",
          fraccion: { n: 7, d: 30 },
          correcta: true,
          retroalimentacion: "Correcto.",
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

  afterUpdate(() => {
    questions = [...questions.sort(() => 0.5 - Math.random())];
    console.log(questions);
    document.querySelectorAll(".form-check-input").forEach((q) => {
      // @ts-ignore
      q.checked = false;
    });
  });

  let Questions;
  $:if(tipoFilter!="")
    Questions=[...questions.filter(q=>q.tipo===tipoFilter)];
    else 
    Questions=[...questions];
</script>

<ModalSumayRestaHeterogeneos
  show={mostrarModalSumayRestaHeterogeneos}
  on:close={() => {
    mostrarModalSumayRestaHeterogeneos = false;
  }}
  {nums}
  {dens}
  calcular={true}
/>

<main>
  {#if refresh || !refresh}
    {#each Questions.sort(() => 0.5 - Math.random()) as question, index}
      <form>
        <h3>
          <p class="text-justify fs-6">{index + 1}. {question.pregunta}</p>
        </h3>
        <svelte:component
          this={question.componenteFraccion}
          {...question.fraccion}
        />
        {#each question.opciones.sort(() => 0.5 - Math.random()) as opcion, index}
          <div class="grid">
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
                <span class="fw-bold">{letras[index]}.</span>
                {opcion.texto}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Fraccion
                  {...opcion.fraccion}
                />
                <br />
              </label>
            </div>
          </div>
        {/each}
        {#if "verSolucion" in question}
          <button
            class="btn btn-outline-primary w-100"
            on:click={() => {
              openModalSolucion(
                question.numeradoresSolucion,
                question.denominadoresSolucion
              );
            }}>Ver solución paso a paso</button
          >
        {/if}
      </form>
      <br />
    {/each}
  {/if}
</main>

<style>
  .grid {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
  }

  .text-justify {
    text-align: justify;
  }
</style>
