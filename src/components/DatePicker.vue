<template>
	<div id="date-picker">
		<div class="date">
			<div class="years">
				<div class="year">{{ year }} سال</div>
				<div class="next" @click="incYear"></div>
				<div class="prev" @click="decYear"></div>
			</div>

			<div class="months">
				<div class="month">{{ months[month].title }}</div>
				<div class="next" @click="incMonth"></div>
				<div class="prev" @click="decMonth"></div>
			</div>

			<div>{{ result }}</div>


			<div class="days">
				<div class="day" v-for="n in days" :key="n" :class="{select : (n === day)}" @click="changeDay(n)">
					{{ n }}
				</div>

			</div>

			<div class="buttons">
				<div class="button">تایید</div>
				<div class="button">انصراف</div>
			</div>

		</div>

	</div>
</template>

<script>
    export default {
        name: "DatePicker",

        data() {
            return {
                year: 1399,
                month: 0,
                day: 1,

                result: '',

                months: [
                    {title: 'فروردین', number: 1},
                    {title: 'اردیبهشت', number: 2},
                    {title: 'خرداد', number: 3},
                    {title: 'تیر', number: 4},
                    {title: 'مرداد', number: 5},
                    {title: 'شهریور', number: 6},
                    {title: 'مهر', number: 7},
                    {title: 'آبان', number: 8},
                    {title: 'آذر', number: 9},
                    {title: 'دی', number: 10},
                    {title: 'بهمن', number: 11},
                    {title: 'اسفند', number: 12},
                ],
            }
        },

        props: {
            value: String
        },

        computed: {
            days: function () {
                const vm = this;
                if (vm.month > 5) {
                    return 30;
                } else {
                    return 31;
                }
            }
        },


        methods: {

            incYear() {
                const vm = this;
                vm.year++;
                vm.result = vm.year + '/' + (vm.month + 1) + '/' + vm.day;
                vm.$emit('input', vm.result)
            },
            decYear() {
                const vm = this;
                vm.year--;
                vm.result = vm.year + '/' + (vm.month + 1) + '/' + vm.day;
                vm.$emit('input', vm.result)
            },


            incMonth() {
                const vm = this;
                vm.month++;
                if (vm.month > 11) {
                    vm.month = 0;
                }

                vm.result = vm.year + '/' + (vm.month + 1) + '/' + vm.day;
                vm.$emit('input', vm.result);
            },


            decMonth() {
                const vm = this;
                vm.month--;
                if (vm.month < 0) {
                    vm.month = 11;
                }
                vm.result = vm.year + '/' + (vm.month + 1) + '/' + vm.day;
                vm.$emit('input', vm.result);
            },

            changeDay(day) {
                const vm = this;
                vm.day = day;
                vm.result = vm.year + '/' + (vm.month + 1) + '/' + vm.day;
                vm.$emit('input', vm.result);
            }
        }
    }
</script>

<style scoped lang="scss">

	#date-picker {

		user-select: none;

		html, body {
			/*color: #2c3e50;*/
		}

		.date {
			border: 1px solid blue;
			color: blue;
			padding: 20px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;

			.years {
				border: 1px solid aqua;
				padding: 5px 20px;
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;
				margin-bottom: 10px;
				width: 100%;

				.year {
				}

				.next {
					border: 3px solid blue;
					width: 20px;
					height: 20px;
					transform: rotate(45deg);
					border-left: none;
					border-bottom: none;
					position: absolute;
					right: 10px;
					top: 5px;
					cursor: pointer;
				}

				.prev {
					border: 3px solid blue;
					width: 20px;
					height: 20px;
					transform: rotate(-135deg);
					border-left: none;
					border-bottom: none;
					position: absolute;
					left: 10px;
					top: 5px;
					cursor: pointer;
				}
			}

			.months {
				border: 1px solid aqua;
				padding: 5px 20px;
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;
				margin-bottom: 10px;
				width: 100%;

				.month {
				}

				.next {
					border: 3px solid blue;
					width: 20px;
					height: 20px;
					transform: rotate(45deg);
					border-left: none;
					border-bottom: none;
					position: absolute;
					right: 10px;
					top: 5px;
					cursor: pointer;
				}

				.prev {
					border: 3px solid blue;
					width: 20px;
					height: 20px;
					transform: rotate(-135deg);
					border-left: none;
					border-bottom: none;
					position: absolute;
					left: 10px;
					top: 5px;
					cursor: pointer;
				}

			}


			.days {
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				align-items: center;
				border: 1px solid aqua;
				padding: 20px 0;

				.day {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 30px;
					height: 30px;
					/*margin: 5px;*/
					flex: 0 0 auto;
					border-radius: 50%;
					transition: all .5s;
					cursor: pointer;


					&:hover {
						background-color: orange !important;
						color: #ffffff !important;
						font-weight: bold;
					}

					/*&:active {*/
					/*	background-color: red;*/
					/*	color: #ffffff;*/
					/*}*/

					&.select {
						background-color: blue;
						color: #ffffff;
					}
				}

				margin-bottom: 30px;


			}

			.buttons {
				display: flex;
				flex-direction: row-reverse;
				justify-content: space-between;
				align-items: center;
				width: 100%;


				.button {
					flex: 0 0 auto;
					border: 1px solid aqua;
					color: blue;
					padding: 5px 30px;
					transition: all .2s;
					cursor: pointer;
					border-radius: 5px;

					&:hover {
						background-color: blue;
						color: #ffffff;

					}

				}
			}
		}


	}


</style>