<template>
	<div id="get-multi-image">

		<div class="multi-image">

			<div class="image" v-for="(u,index) of url" :key="index" :style="{backgroundImage: `url(${u})`}">
				<div class="ratio"></div>
				<div class="overlay">
					<div class="del-btn" @click="deleteImage(index)"></div>
				</div>
			</div>

			<div class="con-input">
				<input type="file" title="افزودن عکس" multiple @change="addImages">
				<div class="btn-input" :style="{backgroundImage:`url(icons/addImage.png)`}"></div>
				<div class="ratio">
				</div>
			</div>

		</div>


	</div>
</template>

<script>
    export default {
        name: "GetMultiImage",

        data() {
            return {
                files: [],
                url: [],
            }
        },


        props: {
            value: Array
        },


        methods: {
            addImages(e) {
                const vm = this;
                vm.files.push(...e.target.files);
                window.console.log(vm.files);
                window.console.log(vm.url);
                for (let file of vm.files) {
                    vm.url.push(URL.createObjectURL(file));
                }

                vm.$emit('input',vm.files);
            },

            deleteImage(index) {
                const vm = this;
                vm.files.splice(index, 1);
                vm.url.splice(index, 1);
                vm.$emit('input',vm.files);

                window.console.log(vm.files);
                window.console.log(vm.url);
            }
        },


    }
</script>

<style scoped lang="scss">

	#get-multi-image {
		$br: 2px;

		.multi-image {

			border: 1px solid #000000;
			display: flex;
			flex-direction: row-reverse;
			flex-wrap: wrap;
			margin: -5px;


			.con-input {
				width: calc(10% - 10px);
				margin: 5px;
				flex: 0 0 auto;
				border: 1px dashed #000000;
				border-radius: $br;
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;

				.ratio {
					position: relative;
					padding-top: 100%;
				}

				.btn-input {
					width: 30px;
					height: 30px;
					background-size: 100%;
					background-position: bottom 1000px;
				}

				input {
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
					opacity: 0;
					cursor: pointer;

				}
			}

			.image {
				width: calc(10% - 10px);
				margin: 5px;
				flex: 0 0 auto;
				background-size: cover;
				background-position: center;
				position: relative;
				cursor: pointer;
				border-radius: $br;

				.ratio {
					position: relative;
					padding-top: 100%;
				}

				.overlay {
					width: 100%;
					height: 100%;
					position: absolute;
					left: 0;
					top: 0;
					background-color: rgba(0, 0, 0, .4);
					display: flex;
					justify-content: center;
					align-items: center;
					opacity: 0;
					transition: all .5s;
					border-radius: $br;

					.del-btn {
						width: 40px;
						height: 40px;
						background-position: center;
						background-size: cover;
						background-image: url("/icons/delete-icon.png");
					}

					&:hover {
						opacity: 1;
					}

				}

			}
		}
	}

</style>