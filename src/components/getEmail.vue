<template>
	<div id="get-email">
		<div class="global-btn" @click="output('male')">مرد</div>
		<div class="global-btn" @click="output('female')">زن</div>
		<div class="parent-input" tabindex="0">
			<input type="email" ref="inp"/>
		</div>

	</div>
</template>

<script>
    export default {
        name: "getEmail",

        props: {
            value: Object
        },

        data() {
            return {
                obj: {gender: '', email: ''}
            }
        },

        methods: {
            output(gender) {
                let vm = this;
                vm.obj.gender = gender;
                vm.obj.email = vm.$refs.inp.value;
                window.console.log(vm.obj);
                return vm.$emit('input', vm.obj);
            }
        }
    }
</script>

<style scoped lang="scss">


	#get-email {
		display: flex;
		justify-content: center;


		.parent-input {
			position: relative;
			display: block;
			width: 250px;

			&:before {
				content: 'ایمیل';
				position: absolute;
				bottom: 0;
				right: 0;
				z-index: 1;
				color: #999999;

			}

			&:after {
				content: '';
				position: absolute;
				bottom: -25px;
				left: 0;
				width: 100%;
				height: 0;
				background-color: red;
			}


			> input {
				width: 100%;
				position: absolute;
				left: 0;
				bottom: 0;
				border: none;
				outline: none;
				border-bottom: 1px solid #000000;
				z-index: 0;
				transition: all .5s;
				padding: 4px 0;
				background-color: transparent;

				&:focus {
					box-shadow: inset 0 -2px 0 0 #ff6961;
					border-color: #ff6961;
				}
			}

		}


	}


</style>