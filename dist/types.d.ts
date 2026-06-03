import type { z } from "zod";
export declare class ConfigError extends Error {
    name: string;
}
export type RuntimeConfigBase = {
    ENV: "dev" | "staging" | "production";
    API_BASE_URL: string;
    OIDC_ISSUER?: string;
    OIDC_CLIENT_ID?: string;
    AUTH_MODE?: "cookie" | "oidc";
};
export type RuntimeConfig<TSchema extends z.ZodTypeAny> = z.infer<TSchema>;
//# sourceMappingURL=types.d.ts.map