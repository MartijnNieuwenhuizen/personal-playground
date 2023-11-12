<script>
	// Using ES6 import syntax
	import hljs from 'highlight.js/lib/core';
	import xml from 'highlight.js/lib/languages/xml';
	import css from 'highlight.js/lib/languages/css';

	// Then register the languages you need
	hljs.registerLanguage('xml', xml);
	hljs.registerLanguage('css', css);

	/** @type {string} */
	export let code;
	/** @type {string} */
	export let language;

	// const highlightedCode = hljs.highlight(code, { language: 'html' }).value;
	const highlightedCode = hljs.highlight(code, { language }).value;
</script>

<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css"
/>

<pre><code class="hljs">{@html highlightedCode}</code></pre>
