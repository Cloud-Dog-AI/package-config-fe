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

// @cloud-dog/config — UT1.9 error boundary behaviour.

import { describe, expect, it } from 'vitest';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ConfigProvider } from '../../../src/context/ConfigProvider';
import { BaseRuntimeConfigSchema } from '../../../src/schema';

describe('UT1.9_ErrorBoundary', () => {
  it('renders an error message instead of children', async () => {
    (globalThis as any).__RUNTIME_CONFIG__ = { ENV: 'dev', API_BASE_URL: 'not-a-url' };
    render(
      <ConfigProvider schema={BaseRuntimeConfigSchema}>
        <div>child</div>
      </ConfigProvider>
    );
    expect(await screen.findByRole('alert')).toBeInTheDocument();
  });
});
