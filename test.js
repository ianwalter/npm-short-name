import test from 'ava'
import npmShortName from '.'

test('npmShortName returns the short name from a scoped name', t => {
  t.is(npmShortName(`@ianwalter/decision-tree`), 'decisionTree')
})

test('npmShortName returns the short name from a unscoped name', t => {
  t.is(npmShortName(`codemirror-mode-elixir`), 'codemirrorModeElixir')
})

test('npmShortName returns empty string when name is undefined', t => {
  t.is(npmShortName(), '')
})
