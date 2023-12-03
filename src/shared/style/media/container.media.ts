type Breakpoint = "desktop" | "tablet" | "phone";

const sizes: Record<Breakpoint, number> = {
  desktop: 1024,
  tablet: 740,
  phone: 576,
};
// style/media.ts (sizes 정의 후에 추가)
export function mediaQuery<T extends Breakpoint>(
  breakpoint: T,
  styles: string
): string {
  return `@media (max-width: ${sizes[breakpoint]}px) { ${styles} }`;
}
