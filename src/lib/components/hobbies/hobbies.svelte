<script lang="ts">
	import GugutLogo from '$lib/assets/gugut-logo.png?w=352&format=webp&srcset';
	import LogoCollection from '$lib/assets/logo-collection.png?w=352&format=webp&srcset';
	import Biking from '$lib/assets/biking.png??w=352&format=webp&srcset';

	import PlaySquare from '$lib/assets/icons/play-square.svg.svelte';
	import Behance from '$lib/assets/icons/behance.svg.svelte';
	import Strava from '$lib/assets/icons/strava.svg.svelte';
</script>

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
									class="bg-[#CDF4EC] transition-[height] absolute w-full group-hover:h-full bottom-0 left-0 -z-10 h-[11px]"
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
									class="bg-[#CDF4EC] transition-[height] absolute w-full group-hover:h-full bottom-0 left-0 -z-10 h-[11px]"
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
									class="bg-[#CDF4EC] transition-[height] absolute w-full group-hover:h-full bottom-0 left-0 -z-10 h-[11px]"
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
