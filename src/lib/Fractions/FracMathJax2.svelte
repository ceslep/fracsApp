<script id="MathJax-script">
	import { onMount } from 'svelte';

	let frac1="";
    let frac2="";
    export let n1="1";
    export let n2="2";
    export let d1="3";
    export let d2="4";
    export let s1="+";
    

    $:frac1=`$$  {${n1}  \\over ${d1}\\ }$$`
    $:frac2=`$$  {${n2}  \\over ${d2}\\ }$$`
	
	onMount(() => {
		
		let script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
    document.head.append(script);
		
		script.onload = () => {
      const MathJax = {
        tex: {inlineMath: [['$', '$'], ['\\(', '\\)']]},
        svg: {fontCache: 'global'}
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
</div>

<style>
    .grid{
        width:100px;
        display: grid;
        grid-template-columns: 2fr 0.3fr 2fr;
        align-items: center;
        justify-content: center;
    }
</style>