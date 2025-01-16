---
id: response-body
title: Response Body
---

# Response Body

## Parameters

| Name         | Type    | Sample Value                                                                                                                                                                                                                                | Description                                                                                                                                    |
| ------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `isid`       | String  | `123-abc….-679`                                                                                                                                                                                                                             | IntelSend ID. Unique UUID returned in all responses.                                                                                           |
| `parameters` | String  | `[ { "uid": "abc-123", "to": "13233933379", "name": "Deepak", "address": "1234", "status": "QUEUED", "errorCode": 0 }, { "uid": "xyz-123", "to": "19495790525", "name": "Jim", "address": "1234", "status": "REJECTED", "errorCode": 2 } ]` | Array of objects containing details for each SMS request. `status` can be `QUEUED` (request accepted) or `REJECTED` (request contains errors). |
| `from`       | String  | `1234567890`                                                                                                                                                                                                                                | Same as in request. Assigned 10-digit Caller ID.                                                                                               |
| `uid`        | String  | `abc-123`                                                                                                                                                                                                                                   | Same as in request. Unique identifier used for tracking.                                                                                       |
| `programId`  | Integer | `12345`                                                                                                                                                                                                                                     | Same as in request. Used to bundle multiple requests for reporting and billing purposes.                                                       |
