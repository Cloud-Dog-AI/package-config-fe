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

// @cloud-dog/config — UT1.6 useConfig.

import { describe, expect, it } from 'vitest';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ConfigProvider } from '../../../src/context/ConfigProvider';
import { BaseRuntimeConfigSchema } from '../../../src/schema';
import { useConfig } from '../../../src/context/useConfig';

function View() {
  const cfg = useConfig<{ API_BASE_URL: string }>();
  return <div>{cfg.API_BASE_URL}</div>;
}

describe('UT1.6_UseConfig', () => {
  it('returns config value', async () => {
    (globalThis as any).__RUNTIME_CONFIG__ = { ENV: 'dev', API_BASE_URL: 'https://example.com' };
    render(
      <ConfigProvider schema={BaseRuntimeConfigSchema}>
        <View />
      </ConfigProvider>
    );
    expect(await screen.findByText('https://example.com')).toBeInTheDocument();
  });
});
