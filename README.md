# Lambda function to recieve Stripe webhook

[StripeのWebhooks](https://stripe.com/docs/webhooks)を受けて見るためのLambda + API Gateway

## 概要

単にPOSTのリクエストを受けて、リクエストボディとLambdaのEventを `console.info` でログに出力するだけです。

## 必要環境

- Node.js 8.10以上
- Yarn

## セットアップ

```bash
$ git clone https://github.com/morishita-ai/study-stripe-webhook.git
$ cd study-stripe-webhook
$ yarn
$ yarn sls:deploy
```

API Gatewayのエンドポイントを StripeのコンソールからWebhookのエンドポイントに設定すれば良い。




