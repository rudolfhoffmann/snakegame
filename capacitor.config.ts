import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'my.snake.app',
  appName: 'My Snake App',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
