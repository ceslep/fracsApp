<script id="MathJax-script">
	import { onMount } from 'svelte';

	
    let frac2="";
    export let a="1";
    export let b="2";
    

    $:frac=`$$  {${a}  \\over ${b}}$$`
	
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


<span>{frac}</span>

