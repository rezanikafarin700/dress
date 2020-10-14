<template>
	<div id="multi-menu" :style="{height : heightMenu}">
		<div class="cards" ref="cards">
			<div class="card" v-for="(n,index) of options.length" :key="index">
				<div class="items">
					<div class="item" v-for="(item,j) of options[index]" :key="j" @click="router(item.path)">
						{{ item.title }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "MultiMenu",

        props: {
            options: Array,
            show: Boolean
        },

        data() {
            return {
                heightMenu: '0'
            }
        },

        watch: {
            show: function () {
                const vm = this;
                if(vm.show)
                {
                    vm.heightMenu = vm.$refs.cards.clientHeight + "px";
                }
            else
                {
                    vm.heightMenu = "0";
                }
            }
        },

        methods: {
            router(path) {
                alert(path)
            }
        }
    }
</script>

<style scoped lang="scss">

	#multi-menu {
		position: absolute;
		background-color: cadetblue;
		z-index: 2000;
		width: 100%;
		overflow: hidden;
		transition: all .5s;


		.cards {
			display: flex;
			flex-direction: row-reverse;
			flex-wrap: wrap;
			justify-content: space-between;
			align-items: flex-start;
			background-color: greenyellow;
			transition: all .5s;

			.card {
				width: calc(20% - 1px);
				border: 1px solid #000000;
				display: flex;
				justify-content: flex-start;
				flex-direction: row-reverse;
				transition: all .5s;

				.items {
					background-color: red;
					display: inline-block;
					transition: all .5s;

					.item {
						white-space: nowrap;
						text-align: right;
						background-color: orange;
						cursor: pointer;
						position: relative;
						transition: all .5s;

						&:after {
							content: '';
							position: absolute;
							bottom: 0;
							left: 50%;
							right: 50%;
							width: 0;
							height: 2px;
							background-color: red;
							opacity: 0;
							transition: all .5s;
						}

						&:hover {
							color: red;

							&:after {
								opacity: 1;
								width: 100%;
								left: 0;
								right: 0;
							}
						}
					}
				}
			}
		}
	}

</style>