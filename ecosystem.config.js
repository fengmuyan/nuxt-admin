module.exports = {
  apps: [{
    name: 'nuxt-jx',
    script: 'build/main.js',
    append_env_to_name: true,
    env: {
      COMMON_VARIABLE: 'true'
    },
    env_test: {
      NODE_ENV: 'test',
      BACKEND_URL: 'http://www.saikang.top',
    },
    env_production: {
      NODE_ENV: 'production',
      BACKEND_URL: 'http://www.saikang.top',
    }
  }],
  deploy: {
    production: {
      user: 'root',
      host: ['39.107.48.134'],
      port: '22',
      ref: 'origin/master',
      repo: 'git@github.com:fengmuyan/myGit.git',
      path: '/home/nuxt-pro/production',
      ssh_options: 'StrictHostKeyChecking=no',
      'post-deploy': 'cnpm install && npm run build && pm2 startOrRestart ecosystem.config.js --env production'
    }
  }
}