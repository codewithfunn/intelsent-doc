---
sidebar_position: 1
---

# Create Token

To integrate Authorization using a Bearer token for API authentication, you can generate a token using the `Create Token` API.

---

## API Endpoint

**URL**:  
`https://intelsend.com/api/v1/auth/token`

---

## Request Headers

| **Name**          | **Value**                      | **Description**                                               |
|--------------------|--------------------------------|---------------------------------------------------------------|
| `Authorization`   | `Basic client-id:client-secret`| Authorization credentials, where `client-id` and `client-secret` are provided. |
| `Content-Type`    | `application/json`             | Indicates that the body of the request is in JSON format.     |

---

## Request Body

| **Name**      | **Type**   | **Required** | **Sample Value** | **Description**                                      |
|---------------|------------|--------------|------------------|------------------------------------------------------|
| `grant_type`  | `String`   | Yes          | `client_credentials` | Set to `client_credentials` for this API.          |
| `valid_hour`  | `Integer`  | No           | `24`             | Token validity in hours. Default: `24` (1 day). Maximum: `168` (1 week). |

---

### Example Request (cURL)

```bash
curl --location 'https://intelsend.com/api/v1/auth/token' \
--header 'Authorization: Basic client-id:client-secret' \
--header 'Content-Type: application/json' \
--data '{ "grant_type": "client_credentials", "valid_hour": 24 }'
```

---

## Response Body

| **Name**         | **Type**   | **Sample Value**     | **Description**                                                       |
|-------------------|------------|----------------------|-------------------------------------------------------------------------|
| `access_token`    | `String`   | `abc.....123`        | The token to be used for subsequent API calls.                         |
| `valid_till`      | `Datetime` | `2024-11-12 10:00:00`| The expiration datetime of the token, in UTC format.                   |

---

### Example Response

```json
{
  "access_token": "abc.....123",
  "valid_till": "2024-11-12 10:00:00"
}
```

---

## Usage in API Calls

Include the generated `access_token` as a Bearer token in the `Authorization` header for all subsequent API requests.

### Example API Call with Bearer Token

```bash
curl --location 'https://intelsend.com/api/v1/your-endpoint' \
--header 'Authorization: Bearer abc.....123' \
--header 'Content-Type: application/json'
```

---

## Notes

- Ensure `client-id` and `client-secret` are securely stored and not exposed.
- Use the `access_token` within its validity period as indicated by `valid_till`.
- If the token expires, generate a new one by calling the same API.
