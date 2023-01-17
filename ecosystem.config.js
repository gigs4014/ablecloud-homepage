const cp = require('child_process');

let yarnPath = cp.execSync('whereis yarn', { encoding: 'utf8' });

yarnPath = yarnPath.substring(yarnPath.indexOf(':') + 1).replace('\n', '');

module.exports = {
  apps: [
    {
      name: `ablecloud-homepage`,
      script: yarnPath + ' start -p 80',
      exec_mode: 'fork',
      autorestart: true,
    },
  ],
};
