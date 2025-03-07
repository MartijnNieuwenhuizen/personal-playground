module.exports = {
	plugins: ['stylelint-prettier', 'stylelint-order'],
	extends: ['stylelint-prettier/recommended', 'stylelint-config-standard-scss'],
	ignoreFiles: ['build/**/*'],

	rules: {
		// Ensure I can use variables like --step--2.
		'custom-property-pattern': null,
		// Ensure I can use pseudo-classes like :global.
		'selector-pseudo-class-no-unknown': null,
		'selector-pseudo-element-no-unknown': null,
		'selector-class-pattern': null,
		'custom-property-no-missing-var-function': null,

		'order/order': [
			[
				'dollar-variables',
				'custom-properties',
				'at-rules',
				'declarations',
				{
					type: 'at-rule',
					name: 'if'
				},
				{
					type: 'at-rule',
					name: 'else if'
				},
				{
					type: 'at-rule',
					name: 'else'
				},
				{
					type: 'at-rule',
					name: 'supports'
				},
				{
					type: 'at-rule',
					name: 'include',
					parameter: 'bp-min',
					hasBlock: true
				},
				{
					type: 'at-rule',
					name: 'include',
					parameter: 'bp-max',
					hasBlock: true
				},
				{
					type: 'at-rule',
					name: 'include',
					parameter: 'bp-min-max',
					hasBlock: true
				},
				{
					type: 'at-rule',
					name: 'include',
					parameter: 'reduced-motion',
					hasBlock: true
				},
				{
					type: 'at-rule',
					name: 'include',
					parameter: 'high-contrast',
					hasBlock: true
				},
				{
					type: 'at-rule',
					name: 'include',
					parameter: 'print',
					hasBlock: true
				},
				{
					type: 'at-rule',
					name: 'media'
				},
				'rules'
			],
			{ severity: 'error' }
		],
		'order/properties-order': [
			[
				//
				'content',

				//
				'visibility',
				'opacity',
				'overflow',
				'overflow-x',
				'overflow-y',
				'overflow-scrolling',
				'pointer-events',

				//
				'z-index',
				'position',
				'top',
				'right',
				'bottom',
				'left',
				'float',
				'clear',

				//
				'box-sizing',
				'display',
				'flex',
				'flex-grow',
				'flex-shrink',
				'flex-basis',
				'flex-direction',
				'flex-flow',
				'flex-wrap',
				'grid',
				'grid-area',
				'grid-template',
				'grid-template-areas',
				'grid-template-rows',
				'grid-template-columns',
				'grid-row',
				'grid-row-start',
				'grid-row-end',
				'grid-column',
				'grid-column-start',
				'grid-column-end',
				'grid-auto-rows',
				'grid-auto-columns',
				'grid-auto-flow',
				'grid-gap',
				'grid-row-gap',
				'grid-column-gap',
				'gap',
				'row-gap',
				'column-gap',
				'align-content',
				'align-items',
				'align-self',
				'justify-content',
				'justify-items',
				'justify-self',
				'vertical-align',
				'order',

				//
				'columns',
				'column-span',
				'column-width',
				'column-count',
				'column-fill',
				'column-gap',
				'column-rule',
				'column-rule-width',
				'column-rule-style',
				'column-rule-color',
				'orphans',
				'widows',

				//
				'width',
				'min-width',
				'max-width',
				'height',
				'min-height',
				'max-height',

				//
				'margin',
				'margin-top',
				'margin-right',
				'margin-bottom',
				'margin-left',
				'padding',
				'padding-top',
				'padding-right',
				'padding-bottom',
				'padding-left',

				//
				'list-style',
				'list-style-position',
				'list-style-type',
				'list-style-image',
				'counter-increment',
				'counter-reset',

				//
				'background',
				'background-color',
				'background-image',
				'background-attachment',
				'background-position',
				'background-position-x',
				'background-position-y',
				'background-clip',
				'background-origin',
				'background-size',
				'background-repeat',
				'color',
				'fill',
				'stroke',

				//
				'cursor',
				'user-select',

				//
				'font',
				'font-family',
				'src',
				'font-weight',
				'font-style',
				'font-variant',
				'font-size-adjust',
				'font-stretch',
				'font-size',
				'line-height',
				'letter-spacing',
				'text-align',
				'text-align-last',
				'text-decoration',
				'text-emphasis',
				'text-emphasis-position',
				'text-emphasis-style',
				'text-emphasis-color',
				'text-indent',
				'text-justify',
				'text-outline',
				'text-transform',
				'text-wrap',
				'text-overflow',
				'text-overflow-ellipsis',
				'text-overflow-mode',
				'text-shadow',
				'white-space',
				'word-spacing',
				'word-wrap',
				'word-break',
				'overflow-wrap',
				'hyphens',

				//
				'border',
				'border-spacing',
				'border-collapse',
				'border-width',
				'border-style',
				'border-color',
				'border-top',
				'border-top-width',
				'border-top-style',
				'border-top-color',
				'border-right',
				'border-right-width',
				'border-right-style',
				'border-right-color',
				'border-bottom',
				'border-bottom-width',
				'border-bottom-style',
				'border-bottom-color',
				'border-left',
				'border-left-width',
				'border-left-style',
				'border-left-color',
				'border-radius',
				'border-top-left-radius',
				'border-top-right-radius',
				'border-bottom-right-radius',
				'border-bottom-left-radius',
				'border-image',
				'border-image-source',
				'border-image-slice',
				'border-image-width',
				'border-image-outset',
				'border-image-repeat',
				'border-top-image',
				'border-right-image',
				'border-bottom-image',
				'border-left-image',
				'border-corner-image',
				'border-top-left-image',
				'border-top-right-image',
				'border-bottom-right-image',
				'border-bottom-left-image',

				//
				'box-shadow',
				'box-decoration-break',

				//
				'outline',
				'outline-width',
				'outline-style',
				'outline-color',
				'outline-offset',

				//
				'object-fit',
				'clip',
				'filter',
				'resize',
				'interpolation-mode',

				//
				'transform',
				'transform-origin',

				//
				'transition',
				'transition-property',
				'transition-duration',
				'transition-delay',
				'transition-timing-function',

				//
				'animation',
				'animation-name',
				'animation-duration',
				'animation-delay',
				'animation-timing-function',
				'animation-play-state',
				'animation-iteration-count',
				'animation-direction',
				'animation-fill-mode',

				//
				'quotes',
				'-ms-writing-mode',
				'tab-size',
				'table-layout',
				'caption-side',
				'empty-cells',

				//
				'unicode-bidi',
				'direction',

				'break-before',
				'break-inside',
				'break-after',
				'page-break-before',
				'page-break-inside',
				'page-break-after',

				'zoom',
				'max-zoom',
				'min-zoom',
				'user-zoom',
				'orientation'
			],
			{
				unspecified: 'bottom',
				severity: 'error'
			}
		]
	}
};
