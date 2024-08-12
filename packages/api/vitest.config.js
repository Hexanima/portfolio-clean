import {defineConfig} from "vitest/config"

export default defineConfig({
    test: {
        timeout: 30000,
        hookTimeout: 50000
    }
})