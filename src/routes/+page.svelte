<script>
	import Docker from '$lib/assets/icons/docker.svg.svelte';
	import Illustrator from '$lib/assets/icons/illustrator.svg.svelte';
	import Nextjs from '$lib/assets/icons/nextjs.svg.svelte';
	import Nodejs from '$lib/assets/icons/node.svg.svelte';
	import Svelte from '$lib/assets/icons/svelte.svg.svelte';
	import Tailwindcss from '$lib/assets/icons/tailwindcss.svg.svelte';
	import Typescript from '$lib/assets/icons/typescript.svg.svelte';

	import PlaySquare from '$lib/assets/icons/play-square.svg.svelte';
	import Behance from '$lib/assets/icons/behance.svg.svelte';
	import Strava from '$lib/assets/icons/strava.svg.svelte';

	import GugutLogo from '$lib/assets/gugut-logo.png?w=352&format=webp&srcset';
	import LogoCollection from '$lib/assets/logo-collection.png?w=352&format=webp&srcset';
	import Biking from '$lib/assets/biking.png??w=352&format=webp&srcset';

	import Github from '$lib/assets/icons/github.svg.svelte';
	import Twitter from '$lib/assets/icons/twitter.svg.svelte';
	import Linkedin from '$lib/assets/icons/linkedin.svg.svelte';
	import Instagram from '$lib/assets/icons/instagram.svg.svelte';
	import Codepen from '$lib/assets/icons/codepen.svg.svelte';
	import BehanceSocial from '$lib/assets/icons/behance-social.svg.svelte';
	import Gitlab from '$lib/assets/icons/gitlab.svg.svelte';
	import Upwork from '$lib/assets/icons/upwork.svg.svelte';

	import Gradient from '$lib/components/gradient/gradient.svelte';
	import Stair from '$lib/components/stair.svelte';

	let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<!-- add head for SEO -->

<svelte:head>
	<title>Home | Biruk H.</title>
	<meta name="description" content="Biruk's personal website" />
</svelte:head>

<div class="h-[1024px] w-full absolute top-0 left-0 -z-10">
	<Gradient />

	<div class="hidden md:block">
		<Stair />
	</div>
</div>

<div
	class="h-auto min-h-[1024px] w-full mx-auto max-w-7xl relative px-8 pt-44 flex flex-col justify-between"
>
	<div class="flex items-center absolute right-8 -mt-36">
		<a
			href="https://www.upwork.com/freelancers/~01b7a488ab48061c34"
			target="_blank"
			title="Lets work together!"
		>
			<span class="relative text-xl mr-1 group">
				<span>Hire me.</span>
				<span
					class="bg-[#41FF8D] transition-[height] absolute w-full h-full bottom-0 left-0 -z-10 group-hover:h-[11px]"
				/>
			</span>
		</a>
		<Upwork />
	</div>
	<!-- hero section -->
	<div class="">
		<div class="max-w-2xl">
			<h1 class="mb-8 lg:mb-11 text-2xl font-semibold leading-6 relative z-50 text-black/75">
				Hello, 👋
			</h1>

			<div class="relative">
				<div
					class="w-48 h-[143px] md:w-[187px] md:h-[157px] lg:w-[233px] lg:h-[202px] bg-[#F4FFF2]/50 absolute -top-[43px] lg:-top-14 -left-6"
				/>
			</div>

			<div class="flex flex-col space-y-8 relative z-50">
				<h1
					class="text-3xl leading-[40px] md:text-4xl md:leading-[46px] lg:text-5xl lg:leading-[58px] font-extrabold text-black/80 flex flex-col"
				>
					<span class="inline-block">I'M A WEB</span>
					<span class="inline-block">DEVELOPER AND</span>
					<span class="inline-block">LOGO DESIGNER BASED</span>
					<span class="inline-block">IN ADDIS ABABA, ETHIOPIA</span>
				</h1>

				<p class="text-black/70 m-0 text-base md:text-lg leading-6">
					Lorem ipsum dolor sit amet consectetur. Nulla amet consequat semper volutpat proin fusce
					purus tristique. Velit urna cursus cursus vitae id. Eget sit turpis proin a sollicitudin
					mollis nibh malesuada. Viverra lobortis eu bibendum velit orci lobortis facilisis. Ut at
					tellus convallis mauris ipsum.
				</p>

				<div>
					<a href="mailto:biruktesfayeve@gmail.com" class="inline-block py-1 bg-[#F4FFF2]">
						<button
							class=" text-[#1A1A1A] text-base md:text-2xl leading-6 font-semibold align-middle"
						>
							Say hi. ✉️
						</button>
					</a>
				</div>
			</div>
		</div>
	</div>

	<div class=" flex mt-32 sm:mt-16 md:mt-0 flex-wrap gap-8 items-center md:py-4">
		<Svelte class="max-w-[159px] md:h-[39px] aspect-[calc(159/39)] h-auto" />
		<Tailwindcss class="max-w-[202px] md:h-[25px] aspect-[calc(202/25)] h-auto" />
		<Typescript class="max-w-[140px] md:h-[35px] aspect-[calc(140/35)] h-auto" />
		<Docker class="max-w-[146px] md:h-[37px] aspect-[calc(146/37)] h-auto" />
		<Nodejs class="max-w-[112px] md:h-[34px] aspect-[calc(112/34)] h-auto" />
		<Nextjs class="max-w-[92px] md:h-[92px] aspect-[calc(92/92)] h-auto" />
		<Illustrator class="max-w-16 md:h-16 aspect-[calc(64/64)] h-auto" />
	</div>
