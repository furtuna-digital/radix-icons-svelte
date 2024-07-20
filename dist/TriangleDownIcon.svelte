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
  <path d="M4 6H11L7.5 10.5L4 6Z" fill={color} />
</svg>