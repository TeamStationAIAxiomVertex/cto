import fs from 'fs';
import path from 'path';
import fastGlob from 'fast-glob';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { VFile } from 'vfile';
import kle from 'kleur';

const contentDir = path.join(process.cwd(), 'content');

async function validateMarkdownFile(filePath) {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const vfile = new VFile({ path: filePath, value: content });

  const errors = [];

  // Basic frontmatter checks
  if (!data.title || typeof data.title !== 'string' || data.title.length < 10) {
    errors.push(`Title is missing, not a string, or too short (must be > 10 chars). Found: "${data.title}"`);
  }
  if (!data.description || typeof data.description !== 'string' || data.description.length < 50) {
    errors.push(`Description is missing, not a string, or too short (must be > 50 chars). Found: "${data.description}"`);
  }

  // Markdown processing to catch syntax errors
  try {
    await remark().use(html).process(vfile);
    if (vfile.messages.length > 0) {
      errors.push(...vfile.messages.map(m => m.message));
    }
  } catch (err) {
    errors.push(`Markdown processing failed: ${err.message}`);
  }

  return errors;
}

async function main() {
  console.log('▶️  Starting content validation...');
  const markdownFiles = await fastGlob(`${contentDir}/**/*.md`);
  let totalErrors = 0;
  
  for (const file of markdownFiles) {
    const relativePath = path.relative(process.cwd(), file);
    const errors = await validateMarkdownFile(file);
    if (errors.length > 0) {
      totalErrors += errors.length;
      console.error(kle.red(`✖ ${relativePath}`));
      errors.forEach(err => console.error(`  - ${err}`));
    } else {
      console.log(kle.green(`✔ ${relativePath}`));
    }
  }
  
  // Validate sitemap existence
  const legacySitemapPath = path.join(process.cwd(), 'src', 'app', 'sitemap.ts');
  const sitemapIndexPath = path.join(process.cwd(), 'src', 'app', 'sitemap.xml', 'route.ts');

  if (!fs.existsSync(sitemapIndexPath)) {
      totalErrors++;
      console.error(kle.red('✖ Sitemap index not found at src/app/sitemap.xml/route.ts.'));
  } else {
      console.log(kle.green('✔ Sitemap index (sitemap.xml/route.ts) found.'));
  }
  
  if (fs.existsSync(legacySitemapPath)) {
    totalErrors++;
    console.error(kle.red(`✖ Legacy sitemap file found at ${legacySitemapPath}. It should be removed.`));
  } else {
    console.log(kle.green('✔ Legacy sitemap file (sitemap.ts) correctly removed.'));
  }


  if (totalErrors > 0) {
    console.error(kle.bold().red(`\n💥 Found ${totalErrors} validation error(s).`));
    process.exit(1);
  } else {
    console.log(kle.bold().green('\n✅ All content validated successfully!'));
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
