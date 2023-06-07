<script>
	let className = '';

	export { className as class };
</script>

<div class=" max-w-full overflow-hidden bg-blur absolute -z-10 {className}">
	<div class=" w-screen min-h-[1024px] relative bg-block">
		<!-- circle -->
		<div class="rounded-full w-[813px] h-[751px] absolute top-[159px] left-[371px] bg-[#F4FFF2]" />

		<!-- bottom right -->
		<div class="bottom-right-rec" />

		<!-- bottom left -->
		<div class="bottom-left-rec" />

		<!-- top right -->
		<div class="top-right-rec" />

		<!-- top left -->
		<div class="top-left-rec" />
	</div>
</div>

<style>
	.bg-blur {
		background: #ffffff;
		filter: blur(400px);
		overflow: hidden !important;
	}
	.bg-block {
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(5px);
	}

	.bottom-right-rec {
		position: absolute;
		width: 430.93px;
		height: 508.94px;
		left: 778px;
		top: 718px;

		background: #b5beb2;
		transform: rotate(-45.48deg);
	}

	.bottom-left-rec {
		position: absolute;
		width: 685.23px;
		height: 695.84px;
		left: -48.59px;
		top: 718.67px;

		background: #0ed7b5;
		transform: rotate(-45.48deg);
	}

	.top-right-rec {
		position: absolute;
		width: 463.46px;
		height: 423.65px;
		left: 813px;
		top: 287px;

		background: #f4fff2;
		transform: rotate(-45.48deg);
	}

	.top-left-rec {
		position: absolute;
		width: 470.09px;
		height: 474.6px;
		left: 0px;
		top: 257.4px;

		background: #41ff8d;
		transform: rotate(-45.48deg);
	}
</style>
