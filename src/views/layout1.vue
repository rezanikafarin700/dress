<template>
	<div id="layout" @click="showFalse">
		<header id="header">
			<div class="wrapper">


				<div class="con-logo">
					<div class="logo">
						<img src="images/logo.svg">
					</div>
				</div>
			</div>
		</header>


		<div class="parent-nav">
			<div class="wrapper">
				<nav>

					<div class="btn-search">
						<div class="line"></div>
						<div class="search-icon">
							<svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25px" height="25px">
								<path fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M21 4A16 16 0 1 0 21 36A16 16 0 1 0 21 4Z"/>
								<path fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" d="M32.229 32.229L45.5 45.5"/>
							</svg>
						</div>
					</div>
					<div class="selects">
						<div class="select" v-for="(select,index) of selects" :key="index" @click.stop="exactOption(index)">
							{{ select.title }}

							<!--							<multi-menu :show="select.show" :options="array[index]" style="top: 45px; right: 0"/>-->
							<!--							<dropdown-menu :show="select.show" :options="array[index]" style="right: 0; top : 45px"/>-->

						</div>
					</div>

					<div class="icons">
						<div class="icon" title="حساب کاربری">
							<img src="icons/account.png">
						</div>
						<div class="icon" title="سبد خرید">
							<img src="icons/shopping.png">
						</div>
						<div class="icon" title="خدمات مشتریان">
							<img src="icons/headset.png">
						</div>
					</div>

					<div class="hamburger-icon" @click.stop="show = !show">
						<div class="con">
							<div class="line"></div>
							<div class="line"></div>
							<div class="line"></div>
						</div>
						<dropdown-menu :show="show" :options="options" style="left: 0; top : 45px"/>
					</div>


				</nav>

			</div>
		</div>


		<!--		<div class="wrapper">-->
		<!--			<multi-menu :show="showGlobal" :options="array[indexGlobal]" style="top: 0; right: 0"/>-->
		<!--		</div>-->


		<div class="wrapper">
			{{ indexGlobal }} /
			{{ selects[indexGlobal].show }}
			<div class="con-menu">
				<multi-menu :show="selects[indexGlobal].show" :options="selects[indexGlobal].array" style="top: 0; right: 0"/>
			</div>
		</div>


		<div class="promotion">
			<div class="text"> خرید کنید مدیسو بگیرید پایان هر ماه کد هدیه 100% دریافت کنید</div>
			<div class="con-a">
				<a href="#">بیشتر بدانید</a>
			</div>
		</div>


		<section id="content">

			<router-view/>

		</section>

		<div class="wrapper">
			<div id="footer">
				<div class="footer-card">

					<div class="img-footer">
						<img src="images/modiseh.svg">
					</div>
					<div class="img-footer">
						<img src="images/img-footer1.png">
					</div>
					<div class="img-footer">
						<img src="images/img-footer2.png">
					</div>
					<div class="img-footer">
						<img src="images/img-footer2.png">
					</div>

				</div>

				<div class="footer-card">footer 2</div>
				<div class="footer-card">footer 3</div>
				<div class="footer-card">footer 4</div>
			</div>
		</div>

		<div id="footer-end">
			<div class="wrapper">
				<div class="copyright">
					تمام حقوق محفوظ است
					&copy;
					1399
					سامانه خوش لباس میباشد
				</div>
			</div>

		</div>

		<div class="warning">
			<div>
				<div class="icon" :style="{backgroundImage:`url(icons/headphoneWarning.png)`}"></div>
				<!--				<div class="scroll-up" onclick="window.document.body.style.backgroundColor = 'yellow';alert('sssss')"></div>-->
				<div class="scroll-up" :class="{is : showHelp}" @click="scrollUp"></div>
			</div>
			<div class="icon" :style="{backgroundImage:`url(icons/headphoneWarning.png)`}"></div>
		</div>


	</div>
</template>

