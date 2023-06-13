<script lang="ts">
	import Gradient from '$lib/components/gradient/gradient.svelte';
</script>

<div class=" max-w-full h-[1024px]">
	<Gradient />
	<div class=" w-full h-[1024px] flex justify-center items-center px-8">
		<div class="text-black/75 text-center">
			<p>
				Designed on
				<a href="https://figma.com" target="_blank" title="Figma">
					<span class="relative group">
						<span>Figma</span>
						<span
							class="bg-[#CDF4EC] transition-[height] absolute w-full group-hover:h-full bottom-0 left-0 -z-10 h-[11px]"
						/>
					</span>
				</a>
			</p>
			<p>
				Assembled in
				<a href="https://code.visualstudio.com/" target="_blank" title="VS Code">
					<span class="relative group">
						<span>VS Code</span>
						<span
							class="bg-[#CDF4EC] transition-[height] absolute w-full group-hover:h-full bottom-0 left-0 -z-10 h-[11px]"
						/>
					</span>
				</a>
				using
				<a href="https://kit.svelte.dev/" target="_blank" title="Svelte">
					<span class="relative group">
						<span>SvelteKit</span>
						<span
							class="bg-[#CDF4EC] transition-[height] absolute w-full group-hover:h-full bottom-0 left-0 -z-10 h-[11px]"
						/>
					</span>
				</a>
				and
				<a href="https://tailwindcss.com/" target="_blank" title="Tailwind CSS">
					<span class="relative group">
						<span>Tailwind CSS.</span>
						<span
							class="bg-[#CDF4EC] transition-[height] absolute w-full group-hover:h-full bottom-0 left-0 -z-10 h-[11px]"
						/>
					</span>
				</a>
			</p>
		</div>
	</div>

	<p class="text-center p-8">
		&copy; <span class="text-[#5174ff]">2023</span> Biruk H. | Made
		<span class="text-[#ff4151]">with</span>
		❤️
		<span class="text-[#ff4151]">in</span> Ethiopia
	</p>
</div>
