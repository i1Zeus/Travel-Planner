import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCss from "unocss/vite";
import { presetUno, presetAttributify, presetIcons, presetTagify} from "unocss";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        UnoCss({
            presets: [presetUno(), presetAttributify(), presetIcons(), presetTagify()],
        }),
    ],
});
