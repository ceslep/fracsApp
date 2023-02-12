<script>
  import { afterUpdate, onMount } from "svelte";

  import F5 from "../Fractions/F5.svelte";
  import F4 from "../Fractions/F4.svelte";
  import F3 from "../Fractions/F3.svelte";
  import F2 from "../Fractions/F2.svelte";
  import F1 from "../Fractions/F1.svelte";

  export let numeradores = ["1", "-2", "1", "-1"].join(",");
  export let denominadores = ["2", "3", "12", "8"].join(",");

  export let propMCM = false;
  export let propMCD = false;

  let tnumeradores = [];

  export let Homogeneos = "";
  export let calcular = false;

  afterUpdate(() => {
    console.log("calcular:", calcular);
    if (calcular) calcularSuma();
  });

  $: tnumeradores = numeradores.split(",").map((n, i) => {
    return `aaaan${i + 1}:${n}`;
  });

  $: sizeF = numeradores.split(",").length;

  $: console.log(
    numeradores.split(",").map((n, i) => {
      return `"n${i + 1}":"${n}"`;
    })
  );

  let sumObj;
  let sizeFrac = 0;

  function mcmArray(array) {
    var m = array[0];
    for (var i = 1; i < array.length; i++) {
      if (array[i] > m) {
        m = array[i];
      }
    }
    while (true) {
      var flag = true;
      for (var i = 0; i < array.length; i++) {
        if (m % array[i] != 0) {
          flag = false;
          break;
        }
      }
      if (flag) {
        return m;
      }
      m++;
    }
  }

  let MCM = "";
  let MCD = "";
  let TOTAL;
  let NR;
  let DR;

  let primos1 = "";
  let primos2 = "";

  const printPot = (primeNumbers) => {
    console.log(primeNumbers);
    let fact = primeNumbers[0];
    let expo = 1;
    let html = "";
    for (let i = 0; i < primeNumbers.length; i++) {
      if (primeNumbers[i] === primeNumbers[i + 1]) expo++;
      else {
        if (expo > 1) html += `${fact}<sup>${expo}</sup>*`;
        else html += `${fact}*`;
        if (i < primeNumbers.lentgh - 1) html += `*`;
        fact = primeNumbers[i + 1];
        expo = 1;
      }
    }
    //delete last character of a string html
    html = html.substring(0, html.length - 1);
    return html;
  };

  function primeFactors(n) {
    var factors = [];
    var d = 2;
    while (n > 1) {
      while (n % d == 0) {
        factors.push(d);
        n = n / d;
      }
      d++;
    }
    return factors;
  }

  let res1 = "";
  let res2 = "";
  function calculateMCM(denominators) {
    //  let denominators = [30, 15, 20, 25, 50]
    let num = mcmArray(denominators);
    MCM = num;
    console.log(num);

    res1 = `${printPot(primeFactors(num))} = ${num}`;

    let html = "<ul class='list-group'>";
    denominators.forEach((den) => {
      html += `<li class="list-group-item">${den} = ${printPot(
        primeFactors(den)
      )}</li>`;
    });
    html += "</ul>";
    primos1 = html;
  }

  let numeradoresSuma = "";
  let numeradoresSuma2 = "";
  let numeradoresSuma3 = "";
  let numeradoresSuma4 = "";

  function mcdcd(a, b) {
    if (a == 0) return b;
    if (b == 0) return a;
    while (a != b) {
      if (a > b) a = a - b;
      else b = b - a;
    }
    return a;
  }
  function mcdArray(array) {
    var mcd = array[0];
    for (var i = 1; i < array.length; i++) {
      mcd = mcdcd(mcd, array[i]);
    }
    return mcd;
  }

  function calculateMCD(denominators) {
    //  let denominators = [30, 15, 20, 25, 50]
    console.log(denominators);
    
    let num = mcdArray(denominators);
    MCD = num;
    console.log(num);

    res2 = `${printPot(primeFactors(num))} = ${num}`;
    //  document.querySelector(".res2").innerHTML =

    let html = "<ul class='list-group'>";
    denominators.forEach((den) => {
      html += `<li class="list-group-item">${den} = ${printPot(
        primeFactors(den)
      )}</li>`;
    });
    html += "</ul>";
    primos2 = html;
  }

  const calculateSignos = (nums) => {
    let signos = "";
    if (nums.length === 2) signos = `"s1":"${nums[1] > 0 ? "+" : "-"}"`;
    else
      for (let i = 1; i < nums.length; i++)
        signos += `"s${i}":"${nums[i] > 0 ? "+" : "-"}",`;
    if (nums.length === 2) return signos;
    else return signos.slice(0, -1);
  };

  const calcularSuma = () => {
    if ((numeradores=="")||(denominadores=="")) return;
    console.log(numeradores, denominadores);
    if (numeradores === "" || denominadores === "") return;
    let tnumeradores = [];
    tnumeradores = numeradores.split(",").map((n, i) => {
      return `"n${i + 1}":"${i > 0 ? Math.abs(parseInt(n)) : parseInt(n)}"`;
    });
    sizeFrac = numeradores.split(",").length;
    let tdenominadores = [];
    tdenominadores = denominadores.split(",").map((d, i) => {
      return `"d${i + 1}":"${d}"`;
    });
    let signos = "";
    signos = calculateSignos(numeradores.split(","));
    console.log(signos);
    //return;
    let txtjp = `{${tnumeradores.join()},${tdenominadores.join()},${signos}}`;
    console.log(txtjp);
    sumObj = JSON.parse(
      `{${tnumeradores.join()},${tdenominadores.join()},${signos}}`
    );
    console.log(sumObj);

    calculateMCM(denominadores.split(",").map((d) => parseInt(d)));
    console.log(MCM);

    numeradoresSuma = "";
    let tden = denominadores.split(",");
    numeradores.split(",").forEach((n, i, a) => {
      if (i < a.length - 1)
        numeradoresSuma += `(${MCM}/${tden[i]})*${
          i > 0 ? Math.abs(parseInt(n)) : parseInt(n)
        } ${parseInt(a[i + 1]) > 0 ? "+" : "-"} `;
      else numeradoresSuma += `(${MCM}/${tden[i]})*${Math.abs(parseInt(n))}`;
    });
    console.log(numeradoresSuma);

    numeradoresSuma2 = "";
    numeradores.split(",").forEach((n, i, a) => {
      if (i < a.length - 1)
        numeradoresSuma2 += `${parseInt(MCM) / parseInt(tden[i])}*${
          i > 0 ? Math.abs(parseInt(n)) : parseInt(n)
        } ${parseInt(a[i + 1]) > 0 ? "+" : "-"}`;
      else
        numeradoresSuma2 += `${parseInt(MCM) / parseInt(tden[i])}*${Math.abs(
          parseInt(n)
        )}`;
    });

    numeradoresSuma3 = "";
    numeradores.split(",").forEach((n, i, a) => {
      if (i < a.length - 1)
        numeradoresSuma3 += `${
          (parseInt(MCM) / parseInt(tden[i])) *
          (i == 0 ? parseInt(n) : Math.abs(parseInt(n)))
        } ${parseInt(a[i + 1]) > 0 ? "+" : "-"} `;
      else
        numeradoresSuma3 += `${
          (parseInt(MCM) / parseInt(tden[i])) * Math.abs(parseInt(n))
        }`;
    });
    console.log(numeradoresSuma3);
    numeradoresSuma4 = "";
    let suma4 = 0;
    numeradores.split(",").forEach((n, i, a) => {
      suma4 += (parseInt(MCM) / parseInt(tden[i])) * parseInt(n);
    });
    numeradoresSuma4 = suma4.toString();
    if (!propMCD)
    calculateMCD([Math.abs(suma4), parseInt(MCM)]);
    else
    calculateMCD(denominadores.split(",").map(n=>parseInt(n)));
  };
