import * as React from "react";
import type { z } from "zod";
export interface ConfigProviderProps<TSchema extends z.ZodTypeAny> {
    schema?: TSchema;
    children: React.ReactNode;
}
export declare function ConfigProvider<TSchema extends z.ZodTypeAny>({ schema, children, }: ConfigProviderProps<TSchema>): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=ConfigProvider.d.ts.map