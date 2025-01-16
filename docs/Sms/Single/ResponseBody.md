---
id: response-body
title: Response Body
---

# Response Body

## Parameters

| Name                | Type     | Sample Value       | Description                                              |
|---------------------|----------|--------------------|----------------------------------------------------------|
| **id**              | String   | 123-abc-...-679    | Unique UUID returned in the response.                    |
| **status**          | String   | QUEUED | REJECTED  | `QUEUED`: Request accepted, `REJECTED`: Request failed.  |
| **errorCode**       | Integer  | 0                  | `0`: No error, other values indicate specific errors.    |
| **messageLength**   | Integer  | 170                | Number of characters in the SMS body.                   |
| **smsParts**        | Integer  | 2                  | Number of billable SMS parts.                           |
| **messageBodyType** | String   | Plain | Unicode    | Type of SMS content.                                     |
| **to**              | String   | 13233933379        | Recipient number.                                        |
| **from**            | String   | 1234567890         | Sender number.                                           |
| **uid**             | String   | abc-123            | Same UID as in the request.                             |
| **programId**       | Integer  | 12345              | Same program ID as in the request.                      |
