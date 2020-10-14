<template>
	<div id="index">


		<div class="slider">
			<template>
				<agile :dots="false" :navButtons="false">
					<div class="slide" v-for="(i,index) of images" :key="index">
						<div class="con-img">
							<img :src="`../images/`+`${i}`">
						</div>
					</div>


				</agile>
			</template>
		</div>

		<div class="wrapper">
			<div class="advertising">
				<div class="card" :style="{backgroundImage:`url(images/app.jpg)`}">

					<div class="message">
						<div class="con-icon">
							<div class="post-icon" :style="{backgroundImage:`url(icons/telegram3.png)`}"></div>
							<h2>کد تخفیف 25000 تومانی</h2>
						</div>
						<h5>ویژه خرید از اپلیکیشن مدیسه</h5>
						<div class="global-btn">دانلود و نصب</div>
					</div>

				</div>

				<div class="card" :style="{backgroundImage:`url(images/app2.jpg)`}">
					<div class="message">
						<div class="con-icon">
							<div class="post-icon" :style="{backgroundImage:`url(icons/post.png)`}"></div>
							<h2>با عضویت در خبرنامه</h2>
						</div>
						<h5>۳۵۰۰۰ تومان تخفیف اولین خرید</h5>
						<get-email v-model="person"/>
					</div>

				</div>
			</div>
		</div>

		<section class="main">
			<div class="wrapper">
				<div class="main-cards">
					<div class="main-card">

						<div class="slider">
							<template>
								<agile :dots="false" :navButtons="false">
									<div class="slide" v-for="(n,index) in 4" :key="index">
										<div class="bgc-img" :style="{backgroundImage:`url(images/slider/slider${n}.jpg)`}"></div>
									</div>


								</agile>
							</template>
						</div>

					</div>
					<div class="main-card">

						<div class="main-img" :style="{backgroundImage:`url(images/main/main1.jpg)`}">
							<div class="title-text">
								<div class="title">لباس مردانه</div>
								<div class="text">
									<p>پوشاک</p>
									<p>کیف و کفش</p>
									<p>ااکسسوری</p>
									<p>و ...</p>
								</div>
							</div>

						</div>
					</div>

					<div class="main-card">
						<div class="main-img" :style="{backgroundImage:`url(images/main/main2.jpg)`}">
							<div class="title-text">
								<div class="title">لباس مردانه</div>
								<div class="text">
									<p>پوشاک</p>
									<p>کیف و کفش</p>
									<p>اکسسوری</p>
									<p>و ...</p>
								</div>
							</div>
						</div>
					</div>
					<div class="main-card">
						<div class="main-img" :style="{backgroundImage:`url(images/main/main16.jpg)`}">
							<div class="title-text">
								<div class="title">لباس مردانه</div>
								<div class="text">
									<p>پوشاک</p>
									<p>کیف و کفش</p>
									<p>اکسسوری</p>
									<p>و ...</p>
								</div>
							</div>
						</div>
					</div>
					<div class="main-card">
						<div class="main-img" :style="{backgroundImage:`url(images/main/main3.jpg)`}">
							<div class="title-text">
								<div class="title">لباس مردانه</div>
								<div class="text">
									<p>پوشاک</p>
									<p>کیف و کفش</p>
									<p>اکسسوری</p>
									<p>و ...</p>
								</div>
							</div>
						</div>
					</div>

					<div class="main-card">
						<div class="child-item" :style="{backgroundImage:`url(images/main/main4.jpg)`}">
							<div class="overlay">
								<div class="title">لباس مردانه</div>
								<div class="text">
									<p>پوشاک</p>
									<p>کیف و کفش</p>
									<p>اکسسوری</p>
									<p>و ...</p>
								</div>
							</div>
						</div>
						<div class="child-item" :style="{backgroundImage:`url(images/main/main9.jpg)`}">
							<div class="overlay">
								<div class="title">لباس مردانه</div>
								<div class="text">
									<p>پوشاک</p>
									<p>کیف و کفش</p>
									<p>اکسسوری</p>
									<p>و ...</p>
								</div>
							</div>
						</div>
					</div>

					<div class="main-card">
						<div class="main-img" :style="{backgroundImage:`url(images/main/main11.jpg)`}">
							<div class="title-text">
								<div class="title">لباس مردانه</div>
								<div class="text">
									<p>پوشاک</p>
									<p>کیف و کفش</p>
									<p>اکسسوری</p>
									<p>و ...</p>
								</div>
							</div>
						</div>
					</div>

					<div class="main-card">
						<div class="child-item" :style="{backgroundImage:`url(images/main/main12.jpg)`}">
							<div class="overlay">
								<div class="title">لباس مردانه</div>
								<div class="text">
									<p>پوشاک</p>
									<p>کیف و کفش</p>
									<p>اکسسوری</p>
									<p>و ...</p>
								</div>
							</div>
						</div>
						<div class="child-item" :style="{backgroundImage:`url(images/main/main15.jpg)`}">
							<div class="overlay">
								<div class="title">لباس مردانه</div>
								<div class="text">
									<p>پوشاک</p>
									<p>کیف و کفش</p>
									<p>اکسسوری</p>
									<p>و ...</p>
								</div>
							</div>
						</div>
					</div>

					<div class="main-card">
						<div class="main-img" :style="{backgroundImage:`url(images/main/main13.jpg)`}">
							<div class="title-text">
								<div class="title">لباس مردانه</div>
								<div class="text">
									<p>پوشاک</p>
									<p>کیف و کفش</p>
									<p>اکسسوری</p>
									<p>و ...</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<div class="wrapper">
			<div class="services">

				<div class="service">
					<div class="text">
						<h6>ارسال اکسپرس</h6>
						<p>سوپر مارکت در اراک</p>
					</div>
					<div class="icon" :style="{backgroundImage:`url(icons/truck.png)`}"></div>
				</div>

				<div class="service">
					<div class="text">
						<h6>ارسال اکسپرس</h6>
						<p>سوپر مارکت در اراک</p>
					</div>
					<div class="icon" :style="{backgroundImage:`url(icons/truck.png)`}"></div>

				</div>
				<div class="service">
					<div class="text">
						<h6>ارسال اکسپرس</h6>
						<p>سوپر مارکت در اراک</p>
					</div>
					<div class="icon" :style="{backgroundImage:`url(icons/truck.png)`}"></div>

				</div>
				<div class="service">
					<div class="text">
						<h6>ارسال اکسپرس</h6>
						<p>سوپر مارکت در اراک</p>
					</div>
					<div class="icon" :style="{backgroundImage:`url(icons/truck.png)`}"></div>

				</div>
			</div>
		</div>


		<div class="services-global">

			<div class="service-global" v-for="(n,index) in 4" :key="index">
				<div class="img" :style="{backgroundImage:`url(images/s${index}.jpg)`}">
					<div class="overlay"></div>
				</div>
			</div>
		</div>

		<div class="wrapper">
			<div class="elements">
				<div class="parent">
					<div class="child" v-for="(n,index) in 10" :key="index">
						<div class="img" :style="{backgroundImage:`url(images/element/el${n}.png)`}"></div>
						<div class="square"></div>

					</div>
				</div>
			</div>


			<div class="help">
				<div class="help-card">
					<div class="articles">
						<div class="articles-title">
							<div class="articles-text">بلاگ مدیســه</div>
							<div class="articles-square"></div>
						</div>

						<div class="article">
							<div class="con">
								<div class="pic" :style="{backgroundImage: `url(images/img-help1.jpg)`}">
									<div class="ratio"></div>
								</div>
								<div class="text">
									<div class="title">چگونه خوش پوش باشید هفت قانون که هر مرد باید یاد بگیرد</div>
									لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
									گرافیک انامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک انامفهوم از صنعت چاپ، و
									با استفاده از طراحان گرافیک اکه روزنامه و م
								</div>
							</div>
							<div class="con">
								<div class="pic" :style="{backgroundImage: `url(images/img-help2.jpg)`}">
									<div class="ratio"></div>
								</div>
								<div class="text">
									<div class="title">چگونه خوش پوش باشید هفت قانون که هر مرد باید یاد بگیرد</div>
									لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
									گرافیک انامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک انامفهوم از صنعت چاپ، و
									با استفاده از طراحان گرافیک اکه روزنامه و م
								</div>
							</div>
							<div class="con">
								<div class="pic" :style="{backgroundImage: `url(images/img-help3.jpg)`}">
									<div class="ratio"></div>
								</div>
								<div class="text">
									<div class="title">چگونه خوش پوش باشید هفت قانون که هر مرد باید یاد بگیرد</div>
									لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
									گرافیک انامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک انامفهوم از صنعت چاپ، و
									با استفاده از طراحان گرافیک اکه روزنامه و م
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="help-card">
					<div class="articles">
						<div class="articles-title">
							<div class="articles-text">راهنمای خرید</div>
							<div class="articles-square"></div>
						</div>
						<div class="article">
							<div style="height: 100px"></div>
							<div class="con">
								<div class="pic" :style="{backgroundImage: `url(images/img-help4.jpg)`}">
									<div class="ratio"></div>
								</div>
								<div class="text">
									<div class="title">چگونه خوش پوش باشید هفت قانون که هر مرد باید یاد بگیرد</div>
									لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
									گرافیک انامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک انامفهوم از صنعت چاپ، و
									با استفاده از طراحان گرافیک اکه روزنامه و م
								</div>
							</div>
							<div class="con">
								<div class="pic" :style="{backgroundImage: `url(images/img-help5.jpg)`}">
									<div class="ratio"></div>
								</div>
								<div class="text">
									<div class="title">چگونه خوش پوش باشید هفت قانون که هر مرد باید یاد بگیرد</div>
									لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
									گرافیک انامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک انامفهوم از صنعت چاپ، و
									با استفاده از طراحان گرافیک اکه روزنامه و م
								</div>
							</div>
							<div class="con">
								<div class="pic" :style="{backgroundImage: `url(images/mmm.jpg)`}">
									<div class="ratio"></div>
								</div>
								<div class="text">
									<div class="title">چگونه خوش پوش باشید هفت قانون که هر مرد باید یاد بگیرد</div>
									لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
									گرافیک انامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک انامفهوم از صنعت چاپ، و
									با استفاده از طراحان گرافیک اکه روزنامه و م
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="help-card">
					<div class="articles">
						<div class="articles-title">
							<div class="articles-text">جدیدترین محصولات</div>
							<div class="articles-square"></div>
						</div>
						<div class="article">
							<div class="new-products">

								<div class="new-product" v-for="(n,index) in 6" :key="index" :style="{backgroundImage : `url(images/p${n}.jpg)`}">
									<div class="new-square"></div>
									<div class="text-product">آرایشی و بهداشتی</div>
								</div>

							</div>
						</div>
					</div>

				</div>
			</div>


			<div class="parent-present">
				<div class="present">
					<div class="present-square"></div>
					<div class="present-title">فروشگاه اینترنتی مدیسه</div>
					<div class="present-square"></div>
				</div>

				<div class="present-red-title">لذت خرید لباس، عطر و لوازم منزل از هزاران مدل و برند</div>


				<div class="present-text">
					فروشگاه اینترنتی مدیسه با استفاده از تجربیات بیش از ۵۰ ساله گروه تجاری گلستان، تمامی آن چه را که
					برای یک سبک زندگی بهتر و سالم تر نیاز دارید به شما عرضه می کند. محصولات مدیسه، شامل پوشاک (زنانه،
					مردانه، بچه گانه، ورزشی، لباس زیر و...)، کیف و کفش، لوازم آرایشی و بهداشتی (پاک کننده، تقویت کننده،
					آرایش صورت، مو، ناخن و...)، عطر و ادکلن ، لوازم منزل و دکوراسیون (لوازم برقی، ظروف پذیرایی و
					آشپزخانه، کالای خواب و حمام و...)، لوازم الکترونیک (گوشی و قاب موبایل، ایرفون و ایرپاد، اسپیکر،
					پاوربانک و...)، کتاب، بازی و سرگرمی (برای گروه های سنی مختلف)، ملزومات حیوانات خانگی، و سوپرمارکت
					(کالاهای اساسی، نوشیدنی، لبنیات، میوه و سبزیجات ارگانیک، نان، شیرینیجات، مواد شوینده و...)، محصولاتی
					بااصالت، به روز و باکیفیت اند که همگی براساس نیازهای مشتریان مدیسه و در راستای ارتقاء سبک زندگی آن
					ها گلچین شده اند. مدیسه در کنار ارائه محصولاتی از برندهای معتبر خارجی، تلاش دارد با طراحان و
					تولیدکنندگان داخلی همکاری پویا و ماندگار داشته باشد و محصولات ایرانی را مطابق با سلیقه و معیار مخاطب
					ایرانی در اختیار وی قرار دهد. با اپلیکیشن مدیسه خرید خود را در سریع ترین زمان ممکن، هر جا که هستید،
					انجام دهید. با عضویت در خبرنامه مدیسه اولین کسی باشید که از جشنواره های تخفیفی روزانه باخبر می شوید.
					همچنین با خرید از مدیسه، کوپن تخفیف ماهانه دریافت کنید. هر زمان در صورت نارضایتی از کالای خریداری
					شده، تا 7روز کاری می توانید کالا را بدون هیچ هزینه ای عودت دهید و مبلغ پرداختی را به طور کامل دریافت
					کنید.
				</div>

			</div>


			<div class="parent-present">
				<div class="present">
					<div class="present-square"></div>
					<div class="present-title">خبـرنامـه</div>
					<div class="present-square"></div>
				</div>
				<div class="present-red-title" style="color:#9c9f9f;">
					لبرای عضویت در خبرنامه و استفاده از تخفیف <span style="color:red">۳۵٫۰۰۰ تومانی</span> ایمیل خود را
					وارد نمایید
				</div>

			</div>


			<get-email v-model="person"/>


		</div>

	</div>
