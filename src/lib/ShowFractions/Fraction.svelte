<script>
    export let fraction;
    let {n,d}=fraction;
</script>

<main class="position-relative">
<span class="math-grid">
    <span class="text-center">{n}</span>
    <span class="text-center">&#95;&#95;&#95;</span>
    <span class="text-center">{d}</span>
</span>
</main>

<style>
    .math-grid{
        position:absolute;
        width:25px;
        height:25px;
    }

    .math-grid:nth-child(0){
        top:0px;
    }

    .math-grid:nth-child(1){
        top:5px;
    }

    .math-grid:nth-child(2){
        top:10px;
    }
</style>