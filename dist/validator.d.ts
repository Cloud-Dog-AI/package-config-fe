import type { z } from "zod";
export declare function warnIfSecrets(config: Record<string, unknown>): void;
export declare function validateConfig<T>(schema: z.ZodSchema<T>, raw: unknown): T;
//# sourceMappingURL=validator.d.ts.map