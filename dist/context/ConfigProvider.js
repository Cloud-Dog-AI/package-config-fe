import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Copyright 2026 Cloud-Dog, Viewdeck Engineering Limited
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// @cloud-dog/config — React context provider for runtime config.
import * as React from "react";
import { BaseRuntimeConfigSchema } from "../schema";
import { readRuntimeConfig } from "../reader";
import { validateConfig } from "../validator";
import { ConfigContext } from "./ConfigContext";
export function ConfigProvider({ schema, children, }) {
    const [error, setError] = React.useState(null);
    const [value, setValue] = React.useState(null);
    React.useEffect(() => {
        try {
            const raw = readRuntimeConfig();
            const parsed = validateConfig((schema ?? BaseRuntimeConfigSchema), raw);
            setValue(parsed);
        }
        catch (e) {
            setError(e);
        }
        // Config is read once at startup.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (error) {
        return (_jsxs("div", { role: "alert", className: "p-6 font-mono text-sm", children: [_jsx("div", { className: "mb-2 font-semibold", children: "Invalid runtime configuration" }), _jsx("pre", { className: "whitespace-pre-wrap", children: error.message })] }));
    }
    if (!value)
        return null;
    return (_jsx(ConfigContext.Provider, { value: value, children: children }));
}
