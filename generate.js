import fs from "node:fs/promises"
import path from "node:path"

const iconsDir = path.join(process.cwd(), "icons")
const outputDir = path.join(process.cwd(), "dist")
const entryPoint = "main.js"

async function generateIconComponent(file) {
  const content = await fs.readFile(path.join(iconsDir, file), "utf-8")
  const componentName = path.basename(file, ".svg")
    .split("-")
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join("")

  const svelte = `
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
  ${content.replace(/<svg[^>]*>|<\/svg>/g, "").replace(/fill="[^"]*"/g, `fill={color}`).trim()}
</svg>
`.trim()

  await fs.writeFile(path.join(outputDir, `${componentName}.svelte`), svelte)
}

async function generateIconTypes(file) {
  const content = await fs.readFile(path.join(iconsDir, file), "utf-8")
  const componentName = path.basename(file, ".svg")
    .split("-")
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join("")

  const types = `
export default ${componentName};

type ${componentName} = SvelteComponent<$$ComponentProps, {
    [evt: string]: CustomEvent<any>;
}, {}> & {
    $$bindings?: "" | undefined;
};

declare const ${componentName}: $$__sveltets_2_IsomorphicComponent<{
    size?: number;
    color?: string;
} & Record<string, unknown>, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;

type $$ComponentProps = {
    size?: number;
    color?: string;
} & Record<string, unknown>;

interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import("svelte").ComponentConstructorOptions<Props>): import("svelte").SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports;
    z_$$bindings?: Bindings;
}
`.trim()

  await fs.writeFile(path.join(outputDir, `${componentName}.svelte.d.ts`), types)
}

async function generateEntryPoint(files) {
  const exports = files.map(file => {
    const componentName = path.basename(file, ".svg")
      .split("-")
      .map(s => s.charAt(0).toUpperCase() + s.slice(1))
      .join("")
    return `export { default as ${componentName} } from "./${componentName}.svelte";`
  })

  await fs.writeFile(path.join(outputDir, entryPoint), exports.join("\n"))
}

async function main() {
  const files = await fs.readdir(iconsDir)
  await Promise.all([
    files.map(generateIconComponent),
    files.map(generateIconTypes),
    generateEntryPoint(files)
  ])
  console.log(`Generated ${files.length} icon components.`)
}

main().catch(console.error)