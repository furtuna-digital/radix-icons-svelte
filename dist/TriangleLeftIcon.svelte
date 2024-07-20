<script>
  let { size = 15, color = "currentColor", ...props } = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	viewBox="0 0 15 15"
	fill="none"
	{...props}
>
  <path d="M9 4L9 11L4.5 7.5L9 4Z" fill={color} />
</svg>