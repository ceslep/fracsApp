<script id="MathJax-script">
  import { onMount } from "svelte";

  let frac1 = "";
  let frac2 = "";
  let frac3 = "";
  export let n1 = "1";
  export let n2 = "2";
  export let n3 = "3";
  export let n4 = "4";
  export let n5 = "5";
  export let d1 = "2";
  export let d2 = "3";
  export let d3 = "4";
  export let d4 = "5";
  export let d5 = "6";
  export let s1 = "+";
  export let s2 = "+";
  export let s3 = "+";
  export let s4 = "+";

  $: frac1 = `$$  {${n1}  \\over ${d1}\\ }$$`;
  $: frac2 = `$$  {${n2}  \\over ${d2}\\ }$$`;
  $: frac3 = `$$  {${n3}  \\over ${d3}\\ }$$`;
  $: frac4 = `$$  {${n4}  \\over ${d4}\\ }$$`;
  $: frac5 = `$$  {${n5}  \\over ${d5}\\ }$$`;

  onMount(() => {
    let script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
    document.head.append(script);

    script.onload = () => {
      const MathJax = {
        tex: {
          inlineMath: [
            ["$", "$"],
            ["\\(", "\\)"],
          ],
        },
        svg: { fontCache: "global" },
      };
    };
  });
</script>

<!-- 
When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
-->

<div class="grid mx-auto">
  <div class="">{frac1}</div>
  <div class="">{s1}</div>
  <div class="">{frac2}</div>
  <div class="">{s2}</div>
  <div class="">{frac3}</div>
  <div class="">{s3}</div>
  <div class="">{frac4}</div>
  <div class="">{s4}</div>
  <div class="">{frac5}</div>
</div>

<style>
  .grid {
    width: 100px;
    display: grid;
    grid-template-columns: 2fr 1fr 2fr 1fr 2fr 1fr 2fr 1fr 2fr;
    align-items: center;
    justify-content: center;
  }
</style>
