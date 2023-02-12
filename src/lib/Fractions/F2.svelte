<script>
  export let n1 = "";
  export let d1 = "";
  export let n2 = "";
  export let d2 = "";
  export let s1 = "+";
</script>

<div class="d-flex justify-content-center align-items-center">
  <div class="grid">
    <div class="grid-frac">
      <span class="text-center fw-bold">{n1}</span>
      <span class="text-center tl">───</span>
      <span class="text-center fw-bold">{d1}</span>
    </div>
    <div class="grid-frac">
      <span class="text-center fw-bold tl2">
        <div class="position-relative">
          <span class="position-absolute mt-25">{s1}</span>
        </div>
      </span>
    </div>
    <div class="grid-frac">
      <span class="text-center fw-bold">{n2}</span>
      <span class="text-center tl">───</span>
      <span class="text-center fw-bold">{d2}</span>
    </div>
  </div>
</div>

<style>
  .grid {
    width: 140px;
    display: grid;
    grid-template-columns: 1fr 0.5fr 1fr;
    grid-template-rows: 1fr;
  }
  .grid-frac {
    width: "25px";
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.7fr 0.5fr 0.7fr;
    gap: 2px;
  }

  .tl {
    line-height: 0%;
  }

  .tl2 {
    top: 24px;
  }

  .mt-25 {
    margin-top: 14px;
  }
</style>
