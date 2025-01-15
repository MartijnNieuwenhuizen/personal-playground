<script>
	import Code from '$lib/components/Code/index.svelte';
	import Block from '$lib/components/layout/Block/index.svelte';
	import ExperimentItem from '$lib/components/ExperimentItem/index.svelte';

	let title = 'Stylelint property order';
	let description = `Enforce a consistent order for properties in CSS/SCSS files with Stylelint.`;

	let code = `// .stylelintrc.js
	
module.exports = {
    plugins: ["stylelint-prettier", "stylelint-order"],
	// ...Your config
    rules: {
        // ...Your rules
        "order/order": [
            [
                "dollar-variables",
                "custom-properties",
                "at-rules",
                "declarations",
                {
                    type: "at-rule",
                    name: "if",
                },
                {
                    type: "at-rule",
                    name: "else if",
                },
                {
                    type: "at-rule",
                    name: "else",
                },
                {
                    type: "at-rule",
                    name: "supports",
                },
                {
                    type: "at-rule",
                    name: "include",
                    parameter: "bp-min",
                    hasBlock: true,
                },
                {
                    type: "at-rule",
                    name: "include",
                    parameter: "bp-max",
                    hasBlock: true,
                },
                {
                    type: "at-rule",
                    name: "include",
                    parameter: "bp-min-max",
                    hasBlock: true,
                },
                {
                    type: "at-rule",
                    name: "include",
                    parameter: "reduced-motion",
                    hasBlock: true,
                },
                {
                    type: "at-rule",
                    name: "include",
                    parameter: "high-contrast",
                    hasBlock: true,
                },
                {
                    type: "at-rule",
                    name: "include",
                    parameter: "print",
                    hasBlock: true,
                },
                {
                    type: "at-rule",
                    name: "media",
                },
                "rules",
            ],
            { severity: "error" },
        ],
        "order/properties-order": [
            [
                // Content
                "content",

                // Visibility or preventing visibility
                "visibility",
                "opacity",
                "overflow",
                "overflow-x",
                "overflow-y",
                "overflow-scrolling",
                "pointer-events",

                // Positioning
                "z-index",
                "position",
                "top",
                "right",
                "bottom",
                "left",
                "float",
                "clear",

                // Flexbox and Grid
                "box-sizing",
                "display",
                "flex",
                "flex-grow",
                "flex-shrink",
                "flex-basis",
                "flex-direction",
                "flex-flow",
                "flex-wrap",
                "grid",
                "grid-area",
                "grid-template",
                "grid-template-areas",
                "grid-template-rows",
                "grid-template-columns",
                "grid-row",
                "grid-row-start",
                "grid-row-end",
                "grid-column",
                "grid-column-start",
                "grid-column-end",
                "grid-auto-rows",
                "grid-auto-columns",
                "grid-auto-flow",
                "grid-gap",
                "grid-row-gap",
                "grid-column-gap",
                "gap",
                "row-gap",
                "column-gap",
                "align-content",
                "align-items",
                "align-self",
                "justify-content",
                "justify-items",
                "justify-self",
                "vertical-align",
                "order",

                // Columns
                "columns",
                "column-span",
                "column-width",
                "column-count",
                "column-fill",
                "column-gap",
                "column-rule",
                "column-rule-width",
                "column-rule-style",
                "column-rule-color",
                "orphans",
                "widows",

                // Width and height
                "width",
                "min-width",
                "max-width",
                "height",
                "min-height",
                "max-height",

                // Margin and padding
                "margin",
                "margin-block",
                "margin-block-start",
                "margin-block-end",
                "margin-inline",
                "margin-inline-start",
                "margin-inline-end",
                "margin-top",
                "margin-right",
                "margin-bottom",
                "margin-left",
                "padding",
				"padding-block",
                "padding-block-start",
                "padding-block-end",
                "padding-inline",
                "padding-inline-start",
                "padding-inline-end",
                "padding-top",
                "padding-right",
                "padding-bottom",
                "padding-left",

                // List
                "list-style",
                "list-style-position",
                "list-style-type",
                "list-style-image",
                "counter-increment",
                "counter-reset",

                // Background and colors
                "background",
                "background-color",
                "background-image",
                "background-attachment",
                "background-position",
                "background-position-x",
                "background-position-y",
                "background-clip",
                "background-origin",
                "background-size",
                "background-repeat",
                "color",
                "fill",
                "stroke",

                // Cursors
                "cursor",
                "user-select",

                // Typography
                "font",
                "font-family",
                "src",
                "font-weight",
                "font-style",
                "font-variant",
                "font-size-adjust",
                "font-stretch",
                "font-size",
                "line-height",
                "letter-spacing",
                "text-align",
                "text-align-last",
                "text-decoration",
                "text-emphasis",
                "text-emphasis-position",
                "text-emphasis-style",
                "text-emphasis-color",
                "text-indent",
                "text-justify",
                "text-outline",
                "text-transform",
                "text-wrap",
                "text-overflow",
                "text-overflow-ellipsis",
                "text-overflow-mode",
                "text-shadow",
                "white-space",
                "word-spacing",
                "word-wrap",
                "word-break",
                "overflow-wrap",
                "hyphens",

                // Borders
                "border",
                "border-spacing",
                "border-collapse",
                "border-width",
                "border-style",
                "border-color",
                "border-top",
                "border-top-width",
                "border-top-style",
                "border-top-color",
                "border-right",
                "border-right-width",
                "border-right-style",
                "border-right-color",
                "border-bottom",
                "border-bottom-width",
                "border-bottom-style",
                "border-bottom-color",
                "border-left",
                "border-left-width",
                "border-left-style",
                "border-left-color",
                "border-radius",
                "border-top-left-radius",
                "border-top-right-radius",
                "border-bottom-right-radius",
                "border-bottom-left-radius",
                "border-image",
                "border-image-source",
                "border-image-slice",
                "border-image-width",
                "border-image-outset",
                "border-image-repeat",
                "border-top-image",
                "border-right-image",
                "border-bottom-image",
                "border-left-image",
                "border-corner-image",
                "border-top-left-image",
                "border-top-right-image",
                "border-bottom-right-image",
                "border-bottom-left-image",

                // Box...
                "box-shadow",
                "box-decoration-break",

                // Outline
                "outline",
                "outline-width",
                "outline-style",
                "outline-color",
                "outline-offset",

                // Clipping and Masks
                "object-fit",
                "clip",
                "filter",
                "resize",
                "interpolation-mode",

                // Transforms
                "transform",
                "transform-origin",

                // Transitions
                "transition",
                "transition-property",
                "transition-duration",
                "transition-delay",
                "transition-timing-function",

                // Animations
                "animation",
                "animation-name",
                "animation-duration",
                "animation-delay",
                "animation-timing-function",
                "animation-play-state",
                "animation-iteration-count",
                "animation-direction",
                "animation-fill-mode",

                // Others
                "quotes",
                "-ms-writing-mode",
                "tab-size",
                "table-layout",
                "caption-side",
                "empty-cells",

                //
                "unicode-bidi",
                "direction",

                "break-before",
                "break-inside",
                "break-after",
                "page-break-before",
                "page-break-inside",
                "page-break-after",

                "zoom",
                "max-zoom",
                "min-zoom",
                "user-zoom",
                "orientation",
            ],
            {
                unspecified: "bottom",
                severity: "error",
            },
        ],
    },
};
`;
</script>

<ExperimentItem {title} {description} showPageEffect={true}>
	<Block size="medium">
		<p>To enable this you need to add the following dependencies</p>
		<ul>
			<li><a href="https://www.npmjs.com/package/stylelint">stylelint</a></li>
			<li><a href="https://www.npmjs.com/package/stylelint-order">stylelint-order</a></li>
			<li><a href="https://www.npmjs.com/package/stylelint-scss">stylelint-scss</a></li>
		</ul>
		<Code {code} language="js" />
	</Block>
</ExperimentItem>

<style>
</style>
