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

// @cloud-dog/config — UT1.1 runtime reader.

import { describe, expect, it } from 'vitest';
import { readRuntimeConfig } from '../../../src/reader';

describe('UT1.1_RuntimeReader', () => {
  it('reads window.__RUNTIME_CONFIG__', () => {
    (globalThis as any).__RUNTIME_CONFIG__ = { ENV: 'dev' };
    expect(readRuntimeConfig()).toEqual({ ENV: 'dev' });
  });
});
