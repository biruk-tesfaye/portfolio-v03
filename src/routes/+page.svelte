<script>
	import Gradient from '$lib/assets/gradient.png';

	let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<div class="h-[1024px] w-full absolute top-0 left-0 bg-red-200 -z-10">
	<div class="h-[1024px] w-full overflow-hidden absolute top-0 left-0">
		<img src={Gradient} alt="gradient" class="object-cover transform scale-150" />
	</div>
	<div>
		<div class="h-[314px] w-[148px] absolute top-0 right-[466px] bg-[#F4FFF2]" />
		<div class="h-[682px] w-[148px] absolute top-0 right-[233px] bg-[#F4FFF2]" />
		<div class="h-[1024px] w-[148px] absolute top-0 right-0 bg-[#F4FFF2]" />
	</div>
</div>

<div class="min-h-[1024px] w-full relative">
	<h1>Hello, 👋</h1>

	<h1>
		I'M A WEB
		<span>DEVELOPER AND</span>
		<span>LOGO DESIGNER BASED</span>
		<span>IN ADDIS ABABA, ETHIOPIA</span>
	</h1>

	<p>
		Lorem ipsum dolor sit amet consectetur. Nulla amet consequat semper volutpat proin fusce purus
		tristique. Velit urna cursus cursus vitae id. Eget sit turpis proin a sollicitudin mollis nibh
		malesuada. Viverra lobortis eu bibendum velit orci lobortis facilisis. Ut at tellus convallis
		mauris ipsum porta.
	</p>
</div>
