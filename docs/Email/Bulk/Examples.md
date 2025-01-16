---
id: examples
title: Examples
---

# Examples

## Sample Email Request

```json
{
    "from": "info@xyz.com",
    "paramenters": [
        {
            "uid": "abc-123",
            "to": "abc@gmail.com",
            "name": "Deepak",
            "address": "1234"
        },
        {
            "uid": "xyz-123",
            "to": "xyz@outlook.com",
            "name": "Jim",
            "address": "1234"
        }
    ],
    "sendAt": "",
    "uid": "",
    "programId": "",
    "checkDNC":
}
```

## Sample Email Response

```json
{
    "isid": "",
    "parameters": [
        {
            "uid": "abc-123",
            "to": "abc@gmail.com",
            "name": "Deepak",
            "address": "1234",
            "staus": "QUEUED",
            "errorCode": 0
        },
        {
            "uid": "xyz-123",
            "to": "xyz@outlook.com",
            "name": "Jim",
            "address": "1234",
            "staus": "REJECTED",
            "errorCode": 2
        }
    ],
    "from": "info@xyz.com",
    "uid": "",
    "programId": ""
}
```
