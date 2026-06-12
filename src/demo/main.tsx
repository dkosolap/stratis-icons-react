import * as React from 'react';
import { createRoot } from 'react-dom/client';

import * as Icons from '../index';

import './styles.css';

type IconComponent = React.ComponentType<
  React.SVGProps<SVGSVGElement> & {
    size?: number | string;
    color?: string;
  }
>;

type IconItem = {
  name: string;
  slug: string;
  tags: string[];
  Component: IconComponent;
};

type Category = {
  id: string;
  label: string;
  keywords: string[];
};

type DemoState = {
  activeCategoryId: string;
  iconColor: string;
  iconSize: number;
  query: string;
  selectedIcon: IconItem;
};

const packageVersion = '1.0.0';
const packageName = 'stratis-icons-react';
const figmaUrl =
  'https://www.figma.com/community/search?query=Stratis%20UI%20Icons&resource_type=mixed';
const defaultIconColor = '#3f3f46';
const defaultIconSize = 96;
const defaultCategoryId = 'all';

const categories: Category[] = [
  { id: 'all', label: 'All icons', keywords: [] },
  {
    id: 'arrows',
    label: 'Arrows',
    keywords: ['arrow', 'chevron', 'down', 'up', 'left', 'right'],
  },
  {
    id: 'interface',
    label: 'Interface',
    keywords: ['add', 'cancel', 'check', 'close', 'menu', 'settings', 'x'],
  },
  {
    id: 'text',
    label: 'Text',
    keywords: ['align', 'bold', 'font', 'italics', 'letter', 'line', 'text', 'type'],
  },
  {
    id: 'files',
    label: 'Files',
    keywords: ['file', 'folder', 'download', 'upload', 'save'],
  },
  {
    id: 'users',
    label: 'Users',
    keywords: ['user', 'users', 'profile', 'face'],
  },
  {
    id: 'communication',
    label: 'Communication',
    keywords: ['annotation', 'bell', 'mail', 'message', 'notification', 'phone'],
  },
  {
    id: 'media',
    label: 'Media',
    keywords: ['audio', 'camera', 'image', 'microphone', 'pause', 'play', 'video'],
  },
  {
    id: 'finance',
    label: 'Finance',
    keywords: ['bank', 'card', 'coin', 'currency', 'wallet'],
  },
  {
    id: 'devices',
    label: 'Devices',
    keywords: ['battery', 'computer', 'laptop', 'server', 'tv', 'webcam'],
  },
  {
    id: 'weather',
    label: 'Weather',
    keywords: ['cloud', 'drop', 'moon', 'snow', 'sun', 'temperature', 'wind'],
  },
  {
    id: 'shapes',
    label: 'Shapes',
    keywords: ['circle', 'diamond', 'hexagon', 'octagon', 'pentagon', 'square'],
  },
];

const colorOptions = ['#3f3f46', '#ef6b6b', '#2563eb', '#059669', '#d97706', '#7c3aed'];

const toIconSlug = (name: string): string =>
  name
    .replace(/Icon$/, '')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .replace(/([a-zA-Z])([0-9])/g, '$1-$2')
    .replace(/([0-9])([a-zA-Z])/g, '$1-$2')
    .toLowerCase() || 'icon';

const getIconTags = (slug: string): string[] =>
  slug
    .split('-')
    .filter(Boolean)
    .filter((tag, index, tags) => tags.indexOf(tag) === index)
    .slice(0, 5);

const isIconInCategory = (icon: IconItem, category: Category): boolean => {
  if (category.id === 'all') {
    return true;
  }

  return category.keywords.some(
    (keyword) => icon.slug.includes(keyword) || icon.tags.includes(keyword)
  );
};

const getCategoryCount = (category: Category, icons: IconItem[]): number =>
  icons.filter((icon) => isIconInCategory(icon, category)).length;

const getIconJsxSnippet = (
  iconName: string,
  iconSize: number,
  iconColor: string
): string => {
  const props = [
    iconSize !== defaultIconSize ? `size={${iconSize}}` : null,
    iconColor !== defaultIconColor ? `color="${iconColor}"` : null,
  ].filter(Boolean);

  return `<${iconName}${props.length > 0 ? ` ${props.join(' ')}` : ''} />`;
};

const iconItems = Object.entries(Icons)
  .filter(([name]) => name.endsWith('Icon'))
  .map(([name, Component]) => {
    const slug = toIconSlug(name);

    return {
      name,
      slug,
      tags: getIconTags(slug),
      Component: Component as IconComponent,
    };
  })
  .sort((left, right) => left.slug.localeCompare(right.slug));

const defaultSelectedIcon = iconItems[0];

