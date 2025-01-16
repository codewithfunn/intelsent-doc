---
id: response-body
title: Response Body
---

# Response Body

## Parameters

| Name        | Type    | Sample Value    | Description                                                                  |
| ----------- | ------- | --------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `isid`      | String  | `123-abc….-679` | IntelSend ID: Unique uuid returned in all responses                          |
| `status`    | String  | `QUEUED         | REJECTED`                                                                    | Queued: Request body is without any error and is accepted to send out communication. Rejected: Request body had an error. |
| `errorCode` | Integer | `0`             | `0`: No error. Otherwise, each number represents a specific error condition. |
| `to`        | String  | `abc@gmail.com` | Same as in request                                                           |
| `from`      | String  | `info@xyz.com`  | Same as in request                                                           |
| `uid`       | String  | `abc-123`       | Same as in request                                                           |
| `programId` | Integer | `12345`         | Same as in request                                                           |
