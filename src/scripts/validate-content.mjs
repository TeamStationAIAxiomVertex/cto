
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import glob from 'fast-glob';
import kleur from 'kleur';

const contentDir = path.join(process.cwd(), 'content');
const requiredKeys = ['title', 'description'];
let errorCount = 0;

console.log(kleur.cyan('▶ Running content validation...'));

async function validate() {
  const files = await glob(`${contentDir}/**/*.md`);

  if (files.length === 0) {
    console.log(kleur.yellow('No markdown files found to validate. Skipping.'));
    return;
  }

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const { data } = matter(content);
    const relativePath = path.relative(process.cwd(), file);

    for (const key of requiredKeys) {
      if (!data[key]) {
        console.error(kleur.red(`❌ Missing required key '${key}' in ${relativePath}`));
        errorCount++;
      } else if (typeof data[key] !== 'string' || data[key].trim() === '') {
        console.error(kleur.red(`❌ Key '${key}' cannot be empty in ${relativePath}`));
        errorCount++;
      }
    }

    if (data.title && data.title.length > 60) {
        console.warn(kleur.yellow(`   🟡 Title in ${relativePath} is > 60 chars.`));
    }
    if (data.description && data.description.length > 160) {
        console.warn(kleur.yellow(`   🟡 Description in ${relativePath} is > 160 chars.`));
    }
  }

  // Check for legacy sitemap file
  const legacySitemapPath = path.join(process.cwd(), 'src/app/sitemap.ts');
  if (fs.existsSync(legacySitemapPath)) {
    console.warn(kleur.yellow(`   🟡 Legacy sitemap file found at 'src/app/sitemap.ts'. This should be removed in favor of the new route handlers.`));
  }

  if (errorCount > 0) {
    console.error(kleur.bold().red(`\nValidation failed with ${errorCount} error(s).`));
    process.exit(1);
  } else {
    console.log(kleur.green('✔ Content validation passed.'));
  }
}

validate();
