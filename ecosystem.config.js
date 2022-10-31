const cp = require('child_process');

let yarnPath = cp.execSync('whereis yarn', { encoding: 'utf8' });

yarnPath = yarnPath.substring(yarnPath.indexOf(':') + 1);

module.exports = {
  apps: [
    {
      name: `ablecloud-homepage`,
      script: yarnPath,
      args: 'start -p 80',
      interpreter: 'node',
      exec_mode: 'fork',
      autorestart: true,
    },
  ],
};
