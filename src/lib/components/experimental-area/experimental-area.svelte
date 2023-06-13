<script lang="ts">
	let w: number;
	let containerSnap: HTMLDivElement;

	const handleScroll = (scrollWidth: number) => {
		containerSnap.scrollLeft += scrollWidth;
	};
</script>

<div class="mx-auto max-w-7xl px-8 pt-6">
	<h2 class="font-semibold text-xl mt-6">Experiments / Playground</h2>
	<h3 class="text-base font-light">
		Trying new and experimental <span class="bg-[#CDF4EC]">things</span>
	</h3>

	<div class="pt-8 md:pt-16 md:px-8">
		<div
			bind:this={containerSnap}
			class="pb-8 flex snap-x overflow-x-scroll gap-8 md:gap-16 lg:gap-32 container-snap"
		>
			<iframe
				bind:clientWidth={w}
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

		<div class="flex items-center justify-center gap-4 pt-4">
			<button on:click={() => handleScroll(-w)} class="w-4 h-4 bg-[#CDF4EC] focus:bg-[#41FF8D]" />
			<button on:click={() => handleScroll(w)} class="w-4 h-4 bg-[#CDF4EC] focus:bg-[#41FF8D]" />
		</div>
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
		scroll-behavior: smooth;
	}
</style>
