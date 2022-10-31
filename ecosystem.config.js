module.exports = {
  apps: [
    {
      name: `ablecloud-homepage`,
      script: '/usr/local/bin/yarn',
      args: 'start -p 80',
      interpreter: 'node',
      exec_mode: 'fork',
      autorestart: true,
    },
  ],
};
