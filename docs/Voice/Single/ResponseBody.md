---
id: response-body
title: Response Body
---

# Response Body

## Parameters

| Name        | Type    | Sample Value         | Description                                                                            |
| ----------- | ------- | -------------------- | -------------------------------------------------------------------------------------- |
| `isid`      | String  | `123-abc….-679`      | Unique IntelSend ID returned for each request.                                         |
| `status`    | String  | `QUEUED`, `REJECTED` | Request status. `QUEUED` if successful; `REJECTED` if there's an error in the request. |
| `errorCode` | Integer | `0`                  | `0`: No error. Non-zero values indicate specific error conditions.                     |
| `to`        | String  | `13233933379`        | Same as in the request.                                                                |
| `from`      | String  | `1234567890`         | Same as in the request.                                                                |
| `uid`       | String  | `abc-123`            | Same as in the request.                                                                |
| `programId` | Integer | `12345`              | Same as in the request.                                                                |
