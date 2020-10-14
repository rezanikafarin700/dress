<template>

	<div id="app">

		<router-view/>

	</div>

</template>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	@font-face {
		font-family: vazir;
		src: url("../public/font/Vazir.ttf");
	}


	* {
		box-sizing: border-box;
		font-family: vazir;
	}


	html, body {
		border: none;
		outline: none;
		margin: 0;
		padding: 0;
		scroll-behavior: smooth;
	}


	.wrapper {
		width: 1250px;
		margin: 0 auto;
	}


	.parent-present {

		margin: 0 0 .9em;

		.present {

			display: flex;
			flex-direction: row-reverse;
			justify-content: center;
			align-items: center;

			.present-square {
				width: 17px;
				height: 17px;
				border: 1px solid #000000;
				transform: rotate(45deg);
				position: relative;

				&::before {
					content: '';
					width: 11px;
					height: 11px;
					border: 1px solid #000000;
					position: absolute;
					top: 0;
					right: 0;
					left: 0;
					bottom: 0;
					margin: auto;

				}

			}

			.present-title {
				padding: 0 40px;
				font-size: 1.1em;
				line-height: 1;
				font-weight: bold;
				margin: 12px 0;
			}

		}

		.present-red-title {
			color: red;
			text-align: center;
			font-size: 1em;
			font-weight: bold;
			margin-bottom: 24px;
		}

		.present-text {
			text-align: justify;
			direction: rtl;
		}

	}

	.global-btn {
		display: inline-block;
		border: 1px solid #e3dcd1;
		padding: 5px 20px;
		transition: all .5s;
		margin: 0 5px;
		cursor: pointer;
		font-weight: bold;

		&:hover {
			background-color: #000000;
			color: #ffffff;
		}
	}





</style>