<script>

    // window.onscroll = function() {myFunction()};
    //
    // function myFunction() {
    //     if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    //         document.querySelector(".scroll-up").classList.add('is');
    //     } else {
    //         document.querySelector(".scroll-up").classList.remove('is');
    //     }
    // }

    import DropdownMenu from "../components/DropdownMenu";
    import MultiMenu from "../components/MultiMenu";

    export default {
        name: "layout",

        components: {
            DropdownMenu,
            MultiMenu
        },

        data() {
            return {
                selects: [
                    {
                        title: 'جدیدترین ها', show: false, array: [
                            [
                                {title: 'فایل', path: 'test'},
                                {title: 'ویرایش', path: 'index'},
                                {title: 'نمایش', path: 'test1'},
                                {title: 'درج اطلاعات کاربر', path: ''},
                                {title: 'حذف', path: ''},
                                {title: 'پایان', path: ''},
                                {title: 'خرج', path: ''},
                            ],
                            [
                                {title: 'a1', path: 'a1-path'},
                                {title: 'a2', path: 'a2-path'},
                                {title: 'a3', path: 'a3-path'},
                            ],
                            [
                                {title: 'b1', path: 'b1-path'},
                                {title: 'b2', path: 'b2-path'},
                                {title: 'b3', path: 'b3-path'},
                            ],
                            [
                                {title: 'c1', path: 'c1-path'},
                                {title: 'c2', path: 'c2-path'},
                                {title: 'c3', path: 'c3-path'},
                            ],
                            [
                                {title: 'd1', path: 'd1-path'},
                                {title: 'd2', path: 'd2-path'},
                                {title: 'd3', path: 'd3-path'},
                            ], [
                                {title: 'd1', path: 'd1-path'},
                                {title: 'd2', path: 'd2-path'},
                                {title: 'd3', path: 'd3-path'},
                            ],

                        ]
                    },
                    {
                        title: 'مردانه', show: false, array: [
                            [
                                {title: 'فایل', path: 'test'},
                                {title: 'ویرایش', path: 'index'},
                                {title: 'نمایش', path: 'test1'},
                                {title: 'درج اطلاعات کاربر', path: ''},
                                {title: 'حذف', path: ''},
                            ],
                            [
                                {title: 'a1', path: 'a1-path'},
                                {title: 'a2', path: 'a2-path'},
                                {title: 'a3', path: 'a3-path'},
                            ],
                            [
                                {title: 'b1', path: 'b1-path'},
                                {title: 'b2', path: 'b2-path'},
                                {title: 'b3', path: 'b3-path'},
                            ],
                            [
                                {title: 'c2', path: 'c2-path'},
                                {title: 'c3', path: 'c3-path'},
                            ],
                            [
                                {title: 'd1', path: 'd1-path'},
                                {title: 'd2', path: 'd2-path'},
                                {title: 'd3', path: 'd3-path'},
                            ],


                        ]
                    },
                    {
                        title: 'زنانه', show: false, array: [
                            [
                                {title: 'حذف', path: ''},
                                {title: 'پایان', path: ''},
                                {title: 'خرج', path: ''},
                            ],
                            [
                                {title: 'a1', path: 'a1-path'},
                                {title: 'a2', path: 'a2-path'},
                                {title: 'a3', path: 'a3-path'},
                            ],
                            [
                                {title: 'b1', path: 'b1-path'},
                                {title: 'b2', path: 'b2-path'},
                                {title: 'b3', path: 'b3-path'},
                            ],
                            [
                                {title: 'c1', path: 'c1-path'},
                                {title: 'c2', path: 'c2-path'},
                                {title: 'c3', path: 'c3-path'},
                            ],
                            [
                                {title: 'd1', path: 'd1-path'},
                                {title: 'd2', path: 'd2-path'},
                                {title: 'd3', path: 'd3-path'},
                            ], [
                                {title: 'd1', path: 'd1-path'},
                                {title: 'd2', path: 'd2-path'},
                                {title: 'd3', path: 'd3-path'},
                            ],

                        ]
                    },
                    {
                        title: 'بچه گانه', show: false, array: [
                            [
                                {title: 'a1', path: 'a1-path'},
                                {title: 'a2', path: 'a2-path'},
                                {title: 'a3', path: 'a3-path'},
                            ],
                            [
                                {title: 'b1', path: 'b1-path'},
                                {title: 'b2', path: 'b2-path'},
                                {title: 'b3', path: 'b3-path'},
                            ],
                            [
                                {title: 'c1', path: 'c1-path'},
                                {title: 'c2', path: 'c2-path'},
                                {title: 'c3', path: 'c3-path'},
                            ],
                            [
                                {title: 'd1', path: 'd1-path'},
                                {title: 'd2', path: 'd2-path'},
                                {title: 'd3', path: 'd3-path'},
                            ], [
                                {title: 'd1', path: 'd1-path'},
                                {title: 'd2', path: 'd2-path'},
                                {title: 'd3', path: 'd3-path'},
                            ],

                        ]
                    },
                    {title: 'سفر', show: false, array: []},
                    {title: 'لوازم ورزشی', show: false, array: []},


                ],

                showHelp: false,

                show: false,

                showGlobal: false,
                indexGlobal: 0,


                options: [
                    {title: 'فایل', path: 'test'},
                    {title: 'ویرایش', path: 'index'},
                    {title: 'نمایش', path: 'test1'},
                    {title: 'درج اطلاعات کاربر', path: ''},
                    {title: 'حذف', path: ''},
                    {title: 'پایان', path: ''},
                    {title: 'خرج', path: ''},
                ],


                array: [
                    [
                        {title: 'فایل', path: 'test'},
                        {title: 'ویرایش', path: 'index'},
                        {title: 'نمایش', path: 'test1'},
                        {title: 'درج اطلاعات کاربر', path: ''},
                        {title: 'حذف', path: ''},
                        {title: 'پایان', path: ''},
                        {title: 'خرج', path: ''},
                    ],
                    [
                        {title: 'a1', path: 'a1-path'},
                        {title: 'a2', path: 'a2-path'},
                        {title: 'a3', path: 'a3-path'},
                    ],
                    [
                        {title: 'b1', path: 'b1-path'},
                        {title: 'b2', path: 'b2-path'},
                        {title: 'b3', path: 'b3-path'},
                    ],
                    [
                        {title: 'c1', path: 'c1-path'},
                        {title: 'c2', path: 'c2-path'},
                        {title: 'c3', path: 'c3-path'},
                    ],
                    [
                        {title: 'd1', path: 'd1-path'},
                        {title: 'd2', path: 'd2-path'},
                        {title: 'd3', path: 'd3-path'},
                    ], [
                        {title: 'd1', path: 'd1-path'},
                        {title: 'd2', path: 'd2-path'},
                        {title: 'd3', path: 'd3-path'},
                    ],
                ],
            }
        },


        methods: {
            scrollUp() {
                document.documentElement.scrollTop = 0;

            },

            showFalse() {
                const vm = this;
                vm.show = false;
                vm.selects[vm.indexGlobal].show = false;
                for (let i = 0; i < vm.selects.length; i++) {
                    vm.selects[i].show = false;
                }
            },

            exactOption(index) {
                const vm = this;
                for (let i = 0; i < vm.selects.length; i++) {
                    if (i === index) {
                        vm.selects[i].show = !vm.selects[i].show;
                    } else {
                        vm.selects[i].show = false;
                    }
                }

                vm.indexGlobal = index;
            }


        },

        mounted() {
            const vm = this;
            window.onscroll = function () {
                if (document.documentElement.scrollTop > 350) {
                    vm.showHelp = true;
                } else {
                    vm.showHelp = false;
                }
            }
        }

    }
