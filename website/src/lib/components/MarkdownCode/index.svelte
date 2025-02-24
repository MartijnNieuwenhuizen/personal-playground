<script>
	// Using ES6 import syntax
	import hljs from 'highlight.js/lib/core';
	import xml from 'highlight.js/lib/languages/xml';
	import css from 'highlight.js/lib/languages/css';
	import json from 'highlight.js/lib/languages/json';
	import js from 'highlight.js/lib/languages/javascript';

	// Then register the languages you need
	hljs.registerLanguage('xml', xml);
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('json', json);
	hljs.registerLanguage('js', js);

	let all = $props();
	const { text } = all;

	const getLanguage = () => {
		if (text.includes('</')) {
			return 'html';
		}
		if (text.includes('div {') || text.includes('span {') || text.includes(':global(')) {
			return 'css';
		}
		return 'js';
	};

	console.log('getLanguage(): ', getLanguage());

	// const highlightedCode = hljs.highlight(code, { language: 'html' }).value;
	const highlightedCode = hljs.highlight(text, { language: getLanguage() }).value;
</script>

<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css"
/>

<pre><code class="hljs">{@html highlightedCode}</code></pre>
