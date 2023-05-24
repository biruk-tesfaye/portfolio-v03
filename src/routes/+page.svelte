<script>
	// import 'https://cpwebassets.codepen.io/assets/embed/ei.js';

	import Gradient from '$lib/assets/gradient.png';
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

	import GugutLogo from '$lib/assets/gugut-logo.png';
	import LogoCollection from '$lib/assets/logo-collection.png';
	import Biking from '$lib/assets/biking.png';

	let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<div class="h-[1024px] w-full absolute top-0 left-0 -z-10">
	<div class="h-[1024px] w-full overflow-hidden absolute top-0 left-0">
		<img src={Gradient} alt="gradient" class="object-cover transform scale-150" />
	</div>
	<div>
		<div class="h-[314px] w-[148px] absolute top-0 right-[466px] bg-[#F4FFF2]" />
		<div class="h-[682px] w-[148px] absolute top-0 right-[233px] bg-[#F4FFF2]" />
		<div class="h-[1024px] w-[148px] absolute top-0 right-0 bg-[#F4FFF2]" />
	</div>
</div>

<div class="h-[1024px] w-full max-w-7xl relative pl-24 pt-44 flex flex-col justify-between">
	<!-- hero section -->
	<div class="max-w-2xl">
		<h1 class="mb-11 text-2xl font-semibold leading-6 relative z-50 text-black/75">Hello, 👋</h1>

		<div class="relative">
			<div class="w-[233px] h-[202px] bg-[#F4FFF2]/50 absolute -top-14 -left-6" />
		</div>

		<div class="flex flex-col space-y-8 relative z-50">
			<h1 class="text-5xl leading-[58px] font-extrabold text-black/80 flex flex-col">
				<span class="inline-block">I'M A WEB</span>
				<span class="inline-block">DEVELOPER AND</span>
				<span class="inline-block">LOGO DESIGNER BASED</span>
				<span class="inline-block">IN ADDIS ABABA, ETHIOPIA</span>
			</h1>

			<p class="text-black/70 m-0 text-lg leading-6">
				Lorem ipsum dolor sit amet consectetur. Nulla amet consequat semper volutpat proin fusce
				purus tristique. Velit urna cursus cursus vitae id. Eget sit turpis proin a sollicitudin
				mollis nibh malesuada. Viverra lobortis eu bibendum velit orci lobortis facilisis. Ut at
				tellus convallis mauris ipsum.
			</p>

			<div>
				<a href="mailto:biruktesfayeve@gmail.com" class="inline-block py-1 bg-[#F4FFF2]">
					<button class=" text-[#1A1A1A] text-2xl leading-6 font-semibold align-middle">
						Say hi. ✉️
					</button>
				</a>
			</div>
		</div>
	</div>

	<!-- logos -->
	<div class="flex gap-8 items-center py-4">
		<Svelte class="w-[159px] h-[39px]" />
		<Tailwindcss class="w-[202px] h-[25px]" />
		<Typescript class="w-[140px] h-[35px]" />
		<Docker class="w-[146px] h-[37px]" />
		<Nodejs class="w-[112px] h-[34px]" />
		<Nextjs class="w-[92px] h-[92px]" />
		<Illustrator class="w-16 h-16" />
	</div>
</div>

<!-- Blog section -->

<div class="pl-24 mt-36">
	<h2 class="font-semibold text-xl">Blog / Stories</h2>
	<h3 class="text-base font-light">
		Sharing stories and the <span class="bg-[#CDF4EC]">WEB</span>
	</h3>

	<div class="pt-16 pb-28">
		<div class="flex gap-16">
			<div class="w-[352px] h-[324px] shadow-blog-card" />
			<div class="w-[352px] h-[324px] shadow-blog-card" />
			<div class="w-[352px] h-[324px] shadow-blog-card" />
		</div>
	</div>
</div>

<!-- interest and hobbies -->

<div class="pl-24 mt-36 pb-28">
	<h2 class="font-semibold text-xl mt-6">Interests / Hobbies</h2>
	<h3 class="text-base font-light">
		Things i do, when I’m not <span class="bg-[#CDF4EC]">coding</span>
	</h3>

	<div class="pt-16 pb-28">
		<div class="flex gap-16">
			<!-- Gugut Podcast -->
			<div class="w-[352px] flex flex-col gap-6">
				<img
					class="shadow-blog-card"
					src={GugutLogo}
					alt="Gugut podcast logo"
					width="352"
					height="324"
				/>
				<div class="">
					<div>
						<h2 class="font-semibold text-xl mb-2">Gugut Podcast</h2>
						<h3 class="text-base font-light">Producer and director</h3>
					</div>
					<div class="flex mt-6">
						<span class="bg-[#CDF4EC] text-xl mr-1">Play.</span>
						<PlaySquare />
					</div>
				</div>
			</div>

			<!-- Logo Collection -->
			<div class="w-[352px] flex flex-col gap-6">
				<img
					class="shadow-blog-card"
					src={LogoCollection}
					alt="Gugut podcast logo"
					width="352"
					height="486"
				/>
				<div class="">
					<div>
						<h2 class="font-semibold text-xl mb-2">Logo Designing</h2>
						<h3 class="text-base font-light">I like to create logo from concepts</h3>
					</div>
					<div class="flex mt-6">
						<span class="bg-[#CDF4EC] text-xl mr-1">Browse.</span>
						<Behance />
					</div>
				</div>
			</div>

			<!-- Biking -->
			<div class="w-[352px] flex flex-col gap-6">
				<img
					class="shadow-blog-card"
					src={Biking}
					alt="Gugut podcast logo"
					width="352"
					height="648"
				/>
				<div class="">
					<div>
						<h2 class="font-semibold text-xl mb-2">Logo Designing</h2>
						<h3 class="text-base font-light">I like to create logo from concepts</h3>
					</div>
					<div class="flex mt-6">
						<span class="bg-[#CDF4EC] text-xl mr-1">Strava.</span>
						<Strava />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Experimental area -->

<div class="pl-24 pt-6">
	<h2 class="font-semibold text-xl mt-6">Experiments / Playground</h2>
	<h3 class="text-base font-light">
		Trying new and experimental <span class="bg-[#CDF4EC]">things</span>
	</h3>

	<div class="pt-16 px-8">
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
	</div>
</div>

<!-- Social links -->

<div class="pl-24 mt-64">
	<h2 class="font-semibold text-xl mt-6">Links / Social</h2>
	<h3 class="text-base font-light">
		Where to find me <span class="bg-[#CDF4EC]">online</span>
	</h3>
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
