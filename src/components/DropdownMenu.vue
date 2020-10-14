<template>
	<div id="dropdown">

		<div class="box" :style="{height: itemsHeight}">
			<div class="items" ref="items">
				<div class="item" v-for="(option,index) of options" :key="index" @click="router(index)">
					{{ option.title }}
				</div>
			</div>
		</div>

	</div>
</template>

<script>
    export default {
        name: "DropdownMenu",

        props: {
            show: Boolean,

            options: Array
        },

        data() {
            return {
                h: '0',
                itemsHeight: '0',
            }
        },

        watch: {
            show: function () {
                const vm = this;
                if (!vm.show) {
                    vm.itemsHeight = "0";

                } else {
                    vm.itemsHeight = vm.$refs.items.clientHeight + "px";
                    // vm.itemsHeight =  document.querySelector('.items').clientHeight + "px";
                }
            }

        },

        methods: {
            router(index) {
                const vm = this;
                vm.$router.push({name: vm.options[index].path})
            }
        }


    }
</script>

<style scoped lang="scss">

	#dropdown {
		position: absolute;

		.box {
			height: 0;
			overflow: hidden;
			transition: all .5s;
			border-radius: 3px;

			.items {
				background-color: #f9edff;
				direction: rtl;
				text-align: right;
				overflow: hidden;
				padding: 20px 50px;


				.item {
					white-space: nowrap;
					padding: 0 10px 0;
					user-select: none;
					position: relative;
					height: 40px;
					transition:  all .5s;

					&:after{
						content: '';
						position: absolute;
						left: 50%;
						right: 50%;
						bottom: 10px;
						width: 0;
						height: 2px;
						background-color: red;
						opacity: 0;
						transition: all .5s;
					}

					&:hover {
						color: red;

						&:after{
							opacity: 1;
							width: 100%;
							left: 0;
							right: 0;
						}
					}
					&:not(:hover){
						&:after{
							height: 0;
							width: 0;
							opacity: 0;
						}
					}
				}
			}
		}

	}
</style>