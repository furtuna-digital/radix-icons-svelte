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
  <path d="M4 9H11L7.5 4.5L4 9Z" fill={color} />
</svg>