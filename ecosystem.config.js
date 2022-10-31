module.exports = {
  apps: [
    {
      name: `ablecloud-homepage`,
      script: '/usr/local/bin/yarn',
      args: 'start -p 80',
      interpreter: 'node',
      exec_mode: 'fork',
      env,
      wait_ready: true,
      autorestart: true,
      listen_timeout: 50000,
      kill_timeout: 5000,
    },
  ],
};
