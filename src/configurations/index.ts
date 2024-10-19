import * as process from 'node:process';

export default function() {
  return {
    port: process.env.PORT || 3001,
  }
}