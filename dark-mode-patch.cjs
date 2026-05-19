const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\Asus\\OneDrive\\Desktop\\Portfiloi\\src\\components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(/text-slate-900/g, 'text-slate-100');
  content = content.replace(/text-slate-800/g, 'text-slate-200');
  content = content.replace(/text-slate-700/g, 'text-slate-300');
  content = content.replace(/text-slate-600/g, 'text-slate-400');
  
  content = content.replace(/bg-white\b/g, 'bg-slate-900/50');
  content = content.replace(/bg-slate-50\b/g, 'bg-[#030014]');
  
  content = content.replace(/bg-white\/60/g, 'bg-white/10');
  content = content.replace(/bg-white\/50/g, 'bg-white/5');
  content = content.replace(/bg-white\/40/g, 'bg-white/5');
  content = content.replace(/bg-white\/30/g, 'bg-white/5');
  content = content.replace(/bg-white\/20/g, 'bg-white/5');
  
  content = content.replace(/border-white\/50/g, 'border-white/10');
  content = content.replace(/border-white\/40/g, 'border-white/10');
  content = content.replace(/border-white\/30/g, 'border-white/10');
  content = content.replace(/border-white\/20/g, 'border-white/10');

  content = content.replace(/bg-purple-100/g, 'bg-purple-500/20');
  content = content.replace(/bg-blue-100/g, 'bg-blue-500/20');
  content = content.replace(/bg-green-100/g, 'bg-green-500/20');
  
  content = content.replace(/border-slate-200/g, 'border-white/10 text-white');
  content = content.replace(/border-slate-100/g, 'border-white/10');
  
  // Ensure the navbar is also dark
  content = content.replace(/glass border-b border-white\/20/g, 'glass border-b border-white/10');

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log("Dark mode patch applied to all components!");
