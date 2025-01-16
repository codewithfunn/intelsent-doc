---
id: examples
title: Examples
---

# Examples

## Sample Request

```json
{
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
    "from": "1234567890",
    "templateId": 10,
    "sendAt": "",
    "packet_uid": "",
    "programId": 12345,
    "checkOptOut": "",
    "sandboxMode": false,
    "useDraftTemplate": false
}
```

## Sample Response

```json
{
    "isid": "xxxx...xxxx",
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

---

## Error Codes

| Code | Description               |
| ---- | ------------------------- |
| 0    | No error.                 |
| 1    | Invalid `to` number.      |
| 2    | Invalid `from` number.    |
| 3    | Missing required fields.  |
| 4    | Exceeded character limit. |
| 5    | Invalid `programId`.      |
