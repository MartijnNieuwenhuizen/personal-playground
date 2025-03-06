module.exports = {
	extends: ['stylelint-config-prettier'],
	plugins: ['stylelint-order', 'stylelint-prettier'],
	rules: {
		'prettier/prettier': true,
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
				// Content
				'content',

				// Visibility
				'visibility',
				'opacity',
				'overflow',
				'overflow-block',
				'overflow-inline',
				'overflow-x',
				'overflow-y',
				'overflow-scrolling',
				'overscroll',
				'overscroll-block',
				'overscroll-inline',
				'overscroll-x',
				'overscroll-y',

				// Scrolling
				'scroll-behavior',
				'scroll-margin',
				'scroll-margin-block',
				'scroll-margin-inline',
				'scroll-margin-top',
				'scroll-margin-right',
				'scroll-margin-bottom',
				'scroll-margin-left',
				'scroll-padding',
				'scroll-padding-block',
				'scroll-padding-inline',
				'scroll-padding-top',
				'scroll-padding-right',
				'scroll-padding-bottom',
				'scroll-padding-left',

				// Positioning
				'z-index',
				'position',
				'inset',
				'inset-block',
				'inset-block-start',
				'inset-block-end',
				'inset-inline',
				'inset-inline-start',
				'inset-inline-end',
				'top',
				'right',
				'bottom',
				'left',
				'float',
				'clear',

				// Display and Box Model
				'display',
				'box-sizing',
				'box-shadow',
				'box-decoration-break',
				'resize',

				// Flexbox and Grid
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

				// Columns
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

				// Width and height
				'width',
				'min-width',
				'max-width',
				'inline-size',
				'min-inline-size',
				'max-inline-size',
				'height',
				'min-height',
				'max-height',
				'block-size',
				'min-block-size',
				'max-block-size',

				// Margin and padding
				'margin',
				'margin-block',
				'margin-block-start',
				'margin-block-end',
				'margin-inline',
				'margin-inline-start',
				'margin-inline-end',
				'margin-top',
				'margin-right',
				'margin-bottom',
				'margin-left',
				'padding',
				'padding-block',
				'padding-block-start',
				'padding-block-end',
				'padding-inline',
				'padding-inline-start',
				'padding-inline-end',
				'padding-top',
				'padding-right',
				'padding-bottom',
				'padding-left',

				// List
				'list-style',
				'list-style-position',
				'list-style-type',
				'list-style-image',
				'counter-increment',
				'counter-reset',

				// Background and colors
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

				// Images
				'object-fit',
				'interpolation-mode',

				// Effects
				'filter',

				// Clipping
				'clip',

				// Cursors and User Interaction
				'cursor',
				'pointer-events',
				'user-select',

				// Typography
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
				'text-justify',
				'text-decoration',
				'text-emphasis',
				'text-emphasis-position',
				'text-emphasis-style',
				'text-emphasis-color',
				'text-indent',
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
				'quotes',
				'-ms-writing-mode',
				'direction',
				'unicode-bidi',
				'tab-size',

				// Borders
				'border',
				'border-spacing',
				'border-collapse',
				'border-width',
				'border-style',
				'border-color',
				'border-block',
				'border-block-color',
				'border-block-style',
				'border-block-width',
				'border-block-start',
				'border-block-start-color',
				'border-block-start-style',
				'border-block-start-width',
				'border-block-end',
				'border-block-end-color',
				'border-block-end-style',
				'border-block-end-width',
				'border-inline',
				'border-inline-color',
				'border-inline-style',
				'border-inline-width',
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
				'border-start-start-radius',
				'border-start-end-radius',
				'border-end-start-radius',
				'border-end-end-radius',
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

				// Outline
				'outline',
				'outline-width',
				'outline-style',
				'outline-color',
				'outline-offset',

				// View transitions
				'view-timeline',
				'view-timeline-axis',
				'view-timeline-inset',
				'view-timeline-name',
				'view-transition-name',

				// Transforms
				'transform',
				'transform-box',
				'transform-origin',
				'transform-style',
				'scale',
				'rotate',

				// Transitions
				'transition',
				'transition-behavior',
				'transition-property',
				'transition-duration',
				'transition-delay',
				'transition-timing-function',

				// Animations
				'animation',
				'animation-name',
				'animation-duration',
				'animation-delay',
				'animation-timing-function',
				'animation-play-state',
				'animation-iteration-count',
				'animation-direction',
				'animation-fill-mode',

				// Tables
				'table-layout',
				'caption-side',
				'empty-cells',

				// Page Breaks
				'break-before',
				'break-inside',
				'break-after',
				'page-break-before',
				'page-break-inside',
				'page-break-after',

				// Zoom
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
