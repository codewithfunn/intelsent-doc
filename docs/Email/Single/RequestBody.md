---
id: request-body
title: Request Body
---

# Request Body

## Parameters

| Name          | Type     | Required | Sample Value                | Description                                                                                                                                        |
| ------------- | -------- | -------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `from`        | String   | Yes      | `abc@gmail.com`             | Valid email address                                                                                                                                |
| `subject`     | String   | Yes      | `Email subject`             | Email subject line                                                                                                                                 |
| `bodyText`    | String   | Yes      | `Plain text for email body` | Text version of email body is displayed when the user's device is not capable of displaying HTML body                                              |
| `bodyHtml`    | String   | Yes      | `HTML for email body`       | Main content of email in HTML format                                                                                                               |
| `sendAt`      | DateTime | No       | `2024-11-01 11:00:00`       | Datetime format as `YYYY-MM-DD HH:mm:ss` in UTC timezone. HH → 00-23. Default: Current datetime                                                    |
| `uid`         | String   | Yes      | `abc-123`                   | Limit: 40 characters, used for tracking purposes. This uid will be returned in request response. Should be unique for each request.                |
| `programId`   | Integer  | Yes      | `12345`                     | Limit: 6 digits only. Used to bundle multiple requests in single programId. To be used for reporting and billing purposes.                         |
| `checkOptOut` | Boolean  | No       | `true`                      | Default: true. Check if the email address is opted out of the from email address. If false, system will bypass the check against the opt-out list. |


Refer to the [Examples](./Examples.md) for sample requests.
