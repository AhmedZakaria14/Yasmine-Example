import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const outDir = join(process.cwd(), 'out');
const origin = 'https://www.alyasminservices.com';
const obsoleteOrigin = 'https://alyasmin-services.com';

const serviceIds = [
  'maintenance',
  'cleaning',
  'hospitality',
  'pest',
  'landscaping',
  'facilities_management',
  'security_cameras',
  'water_tanks',
  'ac_maintenance',
  'furniture_moving',
  'building_restoration',
  'leak_detection',
  'plumbing_electrical',
];

const pages = [
  ['index.html', '/'],
  ['about/index.html', '/about/'],
  ['services/index.html', '/services/'],
  ['certifications/index.html', '/certifications/'],
  ['clients/index.html', '/clients/'],
  ['contact/index.html', '/contact/'],
  ['privacy/index.html', '/privacy/'],
  ['terms/index.html', '/terms/'],
  ['cookies/index.html', '/cookies/'],
  ...serviceIds.map((id) => [`services/${id}/index.html`, `/services/${id}/`]),
];

const titles = new Map();
const errors = [];

for (const [relativeFile, canonicalPath] of pages) {
  const filePath = join(outDir, relativeFile);

  if (!existsSync(filePath)) {
    errors.push(`Missing exported page: ${relativeFile}`);
    continue;
  }

  const html = readFileSync(filePath, 'utf8');
  const expectedCanonical = canonicalPath === '/' ? origin : `${origin}${canonicalPath}`;
  const acceptedCanonicals =
    canonicalPath === '/' ? new Set([origin, `${origin}/`]) : new Set([expectedCanonical]);
  const canonicalMatch = html.match(/<link rel="canonical" href="([^"]+)"\s*\/?>/i);
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  const descriptionMatch = html.match(
    /<meta name="description" content="([^"]+)"\s*\/?>/i,
  );
  const viewportCount = (html.match(/<meta name="viewport"/gi) || []).length;

  if (html.includes(obsoleteOrigin)) {
    errors.push(`Obsolete canonical domain found in ${relativeFile}`);
  }

  if (!canonicalMatch) {
    errors.push(`Missing canonical in ${relativeFile}`);
  } else if (!acceptedCanonicals.has(canonicalMatch[1])) {
    errors.push(
      `Wrong canonical in ${relativeFile}: ${canonicalMatch[1]} (expected ${expectedCanonical})`,
    );
  }

  if (!titleMatch || titleMatch[1].trim().length < 10) {
    errors.push(`Missing or weak title in ${relativeFile}`);
  } else {
    const normalizedTitle = titleMatch[1].trim();
    const existing = titles.get(normalizedTitle);
    if (existing) {
      errors.push(`Duplicate title between ${existing} and ${relativeFile}`);
    } else {
      titles.set(normalizedTitle, relativeFile);
    }
  }

  if (!descriptionMatch || descriptionMatch[1].trim().length < 50) {
    errors.push(`Missing or short meta description in ${relativeFile}`);
  }

  if (viewportCount !== 1) {
    errors.push(`Expected one viewport tag in ${relativeFile}, found ${viewportCount}`);
  }
}

const sitemapPath = join(outDir, 'sitemap.xml');
const robotsPath = join(outDir, 'robots.txt');

if (!existsSync(sitemapPath)) {
  errors.push('Missing sitemap.xml');
} else {
  const sitemap = readFileSync(sitemapPath, 'utf8');
  if (sitemap.includes(obsoleteOrigin)) {
    errors.push('sitemap.xml still contains the obsolete domain');
  }
  for (const [, canonicalPath] of pages) {
    const expectedUrl = `${origin}${canonicalPath}`;
    if (!sitemap.includes(`<loc>${expectedUrl}</loc>`)) {
      errors.push(`Sitemap is missing ${expectedUrl}`);
    }
  }
}

if (!existsSync(robotsPath)) {
  errors.push('Missing robots.txt');
} else {
  const robots = readFileSync(robotsPath, 'utf8');
  if (robots.includes(obsoleteOrigin)) {
    errors.push('robots.txt still contains the obsolete domain');
  }
  if (!robots.includes(`Sitemap: ${origin}/sitemap.xml`)) {
    errors.push('robots.txt does not reference the canonical sitemap');
  }
}

if (errors.length > 0) {
  console.error('Static SEO validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Static SEO validation passed for ${pages.length} pages on ${origin}.`);
