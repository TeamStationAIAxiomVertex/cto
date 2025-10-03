
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import fg from 'fast-glob';
import kleur from 'kleur';

const contentDir = path.join(process.cwd(), 'content');
const requiredFields = ['title', 'description'];
let errorCount = 0;

async function validate() {
  console.log(kleur.cyan('▶ Validating content files...'));

  // The sitemap.ts file no longer exists, so we guard this check
  const sitemapPath = path.join(process.cwd(), 'src/app/sitemap.ts');
  if (fs.existsSync(sitemapPath)) {
    try {
      const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
      if (sitemapContent.includes('export default async function sitemap()')) {
        console.log(kleur.green('✔ Found valid Next.js metadata sitemap export.'));
      } else {
        console.log(kleur.red('✖ Invalid sitemap export in src/app/sitemap.ts'));
        errorCount++;
      }
    } catch (e) {
        console.log(kleur.red(`✖ Error reading src/app/sitemap.ts: ${e.message}`));
        errorCount++;
    }
  } else {
    console.log(kleur.yellow('ℹ Skipping src/app/sitemap.ts check (file does not exist).'));
  }


  const files = await fg(`${contentDir}/**/*.md`);

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const { data } = matter(content);
    const errors = [];

    for (const field of requiredFields) {
      if (!data[field]) {
        errors.push(`Missing required field: '${field}'`);
      }
    }
    
    // Custom validation for canonical URLs
    if (data.canonical && !data.canonical.startsWith('https://cto.teamstation.dev')) {
        errors.push(`Invalid canonical URL: Must start with https://cto.teamstation.dev`);
    }

    if (errors.length > 0) {
      console.log(kleur.red(`\n✖ Validation failed for ${file}`));
      errors.forEach(err => console.log(kleur.yellow(`  - ${err}`)));
      errorCount++;
    }
  }

  if (errorCount === 0) {
    console.log(kleur.green('✔ All content files passed validation.'));
  } else {
    console.log(kleur.red(`\n✖ Found ${errorCount} validation error(s).`));
    process.exit(1);
  }
}

validate();
