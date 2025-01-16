---
sidebar_position: 1
---

# Intro

Let's explore **IntelSend Communication API** in less than 5 minutes.

## Getting Started

Get started by **choosing a communication API method**.

Or **try out the API** immediately with **[IntelSend](https://intelsend.com)**.

### What you'll need

- [API Key](https://intelsend.com) to authenticate requests:
  - Make sure your API key is securely stored for proper usage.

## Choose an API Method

IntelSend offers two ways to send communications:

- **Single Email API**: For sending one email at a time, with custom content, scheduling, and tracking.
- **Bulk Email API**: For sending large volumes of emails to multiple recipients at once, with similar features.

### Single Email API

Send a single email using the **Single Email API**. You can customize the subject, body (both plain text and HTML), scheduling, and track each email with a unique identifier (`uid`).

Here’s how to get started with a single email request:

```bash
curl -X POST https://intelsend.com/api/v1/send/single_email \
-H "Authorization: Bearer YOUR_API_KEY" \
-H "Content-Type: application/json" \
-d '{
    "to": "recipient@example.com",
    "from": "sender@example.com",
    "subject": "Your Email Subject",
    "bodyText": "Hello, this is the email body in text format.",
    "bodyHtml": "<strong>Hello</strong>, this is the email body in HTML.",
    "uid": "unique-id-123",
    "programId": 12345
}'
