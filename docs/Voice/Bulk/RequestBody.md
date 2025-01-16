---
id: request-body
title: Request Body
---

# Request Body

## Parameters

| Name            | Type        | Required | Sample Value                             | Description                                                                 |
|-----------------|-------------|----------|------------------------------------------|-----------------------------------------------------------------------------|
| `from`          | String      | Yes      | `1234567890`                             | Assigned 10 digits Caller ID                                                  |
| `sandboxMode`   | Boolean     | No       | `true`                                   | Default: `false` (send for production). If `true`, sends SMS only to whitelisted numbers. |
| `useDraftTemplate` | Boolean   | No       | `false`                                  | Default: `false`. If `true`, sends SMS using the template in draft mode. If `false`, sends using the latest published version. |
| `templateId`    | Integer     | Yes      | `1..9999`                                | Numeric value template set via IntelSend admin portal                        |
| `parameters`    | Array       | No       | `[ { "uid": "abc-123", "to": "13233933379", "name": "Deepak", "address": "1234" }, { "uid": "xyz-123", "to": "19495790525", "name": "Jim", "address": "1234" } ]` | Array of objects with key-value pairs. Keys are variables in the SMS template, and values replace those variables. |
| `sendAt`        | DateTime    | No       | `2024-11-01 11:00:00`                    | Datetime format as `YYYY-MM-DD HH:mm:ss` in UTC timezone. Default: Current datetime. |
| `uid`           | String      | Yes      | `abc-123`                                | Limit: 40 characters, used for tracking purposes. Unique for each request.   |
| `programId`     | Integer     | Yes      | `12345`                                  | Limit: 6 digits, used to bundle multiple requests for reporting and billing purposes. |
| `checkOptout`   | Boolean     | No       | `true`                                   | Default: `true`. If `false`, will not check if the number has opted out of the sender ID. |
| `maxRetry`      | Integer     | No       | `0-3`                                    | Default: `0`. Number of retries in case a voice message is not successfully left. |
| `retryAfter`    | Integer     | No       | `5-60`                                   | Number of minutes to wait after each retry to get Live/Machine voice result. |
| `repeatKey`     | Integer     | No       | `0-9,-13,-6`                             | Default: `-13` or `#`. Which key press should repeat the entire message.    |
| `maxRepeat`     | Integer     | No       | `0-5`                                    | Default: `1`. Maximum number of times the message can be repeated.          |

Refer to the [Examples](./Examples.md) for sample requests.
