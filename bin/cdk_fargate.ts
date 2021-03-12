#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkFargateStack } from '../lib/cdk_fargate-stack';

const app = new cdk.App();
new CdkFargateStack(app, 'CdkFargateStack');
