#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { MainStack } from '../lib/main-stack';

const app = new cdk.App();
new MainStack(app, 'HacktoberFest2024Stack', {
  env: { account: '891377307222', region: 'us-east-1' },
});