</template>

<script>
    import {VueAgile} from 'vue-agile';
    import getEmail from "../components/getEmail";

    export default {
        name: "index",
        components: {
            agile: VueAgile,
            getEmail
        },

        data() {
            return {
                images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],

                person: {}
            }
        },

        methods: {
            a() {
            }
        },

    }
</script>

<style scoped lang="scss">

	#index {

		.slider {
			margin-bottom: 14px;

			.bgc-img {
				width: 100%;
				height: 523px;
				background-size: cover;
				background-position: center;
			}

			.con-img {
				height: 460px;
				width: 100%;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					object-position: center;
				}
			}
		}

		.advertising {
			display: flex;
			flex-direction: row-reverse;
			flex-wrap: wrap;
			margin: -7px;

			.card {
				width: calc(50% - 14px);
				flex: 0 0 auto;
				margin: 7px;
				height: 145px;
				background-position: center center;
				background-size: 100%;
				background-repeat: no-repeat;
				display: flex;
				justify-content: center;
				align-items: center;

				&:first-child {
					cursor: pointer;
				}

				.message {
					.con-icon {
						display: flex;
						justify-content: center;
						align-items: center;
						flex-direction: row-reverse;

						.post-icon {
							background-position: center;
							background-size: cover;
							width: 20px;
							height: 15px;
							display: inline-block;
							margin-left: 3px;
						}

						h2 {
							margin: 0;
							font-size: 1.1em;
							font-weight: bold;
							text-align: right;
							direction: rtl;
						}
					}

					h5 {
						text-align: center;
						direction: rtl;
						font-size: .9em;
						margin: 0 0 .6em;
					}

				}

			}
		}

		.main {

			margin-top: 10px;

			.main-cards {

				display: flex;
				flex-wrap: wrap;
				margin: -7px;

				.main-card {
					width: calc(33.33% - 14px);
					flex: 1 1 auto;
					height: 523px;
					margin: 7px;
					position: relative;

					.main-img {
						background-size: cover;
						background-position: center;
						cursor: pointer;
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;

						.title-text {
							position: absolute;
							left: 0;
							top: 0;
							width: 100%;
							height: 100%;
							background-color: rgba(0, 0, 0, .4);
							transition: all .5s;
							opacity: 0;
							direction: rtl;
							text-align: right;
							padding: 10px;

							.title {
								font-size: 1em;
								color: #ffffff;
								font-weight: normal;
								text-rendering: optimizeLegibility;
							}

							.text {
								border-top: 1px solid #ffffff;
								padding: 5px;
								color: #ffffff;
								display: inline-block;

								> p {
									font-size: .812rem;
									margin: 0;
								}
							}
						}

					}

					&:hover {
						.title-text {
							opacity: 1;
						}
					}


					&:nth-child(3n) {
						width: 230px;
					}

					&:nth-last-child(2), &:nth-child(6), &:nth-child(7) {
						display: flex;
						flex-direction: column;
						justify-content: space-between;


						.child-item {
							width: 100%;
							height: calc(50% - 7px);
							flex: 0 0 auto;
							background-position: center;
							background-size: cover;
							cursor: pointer;
							position: relative;
							background-color: orange;

							.overlay {
								position: absolute;
								top: 0;
								left: 0;
								background-color: rgba(0, 0, 0, .4);
								width: 100%;
								height: 100%;
								opacity: 0;
								transition: all .5s;
								direction: rtl;
								text-align: right;
								padding: 10px;

								.title {
									font-size: 1em;
									color: #ffffff;
									font-weight: normal;
									text-rendering: optimizeLegibility;
								}

								.text {
									border-top: 1px solid #ffffff;
									padding: 5px;
									color: #ffffff;
									display: inline-block;

									> p {
										font-size: .812rem;
										margin: 0;
									}
								}
							}


							&:hover {
								.overlay {
									opacity: 1;
								}
							}


							&:last-child {
								margin: 0
							}
						}

					}
				}

			}
		}

	}

	.services {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		align-items: center;
		padding: 40px 0;
		position: relative;


		.service {
			width: calc(25% - 14px);
			flex: 1 1 auto;
			border-left: 1px solid #000000;
			display: flex;
			justify-content: center;
			cursor: pointer;
			position: relative;
			transition: all .5s;

			&:hover {
				color: red;
			}

			&:last-child {
				border-left: none;
			}

			.icon {
				width: 30px;
				height: 30px;
				background-position: bottom 1000px;
				background-size: 100%;
				margin-left: 10px;
				margin-top: auto;
			}

			.text {
				font-size: .9em;

				> h6, > p {
					margin: 0;
				}
			}
		}

	}


	.services-global {
		width: 100%;
		height: 300px;
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		align-items: center;
		background-color: yellowgreen;
		padding: 20px 0;
		position: relative;
		margin-bottom: 50px;


		.service-global {
			width: calc(25% - 14px);
			flex: 1 1 auto;
			display: flex;
			justify-content: center;
			background-color: cadetblue;
			transition: all .7s;
			cursor: pointer;
			position: relative;

			.overlay {
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, .5);
				position: absolute;
				top: 0;
				left: 0;
				opacity: 0;
				transition: opacity .7s;

			}

			&:hover {
				width: calc(35% - 14px);

			}

			&:not(:hover) {
				.overlay {
					opacity: 1;
				}

			}


			.img {
				width: 100%;
				height: 300px;
				background-position: center;
				background-size: cover;
			}
		}
	}

	.elements {
		margin-bottom: 50px;

		.parent {
			display: flex;
			flex-wrap: wrap;
			flex-direction: row-reverse;
			margin: -1px;


			.child {
				width: calc(20% - 1px);
				flex: 0 0 auto;
				border: 1px solid #000000;
				border-top: none;
				border-right: none;
				display: flex;
				justify-content: center;
				align-items: center;


				.img {
					width: 50%;
					height: 50%;
					background-size: cover;
					background-position: center;
					background-repeat: no-repeat;

				}

				&:nth-child(5n) {
					border-left: none;
				}

				&:nth-child(n + 6) {
					border-bottom: none;
				}


				.square {
					position: relative;
					padding-top: 50%;

				}
			}
		}
	}

	.help {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		margin: -5px;
		/*background-color: #42b983;*/


		.help-card {
			width: calc(33.3333% - 10px);
			margin: 5px;
			/*border: 2px solid red;*/

			.articles {
				display: flex;
				flex-direction: column;
				flex-wrap: wrap;
				margin: -5px;


				.articles-title {
					display: flex;
					flex-direction: row-reverse;
					justify-content: flex-start;
					align-items: center;
					/*background-color: pink;*/

					.articles-text {
						padding-left: 25px;
						font-weight: bold;

					}

					.articles-square {
						width: 17px;
						height: 17px;
						border: 1px solid #000000;
						position: relative;
						transform: rotate(45deg);
						color: #999999;

						&:before {
							content: '';
							width: 11px;
							height: 11px;
							border: 1px solid #000000;
							position: absolute;
							top: 0;
							left: 0;
							right: 0;
							bottom: 0;
							margin: auto;
						}
					}
				}


				.article {
					width: calc(100% - 10px);
					margin: 5px;
					flex: 0 0 auto;
					/*background-color: green;*/

					.con {
						display: flex;
						flex-direction: row-reverse;
						justify-content: space-between;
						align-items: flex-start;
						word-wrap: break-word;
						margin-bottom: 20px;
						cursor: pointer;

						.pic {
							width: 30%;
							flex: 0 0 auto;
							background-size: cover;
							background-position: center;

							.ratio {
								position: relative;
								padding-top: 100%;
							}

						}

						.text {
							width: calc(70% - 1px);
							flex: 1 1 auto;
							/*background-color: #fff;*/
							direction: rtl;
							text-align: right;
							padding: 10px;
							font-size: .812rem;


							.title {
							}

							&:hover {
								.title {
									color: red;
								}
							}


						}
					}

					.new-products {
						display: flex;
						flex-wrap: wrap;
						flex-direction: row-reverse;
						justify-content: center;
						align-items: center;
						margin: -7px;

						.new-product {
							width: calc(33.333% - 14px);
							flex: 0 0 auto;
							margin: 7px;
							background-size: cover;
							background-position: center;
							/*background-color: #ff6961;*/
							cursor: pointer;

							.new-square {
								position: relative;
								padding-top: 100%;
							}

							.text-product {
								background-color: #fff;


							}

							&:hover {
								.text-product {
									color: red;
								}
							}

						}

					}
				}


			}


		}
	}


	@media (min-width: 1200px) and (max-width: 1300px) {
		#index {
			.wrapper {
				width: 1150px;
			}
		}
	}

	@media (min-width: 1000px) and (max-width: 1200px) {
		#index {


			.wrapper {
				width: 950px;


				.advertising {
					.card {
						width: calc(100% - 14px);
					}
				}
			}

		}
	}

	@media (min-width: 800px) and (max-width: 1000px) {
		#index {

			.services-global {
				flex-wrap: wrap;

				.service-global {
					width: calc(50% - 14px);

					&:hover {
						width: calc(40% - 14px);

					}

				}
			}

			.wrapper {
				width: 750px;

				.advertising {
					.card {
						width: calc(100% - 14px);
					}
				}

				.services{
					flex-wrap: wrap;
					.service{
						width: calc(50% - 14px);
						margin-bottom: 30px;

						&:nth-child(2n){
							border-left: none;
						}
					}
				}
			}
		}
	}

	@media (min-width: 600px) and (max-width: 800px) {
		#index {
			.services-global {
				flex-wrap: wrap;

				.service-global {
					width: calc(50% - 14px);

					&:hover {
						width: calc(40% - 14px);

					}

				}
			}

			.wrapper {
				width: 550px;

				.advertising {
					.card {
						width: calc(100% - 14px);
					}
				}

				.services{
					flex-wrap: wrap;
					.service{
						width: calc(50% - 14px);
						margin-bottom: 30px;

						&:nth-child(2n){
							border-left: none;
						}
					}
				}
			}
		}
	}
	@media (min-width: 500px) and (max-width: 600px) {
		#index {
			.services-global {
				flex-wrap: wrap;

				.service-global {
					width: calc(50% - 14px);

					&:hover {
						width: calc(40% - 14px);

					}

				}
			}

			.wrapper {
				width: 450px;

				.advertising {
					.card {
						width: calc(100% - 14px);
					}
				}
				.services{
					flex-wrap: wrap;
					.service{
						width: calc(50% - 14px);
						margin-bottom: 30px;

						&:nth-child(2n){
							border-left: none;
						}
					}
				}
			}
		}
	}
	@media (min-width: 350px) and (max-width: 500px) {
		#index {
			.services-global {
				flex-wrap: wrap;

				.service-global {
					width: calc(100% - 14px);

					&:hover {
						width: calc(45% - 14px);

					}

				}
			}

			.wrapper {
				width: 300px;

				.advertising {
					.card {
						width: calc(100% - 14px);
					}
				}
				.services{
					flex-wrap: wrap;
					.service{
						width: calc(100% - 14px);
						margin-bottom: 50px;
						border-bottom: 1px solid #000000;
						border-left: none;
					}
				}
			}
		}
	}

</style>