import camelCase from 'camelcase'

export default function npmShortName (name = '') {
  const parts = name.split('/')
  return parts.length ? camelCase(parts[parts.length - 1]) : ''
}
