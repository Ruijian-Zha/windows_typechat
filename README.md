# Window Actions

This example demonstrates how to capture user intent related to window actions, such as setting screen configurations, adding or updating elements on the screen, and more. The actions are defined by the [`WindowActions`](./src/windowActionsSchema.ts) type.

## Try Window Actions

To run the Window Actions example, follow the instructions in the [examples README](../README.md#step-1-configure-your-development-environment).

## Usage

Example prompts can be found in [`src/input.txt`](./src/input.txt).

For instance, you can use natural language to set a screen configuration:

**Input**:
📅> Set the screen width to 1920 and height to 1080 with a DPI of 96.


**Output**:

```json
{
  "actions": [
    {
      "actionType": "set_screen",
      "payload": {
        "width": 1920,
        "height": 1080,
        "dpi": 96
      }
    }
  ]
}
```
