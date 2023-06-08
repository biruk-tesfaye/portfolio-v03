<script lang="ts">
	import Github from '$lib/assets/icons/github.svg.svelte';
	import Twitter from '$lib/assets/icons/twitter.svg.svelte';
	import Linkedin from '$lib/assets/icons/linkedin.svg.svelte';
	import Instagram from '$lib/assets/icons/instagram.svg.svelte';
	import Codepen from '$lib/assets/icons/codepen.svg.svelte';
	import BehanceSocial from '$lib/assets/icons/behance-social.svg.svelte';
	import Gitlab from '$lib/assets/icons/gitlab.svg.svelte';
</script>

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