</script>

<main class="container">
  {#if !(propMCM || propMCD)}
    <div class="row">
      <div class="input-group mb-3 pt-2">
        <div class="form-group w-100">
          <label for="numeradores">Numeradores</label>
          <input
            type="text"
            class="form-control"
            placeholder="Ingresa números enteros separados por comas"
            bind:value={numeradores}
          />
        </div>
      </div>
    </div>
  {/if}
  <div class="row">
    <div class="input-group mb-3 pt-2">
      <div class="form-group w-100">
        <label for="text-numbers1">
          {#if propMCM}
            Números a calcular el M.C.M
          {:else if propMCD}
            Números a calcular el M.C.D
          {:else}
            Denominadores {Homogeneos}
          {/if}
        </label>
        <input
          type="text"
          class="form-control"
          placeholder="Ingresa números enteros separados por comas"
          bind:value={denominadores}
        />
        <button class="btn btn-outline-secondary d-none" type="button" id="mcm"
          >M.C.M.</button
        >
      </div>
    </div>
  </div>
  <button class="btn btn-primary btn-sm" on:click={calcularSuma}>
    {#if propMCM}
      Calcular M.C.M.
    {:else if propMCD}
      Calcular M.C.D.
    {:else}
      Calcular Suma
    {/if}
  </button>

  {#if !(propMCM || propMCD)}
    {#if sizeFrac !== 0 && sizeFrac === 2}
      <F2 {...sumObj} />
    {:else if sizeFrac !== 0 && sizeFrac === 3}
      <F3 {...sumObj} />
    {:else if sizeFrac !== 0 && sizeFrac === 4}
      <F4 {...sumObj} />
    {:else if sizeFrac !== 0 && sizeFrac === 5}
      <F5 {...sumObj} />
    {/if}
  {/if}
  <br />
  {#if MCM !== "" && Homogeneos === ""}
    <span class="text-success text-justify"
      >
      {#if propMCM || propMCD}
      Descomponemos los números dados en sus factores primos
      {:else}
      Descomponemos los denominadores en sus factores primos
      {/if}
      </span
    >
  {/if}
  {#if Homogeneos === "" && !propMCD}
    <!-- content here -->
    <span class="primos1">
      {@html primos1}
    </span>
  {/if}
  {#if sizeFrac !== 0 && Homogeneos === "" && !propMCD}
    <div class="alert alert-warning bg-gradient pt-2" role="alert">
      El M.C.M es
      <span class="res1">
        {@html res1}
      </span>
      Porque tomamos cada factor primo comun y no comun con su mayor exponente.
    </div>
  {/if}
  <br />
  {#if !(propMCM || propMCD)}
    {#if MCM !== "" && Homogeneos == ""}
      <span class="text-success text-justify"
        >Dividimos cada numerdor entre el M.C.M. <span class="text-warning"
          >{MCM}</span
        > y cada uno lo multiplicamos por el numerador correspondiente obteniendo
        lo siguiente:</span
      >
      <br /><br />
    {/if}
    {#if numeradoresSuma != "" && Homogeneos == ""}
      <F1
        n={numeradoresSuma}
        d={MCM}
        size={sizeF == 2 ? 11 : sizeF == 3 ? 22 : sizeF == 4 ? 28 : 34}
      />
    {/if}
    {#if Homogeneos == ""}
      <!-- content here -->
      <br />
    {/if}
    {#if numeradoresSuma2 != "" && Homogeneos == ""}
      <F1
        n={numeradoresSuma2}
        d={MCM}
        size={sizeF == 2 ? 6 : sizeF == 3 ? 11 : sizeF == 4 ? 18 : 22}
      />
    {/if}
    {#if Homogeneos == ""}
      <!-- content here -->
      <br />
    {/if}
    {#if numeradoresSuma3 != ""}
      <F1
        n={numeradoresSuma3}
        d={MCM}
        size={sizeF == 2 ? 5 : sizeF == 3 ? 7 : sizeF == 4 ? 12 : 14}
      />
    {/if}
    <br />
    {#if numeradoresSuma4 != ""}
      <F1 n={numeradoresSuma4} d={MCM} />
    {/if}
    <br />
  {/if}
  {#if (!(propMCM || propMCD)) }
  {#if MCD !== ""}
    <span class="text-success text-justify"
      >
      
      Descomponemos tanto el numerador del resultado <span
        class="text-info fw-bold">{Math.abs(parseInt(numeradoresSuma4))}</span
      >
      y el denominador
      <span class="text-info fw-bold">{MCM}</span> en sus factores primos</span
    >
    <br />
    <!-- content here -->
  {/if}
  {/if}
  {#if !(propMCM || propMCD) || propMCD}
  <span class="primos2">
    {@html primos2}
  </span>
  {#if MCD !== ""}
    <div class="alert alert-primary" role="alert">
      El M.C.D es
      <span class="res2">
        {@html res2}
      </span>
      Porque es el número divisor común a {Math.abs(parseInt(numeradoresSuma4))}
      y a {MCM}
    </div>
  {/if}
  {/if}
  <br />
  {#if !(propMCM || propMCD)}
  {#if MCD !== ""}
    <span class="text-primary"
      >Dividimos entonces tanto numerador como denominador por el M.C.D. que en
      este caso es {MCD}</span
    >
    <br />
    <br />
    <F1 n={`${numeradoresSuma4}/${MCD}`} d={`${MCM}/${MCD}`} size={3} />
    <br />
    <span class="text-success"
      >El resultado final al simplificar usando el M.C.D. es</span
    >
    <br />
    <span class="fw-bold text-primary">
      <F1
        n={(parseInt(numeradoresSuma4) / parseInt(MCD)).toString()}
        d={(parseInt(MCM) / parseInt(MCD)).toString()}
        size={3}
      />
    </span>
    <br />
  {/if}
  {/if}
</main>

<style>
  .text-justify {
    text-align: justify;
  }
</style>
