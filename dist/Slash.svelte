<script>
  let { size = 15, color = "currentColor", ...props } = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	viewBox="0 0 {size} {size}"
	fill="none"
	{...props}
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.10876 14L9.46582 1H10.8178L5.46074 14H4.10876Z"
    fill={color}
  />
</svg>