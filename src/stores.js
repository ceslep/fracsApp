import { SvelteComponent } from "svelte";
import { writable } from "svelte/store";

export const TEMA = writable("");

export const ShowMenuFixed=writable(false);

export let TEMACOMPONENT;