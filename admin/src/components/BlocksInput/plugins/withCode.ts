import { type BaseEditor, Editor, Transforms } from 'slate';

/**
 * This plugin handles paste events specifically for code blocks.
 * It prevents the default behavior of creating separate blocks for each line
 * when pasting multi-line code into a code block.
 */
const withCode = (editor: BaseEditor) => {
  const { insertData } = editor as unknown as { insertData: (data: DataTransfer) => void };

  (editor as unknown as { insertData: (data: DataTransfer) => void }).insertData = (data: DataTransfer) => {
    const pastedText = data.getData('text/plain');

    if (pastedText && editor.selection) {
      // Check if we're currently inside a code block
      const codeBlockEntry = Editor.above(editor, {
        match: (node) => !Editor.isEditor(node) && 'type' in node && node.type === 'code',
      });

      if (codeBlockEntry) {
        // We're inside a code block, handle the paste specially
        // Replace the selected content with the pasted text, preserving newlines
        Transforms.insertText(editor, pastedText);
        return;
      }
    }

    // For non-code blocks, use the default behavior
    insertData(data);
  };

  return editor;
};

export { withCode };
