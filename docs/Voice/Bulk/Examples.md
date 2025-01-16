---
id: examples
title: Examples
---

# Examples

## Sample Voice Request

```json
{
    "from": "1234567890",
    "templateId": 10,
    "parameters": [
        {
            "uid": "abc-123",
            "to": "13233933379",
            "name": "Deepak",
            "address": "1234"
        },
        {
            "uid": "xyz-123",
            "to": "19495790525",
            "name": "Jim",
            "address": "1234"
        }
    ],
    "sendAt": "",
    "uid": "",
    "programId": "",
    "checkDNC": true,
    "maxRetry": 1,
    "retryAfter": 15,
    "repeatKey": -13,
    "maxRepeat": 2
}
```

## Sample Voice Response

```json
{
    "isid": "",
    "templateId": 10,
    "parameters": [
        {
            "uid": "abc-123",
            "to": "13233933379",
            "name": "Deepak",
            "address": "1234",
            "staus": "QUEUED",
            "errorCode": 0
        },
        {
            "uid": "xyz-123",
            "to": "19495790525",
            "name": "Jim",
            "address": "1234",
            "staus": "REJECTED",
            "errorCode": 2
        }
    ],
    "from": "1234567890",
    "uid": "",
    "programId": ""
}
```
