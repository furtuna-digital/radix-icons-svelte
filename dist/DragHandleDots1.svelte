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
  <circle cx="4.5" cy="2.5" r=".6" fill={color} />
  <circle cx="4.5" cy="4.5" r=".6" fill={color} />
  <circle cx="4.5" cy="6.499" r=".6" fill={color} />
  <circle cx="4.5" cy="8.499" r=".6" fill={color} />
  <circle cx="4.5" cy="10.498" r=".6" fill={color} />
  <circle cx="4.5" cy="12.498" r=".6" fill={color} />
  <circle cx="6.5" cy="2.5" r=".6" fill={color} />
  <circle cx="6.5" cy="4.5" r=".6" fill={color} />
  <circle cx="6.5" cy="6.499" r=".6" fill={color} />
  <circle cx="6.5" cy="8.499" r=".6" fill={color} />
  <circle cx="6.5" cy="10.498" r=".6" fill={color} />
  <circle cx="6.5" cy="12.498" r=".6" fill={color} />
  <circle cx="8.499" cy="2.5" r=".6" fill={color} />
  <circle cx="8.499" cy="4.5" r=".6" fill={color} />
  <circle cx="8.499" cy="6.499" r=".6" fill={color} />
  <circle cx="8.499" cy="8.499" r=".6" fill={color} />
  <circle cx="8.499" cy="10.498" r=".6" fill={color} />
  <circle cx="8.499" cy="12.498" r=".6" fill={color} />
  <circle cx="10.499" cy="2.5" r=".6" fill={color} />
  <circle cx="10.499" cy="4.5" r=".6" fill={color} />
  <circle cx="10.499" cy="6.499" r=".6" fill={color} />
  <circle cx="10.499" cy="8.499" r=".6" fill={color} />
  <circle cx="10.499" cy="10.498" r=".6" fill={color} />
  <circle cx="10.499" cy="12.498" r=".6" fill={color} />
</svg>