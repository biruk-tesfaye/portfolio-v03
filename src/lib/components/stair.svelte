<script>
	let divHeights = [314, 682, 1024];
	let divX = [466, 233, 0];
	let scrollY = 0;
</script>

<svelte:window bind:scrollY />

{#each divHeights as height, index}
	<div
		class="stair-div bg-[#F4FFF2]"
		style="
        position: absolute; 
        height: {height}px;
        width: 148px;
        z-index: {-index};
        right: {divX[index]}px;
      "
	/>
{/each}
