import arcjet, { detectBot, shield, slidingWindow } from '@arcjet/next';

// Re-export the rules to simplify imports inside handlers
export { detectBot, slidingWindow };

// Create a base Arcjet instance for use by each handler
export default arcjet({
  key: process.env.ARCJET_KEY || '',
  // identify user by ip address
  characteristics: ['ip.src'],
  rules: [
    // protect against common attacks
    shield({ mode: 'DRY_RUN' }),
  ],
});
