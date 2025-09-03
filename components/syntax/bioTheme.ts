import type { PrismTheme } from 'prism-react-renderer'

export const bioTheme: PrismTheme = {
  plain: {
    color: '#d1d5db',
    backgroundColor: '#1a1a2e',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#4CAF50',
        fontStyle: 'italic',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#d1d5db',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['property', 'tag', 'boolean', 'number', 'constant', 'symbol', 'deleted'],
      style: {
        color: '#00d4ff',
      },
    },
    {
      types: ['selector', 'attr-name', 'string', 'char', 'builtin', 'inserted'],
      style: {
        color: '#ffd700',
      },
    },
    {
      types: ['operator', 'entity', 'url', 'variable'],
      style: {
        color: '#d1d5db',
      },
    },
    {
      types: ['atrule', 'attr-value', 'keyword'],
      style: {
        color: '#a78bfa',
      },
    },
    {
      types: ['function', 'class-name'],
      style: {
        color: '#00d4ff',
        fontWeight: 'bold',
      },
    },
    {
      types: ['regex', 'important'],
      style: {
        color: '#ffd700',
      },
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
  ],
}