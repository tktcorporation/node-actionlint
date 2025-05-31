import { defineConfig } from 'vitest/config';
import path from 'path';

const projectRoot = path.resolve(new URL(import.meta.url).pathname, '..');

export default defineConfig({
  test: {
    setupFiles: ['./jest.setup.js'],
    // transformIgnorePatterns は vitest では通常不要ですが、
    // chalk のように特定の node_modules をトランスフォームする必要がある場合は、
    // deps.inline を使用します。
    // chalk は ES Modules をサポートしているため、おそらく不要でしょう。
    // deps: {
    //   inline: [/chalk/],
    // },
    alias: {
      '../../wasm_exec.js': path.resolve(projectRoot, 'wasm_exec.js'),
    },
    coverage: {
      provider: 'v8',
    },
  },
}); 