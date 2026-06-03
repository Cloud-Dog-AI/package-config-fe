import { z } from 'zod';
const RuntimeConfigSchema = z.object({
    ENV: z.string().default('dev'),
    API_BASE_URL: z.string().url().default('http://localhost:5173'),
    OIDC_ISSUER: z.string().url().optional(),
    OIDC_CLIENT_ID: z.string().optional(),
});
export function loadRuntimeConfig() {
    // Load from window.__RUNTIME_CONFIG__ if present, else from import.meta.env
    const fromWindow = globalThis.__RUNTIME_CONFIG__ ?? {};
    const fromEnv = import.meta.env ?? {};
    const merged = { ...fromEnv, ...fromWindow };
    return RuntimeConfigSchema.parse(merged);
}
