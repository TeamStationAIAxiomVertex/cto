---
title: "Managing State: How to Safely Read Previous Data in Firebase Functions"
description: "A CTO's guide to avoiding race conditions and data corruption in reactive backends by using the Firebase Change object to compare before and after states."
slug: "playbook/managing-state-firebase-functions"
date: "2024-07-31"
author: "The TeamStation CTO"
---

Let’s be honest: managing state is one of the hardest problems in distributed systems. In a reactive backend, where data can be mutated by multiple clients at once, flying blind is not an option. You can’t just react to the *new* value; you often need to know what the *previous* value was to make a safe, idempotent decision. Without that context, you’re just inviting race conditions and subtle data corruption that will take weeks to debug.

This isn't an academic problem. It’s the bug that shows up at 2 a.m. when two users try to update the same record. It’s the reason your inventory count is off by one, and you can’t figure out why. It’s the silent, expensive failure mode of any backend that doesn’t treat state transitions as a first-class citizen.

### The Ground Truth: Reading the Previous Value

In Firebase Realtime Database functions, this problem is solved with the `Change` object. It’s a simple but powerful construct that provides a snapshot of what the data looked like both before and after the event that triggered your function.

The `Change` object has a `before` property that lets you inspect what was saved to Realtime Database *before* the event. The `before` property returns a `DataSnapshot` where all methods (for example, `val()` and `exists()`) refer to the previous value.

You can read the new value again by either using the original `DataSnapshot` or reading the `after` property. This property on any `Change` is another `DataSnapshot` representing the state of the data *after* the event happened.

For example, the `before` property can be used to make sure the function only uppercases text when it is first created:

```javascript
exports.makeUppercase = functions.database.ref('/messages/{pushId}/original')
    .onCreate((snapshot, context) => {
      // Grab the current value of what was written to the Realtime Database.
      const original = snapshot.val();
      console.log('Uppercasing', context.params.pushId, original);
      const uppercase = original.toUpperCase();
      // You must return a Promise when performing asynchronous tasks inside a Functions
      return snapshot.ref.parent.child('uppercase').set(uppercase);
    });
```

By using `before` and `after`, you move from simple reaction to intelligent, state-aware computation. You can build robust validation, create detailed audit logs, or implement complex business logic that depends on the *difference* between states. This is the foundation of a reliable, predictable backend.

---

### Further Reading for CTOs

- **[The CTO Playbook Hub](/playbook/hub):** Access all our guides on nearshore strategy, economics, and scaling teams.
- **[Nearshore vs. Offshore: A CTO's Guide](/playbook/nearshore-vs-offshore):** A data-driven analysis of the human latency tax and its impact on velocity.
- **[The TCO Model for Engineering Teams](/playbook/tco-model):** Move beyond hourly rates to a comprehensive analysis of value and risk.
- **[The Research Hub](/research/hub):** Explore the scientific foundation behind our vetting and operational models.
