<script>
  import { fade, fly } from "svelte/transition";
  import AcercaDe from "./lib/Ejercicios/AcercaDe/AcercaDe.svelte";
  import ModalAcercade from "./lib/Ejercicios/AcercaDe/ModalAcercade.svelte";
  import ModalCreditos from "./lib/Ejercicios/AcercaDe/ModalCreditos.svelte";

  import MenuButtons from "./lib/MenuFixed/MenuButtons.svelte";
  import Introduccion from "./lib/NavPrincipal/Introduccion.svelte";

  import NavPrincipal from "./lib/NavPrincipal/NavPrincipal.svelte";
  import PantallaInicio from "./lib/NavPrincipal/PantallaInicio.svelte";
  import Presentacion from "./lib/NavPrincipal/Presentacion.svelte";
  import ModalTema1 from "./lib/NavPrincipal/Temas/itemsTema1/ModalTema1.svelte";
  import ModalTema2 from "./lib/NavPrincipal/Temas/itemsTema2/ModalTema2.svelte";
  import ModalTema3 from "./lib/NavPrincipal/Temas/itemsTema3/ModalTema3.svelte";
  import ModalTema4 from "./lib/NavPrincipal/Temas/itemsTema4/ModalTema4.svelte";
  import ModalTema5 from "./lib/NavPrincipal/Temas/itemsTema5/ModalTema5.svelte";
  import ModalTema6 from "./lib/NavPrincipal/Temas/itemsTema6/ModalTema6.svelte";
  import ModalTema7 from "./lib/NavPrincipal/Temas/itemsTema7/ModalTema7.svelte";
  import ModalTema8 from "./lib/NavPrincipal/Temas/itemsTema8/ModalTema8.svelte";
  import ModalTema9 from "./lib/NavPrincipal/Temas/itemsTema9/ModalTema9.svelte";
  import ModalTema10 from "./lib/NavPrincipal/Temas/itemsTema10/ModalTema10.svelte";
  import Objetivos from "./lib/NavPrincipal/Objetivos.svelte";

  let tema;
  let siguiente;
  let anterior;
  let temaTitle = "";
  let elTema1;
  let elTema2;
  let elTema3;
  let elTema4;
  let elTema5;
  let elTema6;
  let elTema7;
  let elTema8;
  let elTema9;
  let elTema10;

  const selectTema = (data) => {
    tema = undefined;
    tema = data.detail.component;
    temaTitle = data.detail.Tema;
    console.log(temaTitle);
    show = "";
    showAcercade = false;
  };

  let title;
  let show = "";
  let expanded = true;
  let showMenuFixed = false;
  let pantallaInicio = true;
  let pantallaInicio2 = false;
  let pantallaInicio3 = false;
  let INICIO = false;
  let showAcercade = false;
  let showCreditos = false;
  let objetivos=false;

  const iniciar = () => {
    pantallaInicio = false;
    pantallaInicio2 = true;
    showAcercade = false;
    objetivos=false;
  };

  const iniciar2 = () => {
    pantallaInicio2 = false;
    pantallaInicio3 = true;
    showAcercade = false;
  };

  const iniciar3 = () => {
    pantallaInicio = false;
    pantallaInicio2 = false;
    pantallaInicio3 = false;
    INICIO = false;
    objetivos=true;
    showAcercade = false;
  };

  const iniciar4 = () => {
    pantallaInicio = false;
    pantallaInicio2 = false;
    pantallaInicio3 = false;
    INICIO = true;
    showAcercade = false;
    objetivos=false;
  };
</script>

{#if pantallaInicio}
  <PantallaInicio
    on:close={iniciar}
    on:inicio={() => {
      pantallaInicio = false;
      pantallaInicio2 = false;
      pantallaInicio3 = false;
      INICIO = true;
    }}
  />
{:else if pantallaInicio2}
  <Presentacion
    on:close={iniciar2}
    on:anterior={() => {
      pantallaInicio = true;
      pantallaInicio2 = false;
    }}
  />
{:else if pantallaInicio3}
  <Introduccion
    on:close={iniciar3}
    on:anterior={() => {
      pantallaInicio = false;
      pantallaInicio2 = true;
      pantallaInicio3 = false;
      INICIO = false;
    }}
  />
  {:else if objetivos}
  <Objetivos
  on:close={iniciar4}
  on:anterior={()=>{
    pantallaInicio2 = false;
    pantallaInicio3 = true;
    showAcercade = false;
    objetivos=false;
    INICIO=false;
  }}/>
{/if}
{#if INICIO}
  <main class="">
    <NavPrincipal
      on:Tema={selectTema}
      {title}
      {show}
      {expanded}
      on:showMenuFixed={() => {
        showMenuFixed = true;
      }}
      on:inicio={() => {
        INICIO = false;
        pantallaInicio = true;
        pantallaInicio2 = false;
      }}
      on:acerca={() => {
        tema = undefined;
        showAcercade = true;
      }}
      on:creditos={() => (showCreditos = true)}
    />
    {#if tema}
      <!--  <main class="pt-5 mx-2 mt-1" transition:fly={{ y: 200, duration: 2000 }}>
        <svelte:component
          this={tema}
          on:caption={(e) => {
            title = e.detail.title;
          }}
        />
      </main> -->
    {/if}
    <!--  <FracMathJax {...{a:"5+1",b:"6"}}/>
  <FracMathJax2 {...{n1:"8",n2:"9",d1:"9",d2:"10",s1:"+"}}/>
  <FracMathJax3 {...{n1:"8",n2:"9",n3:"10",d1:"9",d2:"10",d3:"11",s1:"+",s2:"+"}}/> -->
  </main>
{/if}

<ModalAcercade show={showAcercade} on:close={() => (showAcercade = false)} />

<ModalCreditos show={showCreditos} on:close={() => (showCreditos = false)} />

<ModalTema1
  bind:elTema={elTema1}
  show={elTema1 == temaTitle}
  on:close={() => {
    temaTitle = "-1";
  }}
/>

<ModalTema2
  bind:elTema={elTema2}
  show={elTema2 == temaTitle}
  on:close={() => {
    temaTitle = "-1";
  }}
/>

<ModalTema3
  bind:elTema={elTema3}
  show={elTema3 == temaTitle}
  on:close={() => {
    temaTitle = "-1";
  }}
/>

<ModalTema4
  bind:elTema={elTema4}
  show={elTema4 == temaTitle}
  on:close={() => {
    temaTitle = "-1";
  }}
  on:cerrar={() => {
    temaTitle = "-1";
  }}
/>

<ModalTema5
  bind:elTema={elTema5}
  show={elTema5 == temaTitle}
  on:close={() => {
    temaTitle = "-1";
  }}
/>

<ModalTema6
  bind:elTema={elTema6}
  show={elTema6 == temaTitle}
  on:close={() => {
    temaTitle = "-1";
  }}
/>

<ModalTema7
  bind:elTema={elTema7}
  show={elTema7 == temaTitle}
  on:close={() => {
    temaTitle = "-1";
  }}
/>

<ModalTema8
  bind:elTema={elTema8}
  show={elTema8 == temaTitle}
  on:close={() => {
    temaTitle = "-1";
  }}
/>

<ModalTema9
  bind:elTema={elTema9}
  show={elTema9 == temaTitle}
  on:close={() => {
    temaTitle = "-1";
  }}
/>

<ModalTema10
  bind:elTema={elTema10}
  show={elTema10 == temaTitle}
  on:close={() => {
    temaTitle = "-1";
  }}
/>

<style>
</style>
