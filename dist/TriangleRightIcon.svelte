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
  <path d="M6 11L6 4L10.5 7.5L6 11Z" fill={color} />
</svg>