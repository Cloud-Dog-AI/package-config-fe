import { z } from "zod";
export declare const BaseRuntimeConfigSchema: z.ZodObject<{
    ENV: z.ZodDefault<z.ZodEnum<["dev", "staging", "production"]>>;
    API_BASE_URL: z.ZodString;
    OIDC_ISSUER: z.ZodOptional<z.ZodString>;
    OIDC_CLIENT_ID: z.ZodOptional<z.ZodString>;
    AUTH_MODE: z.ZodDefault<z.ZodEnum<["cookie", "oidc"]>>;
}, "strip", z.ZodTypeAny, {
    ENV: "dev" | "staging" | "production";
    API_BASE_URL: string;
    AUTH_MODE: "cookie" | "oidc";
    OIDC_ISSUER?: string | undefined;
    OIDC_CLIENT_ID?: string | undefined;
}, {
    API_BASE_URL: string;
    ENV?: "dev" | "staging" | "production" | undefined;
    OIDC_ISSUER?: string | undefined;
    OIDC_CLIENT_ID?: string | undefined;
    AUTH_MODE?: "cookie" | "oidc" | undefined;
}>;
export type BaseRuntimeConfig = z.infer<typeof BaseRuntimeConfigSchema>;
//# sourceMappingURL=schema.d.ts.map