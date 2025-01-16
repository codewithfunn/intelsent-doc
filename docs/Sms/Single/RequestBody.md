---
id: request-body
title: Request Body
---

# Request Body

## Parameters

| Name          | Type     | Required | Sample Value    | Description                                                                 |
|---------------|----------|----------|-----------------|-----------------------------------------------------------------------------|
| **to**        | String   | Yes      | 13233933379     | 11-digit valid US number.                                                  |
| **from**      | String   | Yes      | 1234567890      | Assigned 10-digit DLC number or 6-digit Short code.                        |
| **sandboxMode** | Boolean | No       | true            | Use `true` for sandbox mode. Default: `false`.                             |
| **body**      | String   | Yes      | SMS text        | Maximum 600 characters (plain English), 300 characters (Unicode).          |
| **sendAt**    | DateTime | No       | 2024-11-01 11:00:00 | UTC timezone format `YYYY-MM-DD HH:mm:ss`. Default: Current datetime.      |
| **uid**       | String   | No       | abc-123         | Unique ID for tracking (up to 40 characters).                              |
| **programId** | Integer  | Yes      | 12345           | 6-digit program ID for reporting and billing.                              |
| **checkOptOut** | Boolean | No       | true or false   | Default: `true`. If `false`, bypass opt-out check (long codes excluded).   |

Refer to the [Examples](./Examples.md) for sample requests.
