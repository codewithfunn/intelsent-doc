---
id: examples
title: Examples
---

# Examples

## Sample Request

```json
{
  "to": "13233933379",
  "from": "1234567890",
  "body": "Hi User, This is test message sent from Intelsend.com API.",
  "sendAt": "",
  "uid": "abc-123",
  "programId": 12345,
  "checkOptOut": true
}
```

## Sample Response

```json
{
  "isid": "",
  "status": "QUEUED",
  "errorCode": 0,
  "to": "13233933379",
  "from": "1234567890",
  "uid": "abc-123",
  "programId": 12345
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
