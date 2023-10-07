# Window Actions

This example demonstrates how to capture user intent related to window actions, such as setting screen configurations, adding or updating elements on the screen, and more. The actions are defined by the [`WindowActions`](./src/windowActionsSchema.ts) type.

## Tutorial to use 
https://microsoft.github.io/TypeChat/docs/examples/

## Try Window Actions

To run the Window Actions example, follow the instructions in the [examples README](../README.md#step-1-configure-your-development-environment).

## Usage

Example prompts can be found in [`src/input.txt`](./src/input.txt).

For instance, you can use natural language to set a screen configuration:

**Input**:
📅> 2023-08-22T12:41:45Z Copy the content of the text field with ID txt_1.

**Output**:
```
{
  "actions": [
    {
      "actionType": "type",
      "target": "txt_1",
      "content": "",
      "result": "success",
      "timestamp": "2023-08-22T12:41:45Z"
    }
  ]
}
```
