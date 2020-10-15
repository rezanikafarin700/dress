<template>
	<div>
		<div style="width: 250px;margin: 0 auto">
			<date-picker v-model="today"/>

			{{ today }}
		</div>

		<h1>{{ today }}</h1>
		<h2> Reza Nikafarin </h2>
		<h6>new change of master branch</h6>
	</div>
</template>

<script>

    import DatePicker from "../components/DatePicker";

    export default {
        components: {DatePicker},

        data() {
            return {
                images: [],
                today: '',
            }
        },

        methods: {
            createUrl(file) {
                return URL.createObjectURL(file);
            }
        },

    }
</script>

<style scoped lang="scss">

	.parent {
		display: flex;
		flex-direction: row-reverse;
		flex-wrap: wrap;

		.child {
			width: calc(33.33% - 10px);
			margin: 5px;
			flex: 0 0 auto;
			background-position: center;
			background-size: cover;
			border: 2px solid red;

			.ratio {
				position: relative;
				padding-top: 100%;
			}
		}
	}

</style>
