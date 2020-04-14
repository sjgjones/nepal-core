<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@al/common](./common.md) &gt; [AlTriggeredEventCallback](./common.altriggeredeventcallback.md)

## AlTriggeredEventCallback type

Callback type for triggered events.

<b>Signature:</b>

```typescript
export declare type AlTriggeredEventCallback<ResponseType> = {
    (event: AlTriggeredEvent<ResponseType>): void | boolean;
};
```