const getValidColor = (color: string | null): string => {
  if (!color) {
    return defaultIconColor;
  }

  const normalizedColor = color.startsWith('#') ? color : `#${color}`;

  return /^#[0-9a-f]{6}$/i.test(normalizedColor)
    ? normalizedColor.toLowerCase()
    : defaultIconColor;
};

const getValidSize = (size: string | null): number => {
  if (!size) {
    return defaultIconSize;
  }

  const parsedSize = Number(size);

  if (!Number.isFinite(parsedSize)) {
    return defaultIconSize;
  }

  return Math.min(180, Math.max(24, Math.round(parsedSize)));
};

const getValidCategoryId = (categoryId: string | null): string =>
  categories.some((category) => category.id === categoryId)
    ? categoryId ?? defaultCategoryId
    : defaultCategoryId;

const getValidIcon = (icon: string | null): IconItem => {
  if (!icon) {
    return defaultSelectedIcon;
  }

  const normalizedIcon = icon.toLowerCase();
  const compactIcon = normalizedIcon.replace(/-/g, '');

  return (
    iconItems.find(
      ({ name, slug }) =>
        slug === normalizedIcon ||
        slug.replace(/-/g, '') === compactIcon ||
        name.toLowerCase() === normalizedIcon
    ) ?? defaultSelectedIcon
  );
};

const getInitialDemoState = (): DemoState => {
  const params = new URLSearchParams(window.location.search);

  return {
    activeCategoryId: getValidCategoryId(params.get('category')),
    iconColor: getValidColor(params.get('color')),
    iconSize: getValidSize(params.get('size')),
    query: params.get('q') ?? '',
    selectedIcon: getValidIcon(params.get('icon')),
  };
};

