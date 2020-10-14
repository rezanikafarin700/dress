<template>
	<div>
		<div class="wrapper">
			<date-picker/>
			<br><br>
			<get-multi-image v-model="images"/>
		</div>

		<div class="parent">
			<div class="child" v-for="(m,index) of images" :key="index" :style="{backgroundImage:`url(${createUrl(m)})`}">
				<div class="ratio"></div>
			</div>
		</div>

	</div>
</template>

<script>
    import GetMultiImage from "../components/GetMultiImage";
    import DatePicker from "../components/DatePicker";

    export default {
        components: {
            GetMultiImage,
            DatePicker
        },

        data() {
            return {
                images: [],
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