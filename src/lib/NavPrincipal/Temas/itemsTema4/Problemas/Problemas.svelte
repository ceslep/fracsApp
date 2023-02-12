<script>
  import Problema1 from "./Problema1.svelte";
  import Problema10 from "./Problema10.svelte";
  import Problema2 from "./Problema2.svelte";
  import Problema3 from "./Problema3.svelte";
  import Problema4 from "./Problema4.svelte";
  import Problema5 from "./Problema5.svelte";
  import Problema6 from "./Problema6.svelte";
  import Problema7 from "./Problema7.svelte";
  import Problema8 from "./Problema8.svelte";
  import Problema9 from "./Problema9.svelte";
</script>

<div class="accordion" id="accordionExample">
  {#each [Problema1, Problema2, Problema3, Problema4, Problema5, Problema6, Problema7, Problema8,Problema9,Problema10] as problema, index}
    <svelte:component this={problema} no={index + 1} />
  {/each}
</div>
