// styles/index.ts
import { styles as mainStyles } from "./_mainstyle";
import { styles as joinStyles } from "./_joinstyle";

// We export them so you can use them easily across the app
export { mainStyles, joinStyles };

// If you want a default 'styles' object to stop the error in signin.tsx:
export const styles = joinStyles;
