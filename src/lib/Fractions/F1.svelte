<script>
    export let n="";
    export let d="";
    export let size=3;

    const repeatDash = n => "─".repeat(n);

</script>
<div class="grid fs-7">
    <span class="text-center fw-bold">{n}</span>
    <span class="text-center tl">{repeatDash(size)}</span>
    <span class="text-center fw-bold">{d}</span>
</div>

<style>
.grid{
    width:"25px";
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.7fr 0.5fr 0.7fr;
    gap:2px;
}

.tl{
    line-height: 0%;
}

.fs-7{
    font-size: 1rem;
}

</style>


