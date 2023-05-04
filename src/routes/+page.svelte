<script>
	import Gradient from '$lib/assets/gradient.png';
	import Docker from '$lib/assets/icons/docker.svg.svelte';
	import Illustrator from '$lib/assets/icons/illustrator.svg.svelte';
	import Nextjs from '$lib/assets/icons/nextjs.svg.svelte';
	import Nodejs from '$lib/assets/icons/node.svg.svelte';
	import Svelte from '$lib/assets/icons/svelte.svg.svelte';
	import Tailwindcss from '$lib/assets/icons/tailwindcss.svg.svelte';
	import Typescript from '$lib/assets/icons/typescript.svg.svelte';

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
