---
id: request-body
title: Request Body
---

# Request Body

## Parameters

| Name             | Type      | Required | Sample Value         | Description                                                                                         |
|------------------|-----------|----------|----------------------|-----------------------------------------------------------------------------------------------------|
| `to`             | String    | Yes      | `13233933379`        | 11-digit valid US number.                                                                          |
| `from`           | String    | Yes      | `1234567890`         | Assigned 10-digit Caller ID.                                                                       |
| `liveMessage`    | String    | Yes      | Voice message        | Message for live call detection. Text-to-speech will be applied to this message.                   |
| `vmMessage`      | String    | Yes      | Voice message        | Message for machine call detection. Text-to-speech will be applied to this message.                |
| `optOutMessage`  | String    | No       | Opt-out message      | Optional message played when the opt-out key is pressed.                                           |
| `sendAt`         | DateTime  | No       | `2024-11-01 11:00:00`| Datetime in UTC format (`YYYY-MM-DD HH:mm:ss`). Default: current datetime.                         |
| `uid`            | String    | Yes      | `abc-123`            | Unique identifier (max 40 characters) used for tracking purposes.                                  |
| `programId`      | Integer   | Yes      | `12345`              | 6-digit identifier for bundling requests for reporting and billing purposes.                       |
| `checkOptOut`    | Boolean   | No       | `true`               | Default: `true`. Check if the number is opted out. If `false`, opt-out checks are bypassed.         |
| `maxRetry`       | Integer   | No       | `1`                  | Default: `0`. Number of retries if the voice message isn't successfully delivered.                  |
| `retryAfter`     | Integer   | No       | `15`                 | Minutes to wait after each retry (range: 5-60).                                                    |
| `repeatKey`      | Integer   | No       | `-13`                | Default: `-13` (`#`). Key press to repeat the message (`0-9`, `-13` for `#`, `-6` for `*`).         |
| `maxRepeat`      | Integer   | No       | `2`                  | Default: `1`. Number of times the message will repeat when the repeat key is pressed.              |
| `optOutKey`      | Integer   | No       | `-13`                | Default: `-13` (`#`). Key press to opt out of the message (`0-9`, `-13` for `#`, `-6` for `*`).     |

Refer to the [Examples](./Examples.md) for sample requests.
