export default ImageIcon;

type ImageIcon = SvelteComponent<$$ComponentProps, {
    [evt: string]: CustomEvent<any>;
}, {}> & {
    $$bindings?: "" | undefined;
};

declare const ImageIcon: $$__sveltets_2_IsomorphicComponent<{
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