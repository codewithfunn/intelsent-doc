---
id: response-body
title: Response Body
---

# Response Body

## Parameters

| Name        | Type        | Sample Value                             | Description                                                                 |
|-------------|-------------|------------------------------------------|-----------------------------------------------------------------------------|
| `isid`      | String      | `123-abc….-679`                          | IntelSend ID: Unique uuid returned in all responses                          |
| `parameters`| String      | `[ { "uid": "abc-123", "to": "abc@gmail.com", "name": "Deepak", "address": "1234", "status": "QUEUED", "errorCode": 0 }, { "uid": "xyz-123", "to": "xyz@outlook.com", "name": "Jim", "address": "1234", "status": "REJECTED", "errorCode": 2 } ]` | No error: `QUEUED` and `errorCode: 0`. Error: `REJECTED` and `errorCode > 0`, each number represents a specific error condition. |
| `from`      | String      | `info@xyz.com`                           | Same as in request                                                           |
| `uid`       | String      | `abc-123`                                | Same as in request                                                           |
| `programId` | Integer     | `12345`                                  | Same as in request                                                           |
