<script>
	import Docker from '$lib/assets/icons/docker.svg.svelte';
	import Illustrator from '$lib/assets/icons/illustrator.svg.svelte';
	import Nextjs from '$lib/assets/icons/nextjs.svg.svelte';
	import Nodejs from '$lib/assets/icons/node.svg.svelte';
	import Svelte from '$lib/assets/icons/svelte.svg.svelte';
	import Tailwindcss from '$lib/assets/icons/tailwindcss.svg.svelte';
	import Typescript from '$lib/assets/icons/typescript.svg.svelte';

	import Upwork from '$lib/assets/icons/upwork.svg.svelte';

	import Gradient from '$lib/components/gradient/gradient.svelte';
	import Stair from '$lib/components/stair.svelte';

	import Footer from '$lib/components/footer/footer.svelte';
	import SocialLinks from '$lib/components/social-links/social-links.svelte';
	import ExperimentalArea from '$lib/components/experimental-area/experimental-area.svelte';
	import Hobbies from '$lib/components/hobbies/hobbies.svelte';
	import Blog from '$lib/components/blog/blog.svelte';

	let y = 0;
</script>

<svelte:window bind:scrollY={y} />

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

<Blog />

<!-- interest and hobbies -->
<Hobbies />

<!-- Experimental area -->

<ExperimentalArea />

<!-- Social links -->

<SocialLinks />

<!-- footer -->
<Footer />
