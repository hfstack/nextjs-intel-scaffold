#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 提示用户输入项目信息
function promptUser() {
  return new Promise((resolve) => {
    console.log('\n===== 基于 next-intel-scaffold 创建新项目 =====\n');
    
    rl.question('请输入项目名称: ', (projectName) => {
      rl.question('请输入项目描述: ', (description) => {
        rl.question('请输入作者名称 (可选): ', (author) => {
          rl.close();
          resolve({ projectName, description, author });
        });
      });
    });
  });
}

// 复制脚手架文件到新项目
function copyScaffoldToNewProject(projectInfo) {
  const { projectName, description, author } = projectInfo;
  const currentDir = process.cwd();
  const targetDir = path.join(currentDir, '..', projectName);
  
  console.log(`\n创建项目目录: ${targetDir}`);
  
  // 检查目标目录是否已存在
  if (fs.existsSync(targetDir)) {
    console.error(`错误: 目录 ${targetDir} 已存在，请使用其他项目名称。`);
    process.exit(1);
  }
  
  // 创建目标目录
  fs.mkdirSync(targetDir, { recursive: true });
  
  // 复制文件（排除不需要的文件/目录）
  const excludeDirs = [
    '.git', 
    'node_modules', 
    '.next', 
    'scripts'
  ];
  
  const excludeFiles = [
    'package-lock.json',
    'yarn.lock',
    'pnpm-lock.yaml'
  ];
  
  function copyRecursive(source, target) {
    const stat = fs.statSync(source);
    
    if (stat.isDirectory()) {
      const baseName = path.basename(source);
      if (excludeDirs.includes(baseName)) {
        return;
      }
      
      fs.mkdirSync(target, { recursive: true });
      
      for (const file of fs.readdirSync(source)) {
        const sourcePath = path.join(source, file);
        const targetPath = path.join(target, file);
        copyRecursive(sourcePath, targetPath);
      }
    } else {
      const fileName = path.basename(source);
      if (excludeFiles.includes(fileName)) {
        return;
      }
      
      let content = fs.readFileSync(source);
      
      // 如果是 package.json 文件，更新项目信息
      if (fileName === 'package.json') {
        const packageJson = JSON.parse(content);
        packageJson.name = projectName;
        packageJson.version = '0.1.0';
        packageJson.description = description;
        
        if (author) {
          packageJson.author = author;
        }
        
        // 移除脚手架特有的脚本
        if (packageJson.scripts && packageJson.scripts['create-project']) {
          delete packageJson.scripts['create-project'];
        }
        
        content = JSON.stringify(packageJson, null, 2);
      }
      
      // 如果是 README.md 文件，更新项目信息
      if (fileName === 'README.md') {
        content = `# ${projectName}\n\n${description}\n\n` + 
                 fs.readFileSync(source, 'utf8')
                   .split('\n')
                   .slice(3) // 跳过原来的标题和描述
                   .join('\n');
      }
      
      fs.writeFileSync(targetPath, content);
    }
  }
  
  copyRecursive(currentDir, targetDir);
  
  console.log('\n项目创建成功!');
  console.log(`\n请运行以下命令开始使用:\n`);
  console.log(`cd ../${projectName}`);
  console.log(`npm install`);
  console.log(`npm run dev\n`);
}

// 主函数
async function main() {
  try {
    const projectInfo = await promptUser();
    copyScaffoldToNewProject(projectInfo);
  } catch (error) {
    console.error('创建项目时出错:', error);
    process.exit(1);
  }
}

main(); 