import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs';
import { join, extname, relative } from 'path';

const CONFIG = {
  // Start from root to capture Firebase config, but we will ignore heavy folders
  rootDir: './', 
  outputFile: 'project-documentation.md',
  ignorePatterns: [
    'node_modules', 'dist', '.git', '.firebase', 
    'package-lock.json', 'folder_structure.txt',
    '.DS_Store', 'database-debug.log', 'firestore-debug.log',
    '*.gz', '*.png', '*.ico', '*.svg', '*.woff2', '*.ttf' // Ignore binaries
  ],
  fileExtensions: [
    '.js', '.jsx', '.ts', '.tsx', '.css', '.scss', 
    '.json', '.html', '.rules', '.md', '.env'
  ]
};

let markdownContent = `# Project Documentation: Examify\n\nGenerated on: ${new Date().toLocaleString()}\n\n`;

function shouldIgnore(item) {
  return CONFIG.ignorePatterns.some(pattern => {
    if (pattern.includes('*')) {
      const regex = new RegExp('^' + pattern.replace(/\./g, '\\.').replace(/\*/g, '.*') + '$');
      return regex.test(item);
    }
    return item === pattern;
  });
}

function generateTree(dir, indent = '') {
  const items = readdirSync(dir).filter(item => !shouldIgnore(item));
  
  items.forEach((item, index) => {
    const itemPath = join(dir, item);
    const isLast = index === items.length - 1;
    const stat = statSync(itemPath);
    
    if (stat.isDirectory()) {
      markdownContent += `${indent}${isLast ? '└── ' : '├── '}📁 **${item}/**\n`;
      generateTree(itemPath, `${indent}${isLast ? '    ' : '│   '}`);
    } else {
      if (CONFIG.fileExtensions.includes(extname(item)) || item.startsWith('.')) {
        markdownContent += `${indent}${isLast ? '└── ' : '├── '}📄 ${item}\n`;
      }
    }
  });
}

function generateFileContent(dir) {
  const items = readdirSync(dir).filter(item => !shouldIgnore(item));
  
  items.forEach(item => {
    const itemPath = join(dir, item);
    const stat = statSync(itemPath);
    
    if (stat.isDirectory()) {
      generateFileContent(itemPath);
    } else {
      const ext = extname(item);
      if (CONFIG.fileExtensions.includes(ext) && item !== CONFIG.outputFile) {
        const relativePath = relative(process.cwd(), itemPath);
        try {
          const content = readFileSync(itemPath, 'utf8');
          const lang = ext.replace('.', '') || 'plaintext';
          
          markdownContent += `\n## File: ${relativePath}\n\n`;
          markdownContent += `\`\`\`${lang === 'ts' || lang === 'tsx' ? 'typescript' : lang}\n${content}\n\`\`\`\n\n---\n`;
        } catch (e) {
          markdownContent += `\n## File: ${relativePath}\n*(Error reading file)*\n\n---\n`;
        }
      }
    }
  });
}

function run() {
  console.log("🚀 Generating documentation...");
  
  markdownContent += `## 1. Directory Structure\n\n\`\`\`text\n`;
  generateTree(CONFIG.rootDir);
  markdownContent += `\`\`\`\n\n---\n\n## 2. File Implementation Details\n`;
  
  generateFileContent(CONFIG.rootDir);
  
  writeFileSync(CONFIG.outputFile, markdownContent);
  console.log(`✅ Done! Created: ${CONFIG.outputFile}`);
}

run();