function App(): React.ReactElement {
  const initialState = React.useMemo(getInitialDemoState, []);
  const [query, setQuery] = React.useState(initialState.query);
  const [selectedIcon, setSelectedIcon] = React.useState<IconItem>(
    initialState.selectedIcon
  );
  const [copiedLabel, setCopiedLabel] = React.useState<string | null>(null);
  const [iconColor, setIconColor] = React.useState(initialState.iconColor);
  const [iconSize, setIconSize] = React.useState(initialState.iconSize);
  const [activeCategoryId, setActiveCategoryId] = React.useState(
    initialState.activeCategoryId
  );
  const searchRef = React.useRef<HTMLInputElement>(null);

  const activeCategory =
    categories.find((category) => category.id === activeCategoryId) ?? categories[0];

  const filteredIcons = React.useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return iconItems.filter((icon) => {
      const matchesQuery =
        !normalizedQuery ||
        icon.name.toLowerCase().includes(normalizedQuery) ||
        icon.slug.includes(normalizedQuery) ||
        icon.tags.some((tag) => tag.includes(normalizedQuery));

      return matchesQuery && isIconInCategory(icon, activeCategory);
    });
  }, [activeCategory, query]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        searchRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  React.useEffect(() => {
    const params = new URLSearchParams();

    if (query.trim()) {
      params.set('q', query.trim());
    }

    if (selectedIcon.slug !== defaultSelectedIcon.slug) {
      params.set('icon', selectedIcon.slug);
    }

    if (iconColor !== defaultIconColor) {
      params.set('color', iconColor.replace('#', ''));
    }

    if (iconSize !== defaultIconSize) {
      params.set('size', String(iconSize));
    }

    if (activeCategoryId !== defaultCategoryId) {
      params.set('category', activeCategoryId);
    }

    const queryString = params.toString();
    const nextUrl = `${window.location.pathname}${queryString ? `?${queryString}` : ''}${window.location.hash}`;

    window.history.replaceState(null, '', nextUrl);
  }, [activeCategoryId, iconColor, iconSize, query, selectedIcon.slug]);

  const handleCopy = React.useCallback(
    async (label: string, content: string): Promise<void> => {
      await navigator.clipboard.writeText(content);
      setCopiedLabel(label);
      window.setTimeout(() => setCopiedLabel(null), 1400);
    },
    []
  );

  const handleCopyJsx = React.useCallback(
    async (iconName: string): Promise<void> => {
      await handleCopy('JSX', getIconJsxSnippet(iconName, iconSize, iconColor));
    },
    [handleCopy, iconColor, iconSize]
  );

  const handleCopyImport = React.useCallback(
    async (iconName: string): Promise<void> => {
      await handleCopy('Import', `import { ${iconName} } from '${packageName}';`);
    },
    [handleCopy]
  );

  const handleCopySvg = React.useCallback(async (): Promise<void> => {
    const svg = document.querySelector('.preview-tile svg');

    if (!(svg instanceof SVGSVGElement)) {
      return;
    }

    await handleCopy('SVG', svg.outerHTML);
  }, [handleCopy]);

  const handleCopyLink = React.useCallback(async (): Promise<void> => {
    await handleCopy('Link', window.location.href);
  }, [handleCopy]);

  const handleSizeChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setIconSize(Number(event.target.value));
    },
    []
  );

  const SearchIcon = Icons.Search01Icon as IconComponent;

  return (
    <main className="page">
      <header className="app-header">
        <div>
          <p>Stratis Icons React</p>
          <h1>{iconItems.length} React SVG icons</h1>
        </div>

        <a href={figmaUrl} rel="noreferrer" target="_blank">
          View Figma source
        </a>
      </header>

      <div className="app-layout">
        <aside className="category-sidebar" aria-label="Icon categories">
          <section className="sidebar-section">
            <div className="section-title">
              <h2>Categories</h2>
            </div>

            <div className="category-list">
              {categories.map((category) => (
                <button
                  className={
                    activeCategoryId === category.id
                      ? 'category-button is-active'
                      : 'category-button'
                  }
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategoryId(category.id)}
                >
                  <span>{category.label}</span>
                  <strong>{getCategoryCount(category, iconItems)}</strong>
                </button>
              ))}
            </div>
          </section>
        </aside>

        <section className="main-column">
          <section className="search-shell">
            <SearchIcon aria-hidden className="search-icon" size={34} />
            <input
              ref={searchRef}
              aria-label="Search icons"
              autoFocus
              placeholder={`Search ${iconItems.length} icons...`}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <kbd>{navigator.platform.toLowerCase().includes('mac') ? '⌘K' : 'Ctrl K'}</kbd>
          </section>

          <section className="result-meta">
            <span>{filteredIcons.length} results</span>
            <span>{activeCategory.label}</span>
          </section>

          <section className="icon-grid" aria-label="Icon results" aria-live="polite">
            {filteredIcons.map((icon) => {
              const { name, slug, Component } = icon;
              const isSelected = selectedIcon.name === name;

              return (
                <button
                  aria-label={slug}
                  className={isSelected ? 'icon-card is-selected' : 'icon-card'}
                  key={name}
                  title={slug}
                  type="button"
                  onClick={() => setSelectedIcon(icon)}
                >
                  <Component aria-hidden color={iconColor} size={34} />
                </button>
              );
            })}
          </section>

          {filteredIcons.length === 0 && (
            <section className="empty-state">
              No icons found for <strong>{query || activeCategory.label}</strong>
            </section>
          )}
        </section>

        <aside className="inspector-sidebar" aria-label="Icon controls">
          <section className="sidebar-section selected-section">
            <div className="preview-tile">
              <selectedIcon.Component aria-hidden color={iconColor} size={iconSize} />
            </div>

            <h2>{selectedIcon.slug}</h2>
            <p>{selectedIcon.tags.join(' • ') || 'stratis icon'}</p>

            <div className="copy-row">
              <button
                className="secondary-action"
                type="button"
                onClick={() => void handleCopyImport(selectedIcon.name)}
              >
                {copiedLabel === 'Import' ? 'Copied Import' : 'Copy Import'}
              </button>
              <button
                className="secondary-action"
                type="button"
                onClick={() => void handleCopyJsx(selectedIcon.name)}
              >
                {copiedLabel === 'JSX' ? 'Copied JSX' : 'Copy JSX'}
              </button>
              <button
                className="secondary-action"
                type="button"
                onClick={() => void handleCopySvg()}
              >
                {copiedLabel === 'SVG' ? 'Copied SVG' : 'Copy SVG'}
              </button>
              <button
                className="secondary-action"
                type="button"
                onClick={() => void handleCopyLink()}
              >
                {copiedLabel === 'Link' ? 'Copied link' : 'Copy link'}
              </button>
            </div>
          </section>

          <section className="sidebar-section">
            <div className="section-title">
              <h2>Customize</h2>
              <span>v{packageVersion}</span>
            </div>

            <label className="control-label">
              <span>Color</span>
              <input
                aria-label="Icon color"
                type="color"
                value={iconColor}
                onChange={(event) => setIconColor(event.target.value)}
              />
            </label>

            <div className="swatch-row">
              {colorOptions.map((color) => (
                <button
                  aria-label={`Use ${color}`}
                  className={iconColor === color ? 'swatch is-active' : 'swatch'}
                  key={color}
                  style={{ '--swatch-color': color } as React.CSSProperties}
                  type="button"
                  onClick={() => setIconColor(color)}
                />
              ))}
            </div>

            <label className="range-label">
              <span>Size</span>
              <strong>{iconSize}px</strong>
              <input
                aria-label="Icon size"
                max="180"
                min="24"
                step="2"
                type="range"
                value={iconSize}
                onChange={handleSizeChange}
              />
            </label>
          </section>
        </aside>
      </div>
    </main>
  );
}

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element was not found');
}

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
