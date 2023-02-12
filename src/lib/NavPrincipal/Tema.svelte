<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let index;
  export let tema;
 
</script>

<li>
  <a
    class="dropdown-item show"
    data-bs-toggle="collapse"
    data-bs-target=".navbar-collapse.show"
    href="#!"
    on:click={() => {
      dispatch("Tema", tema);
    }}>{index+1}. 📗{tema.Tema}</a
  >
</li>
