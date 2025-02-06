<div class="container">
	<!-- Eye -->
	<div></div>
	<div></div>
	<div></div>

	<!-- Forehead -->
	<div></div>
	<div></div>

	<!-- Nose -->
	<div></div>

	<!-- Mouth -->
	<div></div>

	<!-- Neck -->
	<div></div>
	<div></div>
</div>

<!-- 
    width: 1084 

    254
    99
    47
    75
    39
    10
    26
    50
    4
    37
    4
    26
    413
-->

<!-- 
    height: 1080 

    187
    11
    159
    101
    200
    8
    105
    22
    148
    13
    126
-->
<style>
	.container {
		--border-width: 1rem;

		overflow: hidden;
		border: var(--border-width) solid black;
		border-radius: 50%;

		width: calc(100% - (var(--border-width) * 2));

		aspect-ratio: 1084 / 1080;

		display: grid;
		grid-template-columns: 254fr 99fr 47fr 75fr 39fr 10fr 26fr 50fr 4fr 37fr 4fr 26fr 413fr;
		grid-template-rows: 187fr 11fr 159fr 101fr 200fr 8fr 105fr 22fr 148fr 13fr 126fr;
	}
	div:not(.container) {
		background-color: black;
	}

	/**
     * Eye
     */
	.container div:nth-of-type(1) {
		grid-row: 2 / 3;
		grid-column: 2 / 3;
	}
	.container div:nth-of-type(2) {
		grid-row: 2 / 4;
		grid-column: 3 / 6;
	}
	.container div:nth-of-type(3) {
		grid-row: 2 / 5;
		grid-column: 6 / 7;
	}

	/**
     * Forehead
     */
	.container div:nth-of-type(4) {
		grid-row: 1 / 7;
		grid-column: 11 / 13;
	}
	.container div:nth-of-type(5) {
		grid-row: 6 / 11;
		grid-column: 10 / 12;
	}

	/**
     * Nose
     */
	.container div:nth-of-type(6) {
		grid-row: 6 / 7;
		grid-column: 8 / 10;
	}

	/**
     * Mouth
     */
	.container div:nth-of-type(7) {
		grid-row: 8 / 9;
		grid-column: 8 / 10;
	}

	/**
     * Neck
     */
	.container div:nth-of-type(8) {
		grid-row: 10 / 12;
		grid-column: 5 / 10;
	}
	.container div:nth-of-type(9) {
		grid-row: 10 / 11;
		grid-column: 4 / 5;
	}
</style>