</div>

<!-- Blog section -->

<div class="mx-auto max-w-7xl px-8 mt-36">
	<h2 class="font-semibold text-xl">Blog / Stories</h2>
	<h3 class="text-base font-light">
		Sharing stories and the <span class="bg-[#CDF4EC]">WEB</span>
	</h3>

	<div class="pt-16 pb-16 md:pb-28">
		<div class="gap-8 lg:gap-16 grid md:grid-cols-2 lg:grid-cols-3 grid-auto-rows-min-content">
			<div
				class="w-full h-auto aspect-[calc(352/324)] md:max-w-[352px] md:h-[324px] shadow-blog-card"
			/>
			<div
				class="w-full h-auto aspect-[calc(352/324)] md:max-w-[352px] md:h-[324px] shadow-blog-card"
			/>
			<div
				class="w-full h-auto aspect-[calc(352/324)] md:max-w-[352px] md:h-[324px] shadow-blog-card"
			/>
		</div>
	</div>
</div>

<!-- interest and hobbies -->

<div class="mx-auto max-w-7xl px-8 mt-36 pb-16 md:pb-28">
	<h2 class="font-semibold text-xl mt-6">Interests / Hobbies</h2>
	<h3 class="text-base font-light">
		Things i do, when I’m not <span class="bg-[#CDF4EC]">coding</span>
	</h3>

	<div class="pt-16 pb-28">
		<div class=" gap-12 lg:gap-16 grid md:grid-cols-2 lg:grid-cols-3 grid-auto-rows-min-content">
			<!-- Gugut Podcast -->
			<div class="w-full md:max-w-[352px] flex flex-col gap-6">
				<img
					class="shadow-blog-card aspect-[calc(352/324)] md:max-w-[352px] h-auto w-full"
					srcSet={GugutLogo}
					alt="Gugut podcast logo"
					width="352"
					height="324"
				/>
				<div class="">
					<div>
						<h2 class="font-semibold text-xl mb-2">Gugut Podcast</h2>
						<h3 class="text-base font-light">Producer and director</h3>
					</div>
					<div class="flex mt-4 items-center">
						<a
							href="https://youtube.com/gugutpodcast"
							target="_blank"
							title="Gugut Podcast youtube"
						>
							<span class="relative text-xl mr-1 group">
								<span>Play.</span>
								<span
									class="bg-[#CDF4EC] transition-[height] absolute w-full h-full bottom-0 left-0 -z-10 group-hover:h-[11px]"
								/>
							</span>
						</a>
						<PlaySquare />
					</div>
				</div>
			</div>

			<!-- Logo Collection -->
			<div class="w-full md:max-w-[352px] flex flex-col gap-6">
				<img
					class="shadow-blog-card aspect-[352/486] md:max-w-[352px] h-auto w-full"
					srcSet={LogoCollection}
					alt="Gugut podcast logo"
					width="352"
					height="486"
				/>
				<div class="">
					<div>
						<h2 class="font-semibold text-xl mb-2">Logo Designing</h2>
						<h3 class="text-base font-light">I like to create logo from concepts</h3>
					</div>
					<div class="flex mt-4 items-center">
						<a
							href="https://www.behance.net/biruktesfayeve"
							target="_blank"
							title="Behance logo collections"
						>
							<span class="relative text-xl mr-1 group">
								<span>Browse.</span>
								<span
									class="bg-[#CDF4EC] transition-[height] absolute w-full h-full bottom-0 left-0 -z-10 group-hover:h-[11px]"
								/>
							</span>
						</a>
						<Behance />
					</div>
				</div>
			</div>

			<!-- Biking -->
			<div class="w-full mt-0 md:-mt-32 lg:mt-0 md:max-w-[352px] flex flex-col gap-6">
				<img
					class="shadow-blog-card aspect-[352/648] md:max-width-[352px] h-auto w-full"
					srcSet={Biking}
					alt="Gugut podcast logo"
					width="352"
					height="648"
				/>
				<div class="">
					<div>
						<h2 class="font-semibold text-xl mb-2">Biking</h2>
						<h3 class="text-base font-light">This is my new hobby, Mountain Biking</h3>
					</div>
					<div class="flex mt-4 items-center">
						<a
							href="https://www.strava.com/athletes/110356660"
							target="_blank"
							title="Join me on strava"
						>
							<span class="relative text-xl mr-1 group">
								<span>Strava.</span>
								<span
									class="bg-[#CDF4EC] transition-[height] absolute w-full h-full bottom-0 left-0 -z-10 group-hover:h-[11px]"
								/>
							</span>
						</a>
						<Strava />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Experimental area -->

