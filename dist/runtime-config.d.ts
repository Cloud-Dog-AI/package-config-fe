import { z } from 'zod';
declare const RuntimeConfigSchema: z.ZodObject<{
    ENV: z.ZodDefault<z.ZodString>;
    API_BASE_URL: z.ZodDefault<z.ZodString>;
    OIDC_ISSUER: z.ZodOptional<z.ZodString>;
    OIDC_CLIENT_ID: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    ENV: string;
    API_BASE_URL: string;
    OIDC_ISSUER?: string | undefined;
    OIDC_CLIENT_ID?: string | undefined;
}, {
    ENV?: string | undefined;
    API_BASE_URL?: string | undefined;
    OIDC_ISSUER?: string | undefined;
    OIDC_CLIENT_ID?: string | undefined;
}>;
export type RuntimeConfig = z.infer<typeof RuntimeConfigSchema>;
export declare function loadRuntimeConfig(): RuntimeConfig;
export {};
//# sourceMappingURL=runtime-config.d.ts.map