</script>

<style scoped lang="scss">

	#layout {
		background-color: #ffffff;
		position: relative;


		.con-menu {
			position: relative;


		}

		header {
			padding-top: 20px;
			border-top: 3px solid orangered;

			.con-logo {
				display: flex;
				justify-content: center;
				align-items: center;

				.logo {
					width: 166px;
					height: 33px;

					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
						object-position: center;
					}

				}

			}
		}


	}

	.parent-nav {

		position: sticky;
		top: 0;
		z-index: 100;
		background-color: #fff;
		padding: 5px;
		box-shadow: inset 0 -1px 1px 0 #999;
		border-color: #999999;

		nav {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 48px;
			flex-direction: row-reverse;
			position: relative;

			.btn-search {
				width: 126px;
				height: 100%;
				position: relative;
				cursor: pointer;


				.line {
					width: 100%;
					height: 1px;
					background-color: #000000;
					position: absolute;
					bottom: 3px;
					left: 0;
				}

				.search-icon {
					position: absolute;
					right: 0;
					top: 15px;
				}

			}

			.selects {
				display: flex;
				flex-direction: row-reverse;
				justify-content: space-between;
				align-items: center;

				.select {
					padding: 5px 15px;
					white-space: nowrap;
					cursor: pointer;
					user-select: none;
					position: relative;

					&:before {
						content: '';
						width: 0;
						height: 2px;
						background-color: orangered;
						position: absolute;
						bottom: 0;
						left: 50%;
						right: 50%;
						opacity: 0;
						transition: all .5s;
					}

					&:hover {
						&:before {
							width: 100%;
							left: 0;
							right: 0;
							opacity: 1;
						}
					}

					&:not(:hover) {
						&:before {
							width: 0;
							height: 0;
							opacity: 0;
						}
					}

				}

			}


			.icons {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 140px;

				.icon {
					width: 20px;
					height: 20px;

					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
						object-position: center;
					}
				}
			}
		}
	}

	.promotion {
		background-color: #ff6961;
		color: #ffffff;
		display: flex;
		flex-direction: row-reverse;
		justify-content: center;
		flex-wrap: wrap;
		align-items: center;
		padding: 10px;
		font-size: 14px;

		.text {
			margin-left: 5px;

		}

		.con-a {
			position: relative;

			> a {
				text-decoration: none;
				color: #ffffff;
				border-bottom: 1px solid #ffffff;
				padding-bottom: 2px;

			}

			&:before {
				content: '';
				width: 0;
				height: 1px;
				position: absolute;
				bottom: -3px;
				right: 0;
				background-color: darkblue;
				transition: all .3s;
			}

			&:hover {
				&:before {
					width: 100%;
				}
			}


		}

	}


	#content {
		min-height: 100vh;
	}


	#footer {
		margin-top: 50px;
		border: {
			bottom: 1px solid #000000;
			top: 1px solid #000000;
		};
		padding: 40px 0;
		display: flex;
		flex-direction: row-reverse;
		flex-wrap: wrap;

		.footer-card {
			width: calc(25% - 1px);
			margin: -1px;
			flex: 0 0 auto;
			border-left: 1px solid #505252;
			padding: 20px 40px;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;

			&:last-child {
				border-left: none;
			}

			.img-footer {
				width: calc(50% - 10px);
				margin: 5px;
				flex: 1 1 auto;

				&:first-child {
					width: calc(100% - 1px);
				}
			}
		}
	}

	#footer-end {
		margin-top: auto;
		/*white-space: nowrap;*/
		padding: 12px 0;

	}


	.warning {

		display: flex;
		justify-content: space-between;
		flex-direction: row-reverse;
		position: sticky;
		bottom: 70px;
		padding: 0 50px;


		.icon {
			width: 60px;
			height: 60px;
			background-position: bottom 1000px;
			background-size: 100%;
			display: inline-block;
			cursor: pointer;
			transition: all .2s;
			transform: scale(1);

			&:hover {
				transform: scale(1.1);
			}
		}
	}

	.scroll-up {
		width: 36px;
		height: 36px;
		border: 2px solid #ff6961;;
		position: relative;
		margin-top: auto;
		display: inline-block;
		cursor: pointer;
		transition: all .5s;
		opacity: 0;

		&:after {
			content: '';
			position: absolute;
			top: 10px;
			right: 0;
			left: 0;
			bottom: 0;
			margin: auto;
			width: 15px;
			height: 15px;
			transform: rotate(45deg);
			border: 2px solid #ff6961;;
			border-right: none;
			border-bottom: none;
			transition: all .5s;

		}

		&:hover {
			background-color: #ff6961;

			&:after {
				border-color: #ffffff;
			}
		}

		&.is {
			opacity: 1;
		}
	}


	@media (min-width: 1350px) {

		.wrapper {
			width: 1250px;
		}
	}

	@media (min-width: 1250px) and (max-width: 1349px) {
		.wrapper {
			width: 1150px;
		}
	}

	@media (min-width: 1100px) and (max-width: 1250px) {
		.wrapper {
			width: 1050px;
		}
	}

	@media (min-width: 950px) and (max-width: 1099px) {
		.wrapper {
			width: 900px;


			nav {
				.btn-search {

				}

				.selects {
					display: none;
				}

				.icons {
					display: none;
				}
			}

			.hamburger-icon {
				display: block;
			}


			#footer {

				.footer-card {
					width: calc(50% - 1px);
				}
			}


		}
		.warning {
			padding-left: 25px;
		}

	}

	@media (min-width: 800px) and (max-width: 949px) {
		.wrapper {
			width: 750px;

			nav {
				.btn-search {

				}

				.selects {
					display: none;
				}

				.icons {
					display: none;
				}
			}

			.hamburger-icon {
				display: block;
			}

			#footer {

				.footer-card {
					width: calc(50% - 1px);
				}
			}

		}

	}

	@media (min-width: 650px) and (max-width: 799px) {
		.wrapper {
			width: 600px;


			nav {
				.btn-search {

				}

				.selects {
					display: none;
				}

				.icons {
					display: none;
				}
			}

			.hamburger-icon {
				display: block;
			}


			#footer {

				.footer-card {
					width: calc(50% - 1px);
				}
			}


		}

	}

	@media (min-width: 500px) and (max-width: 649px) {
		.wrapper {
			width: 450px;

			nav {
				.btn-search {

				}

				.selects {
					display: none;
				}

				.icons {
					display: none;
				}
			}

			.hamburger-icon {
				display: block;
			}

			#footer {

				.footer-card {
					width: calc(100% - 1px);
				}
			}

		}

	}

	@media (min-width: 400px) and (max-width: 500px) {
		.wrapper {
			width: 350px;

			nav {
				.btn-search {

				}

				.selects {
					display: none;
				}

				.icons {
					display: none;
				}
			}

			.hamburger-icon {
				display: block;
			}


			#footer {

				.footer-card {
					width: calc(100% - 1px);
				}
			}

		}
	}

	@media (max-width: 400px) {
		.wrapper {
			width: 300px;

			nav {
				.btn-search {

				}

				.selects {
					display: none;
				}

				.icons {
					display: none;
				}
			}


			.hamburger-icon {
				display: block;
			}


			#footer {

				.footer-card {
					width: calc(100% - 1px);
				}
			}

		}
	}

	.hamburger-icon {
		width: 40px;
		height: 40px;
		border: 1px solid #000000;
		position: relative;
		cursor: pointer;
		transition: all .5s;
		display: none;

		.con {
			position: absolute;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
			margin: auto;
			width: 25px;
			height: 25px;
			display: flex;
			flex-wrap: wrap;
			align-items: center;

			.line {
				width: 100%;
				height: 5px;
				border-radius: 2px;
				background-color: #000000;
				/*margin: 2px;*/
			}
		}
	}


</style>