<div class="mx-auto max-w-7xl px-8 pt-6">
	<h2 class="font-semibold text-xl mt-6">Experiments / Playground</h2>
	<h3 class="text-base font-light">
		Trying new and experimental <span class="bg-[#CDF4EC]">things</span>
	</h3>

	<div class="pt-8 md:pt-16 md:px-8">
		<div class="pb-8 flex snap-x overflow-x-scroll gap-32 container-snap">
			<iframe
				class="min-w-[900px] snap-start relative text-center"
				height="452"
				scrolling="no"
				title="card &amp; color chooser with hover"
				src="https://codepen.io/biruktesfayeve/embed/bmwWbx?default-tab=result&theme-id=dark"
				frameborder="no"
				loading="lazy"
				allowtransparency={true}
				allowfullscreen={true}
			>
				See the Pen <a href="https://codepen.io/biruktesfayeve/pen/bmwWbx">
					card &amp; color chooser with hover</a
				>
				by Biruk Tesfaye (<a href="https://codepen.io/biruktesfayeve">@biruktesfayeve</a>) on
				<a href="https://codepen.io">CodePen</a>.
			</iframe>

			<iframe
				class="min-w-[900px]"
				height="452"
				scrolling="no"
				title="Envelope : send a package to your customers 😋😜"
				src="https://codepen.io/biruktesfayeve/embed/JwQYVd?default-tab=result&theme-id=dark"
				frameborder="no"
				loading="lazy"
				allowtransparency={true}
				allowfullscreen={true}
			>
				See the Pen <a href="https://codepen.io/biruktesfayeve/pen/JwQYVd">
					Envelope : send a package to your customers 😋😜</a
				>
				by Biruk Tesfaye (<a href="https://codepen.io/biruktesfayeve">@biruktesfayeve</a>) on
				<a href="https://codepen.io">CodePen</a>.
			</iframe>
		</div>
		<p class="text-sm text-black/80">&#9432; Scroll horizontally</p>
	</div>
</div>

<!-- Social links -->

<div class="mx-auto max-w-7xl px-8 mt-64">
	<h2 class="font-semibold text-xl mt-6">Links / Social</h2>
	<h3 class="text-base font-light">
		Where to find me <span class="bg-[#CDF4EC]">online</span>
	</h3>

	<div class="pt-6 flex flex-wrap gap-4">
		<a
			class="transition-transform duration-150 ease-linear hover:scale-110"
			href="https://gitlab.com/biruktf"
			target="_blank"
			title="Gitlab"
		>
			<Gitlab />
		</a>
		<a
			class="transition-transform duration-150 ease-linear hover:scale-110"
			href="https://github.com/biruk-tesfaye"
			target="_blank"
			title="Github"
		>
			<Github />
		</a>
		<a
			class="transition-transform duration-150 ease-linear hover:scale-110"
			href="https://www.behance.net/biruktesfayeve"
			target="blank"
			title="Behance"
		>
			<BehanceSocial />
		</a>

		<a
			class="transition-transform duration-150 ease-linear hover:scale-110"
			href="https://codepen.io/biruktesfayeve"
			target="_blank"
			title="Codepen"
		>
			<Codepen />
		</a>
		<a
			class="transition-transform duration-150 ease-linear hover:scale-110"
			href="https://linkedin.com/in/biruktesfayeve"
			target="_blank"
			title="Linkedin"
		>
			<Linkedin />
		</a>
		<a
			class="transition-transform duration-150 ease-linear hover:scale-110"
			href="https://instagram.com/biruktesfayeve"
			target="_blank"
			title="Instagram"
		>
			<Instagram />
		</a>
		<a
			class="transition-transform duration-150 ease-linear hover:scale-110"
			href="https://twitter.com/biruktesfayeve"
			target="_blank"
			title="Twitter"
		>
			<Twitter />
		</a>
	</div>
</div>

<!-- footer -->

<div class=" max-w-full h-[1024px]">
	<Gradient />
	<div class=" w-full h-[1024px] flex justify-center items-center px-8">
		<p class="text-base">Designed on Figma Assembled in VS-Code with Sveltekit and tailwindcss</p>
	</div>
</div>

<style>
	/* Hide scrollbar for Chrome, Safari and Opera */
	.container-snap::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.container-snap {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
