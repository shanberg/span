import React from "react";
import { Textarea, Button, Dialog, Portal, HStack, VStack, Box, Text } from "./ui";

export const EditRowsDialog = ({ isOpen, onClose, strings, onUpdateRows }: {
  isOpen: boolean,
  onClose: () => void;
  strings: string[],
  onUpdateRows: (arr: string[]) => void
}) => {
  const initialValue = strings?.join("\n") || "";
  const [newValue, setNewValue] = React.useState<string>(initialValue);

  const splitNewValue: string[] = newValue.split("\n").map((s) => s.trim());

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(details) => {
        if (details.open === false) {
          onClose();
        }
      }}
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content alignItems="stretch">
            <VStack p={4} alignItems="stretch" gap={0}>
              <Dialog.Title>Add text</Dialog.Title>
              <Dialog.Description>Add text separated by new line</Dialog.Description>
            </VStack>

            <Box px={4} lineHeight="0">
              <Textarea
                bg="bg.emphasized"
                lineHeight="loose"
                resize="none"
                p={2}
                px={3}
                border="none"
                borderRadius="md"
                defaultValue={newValue}
                height="40em"
                onChange={(e) => setNewValue(e.target.value)}
              />
            </Box>

            <HStack p={4} gap={4} justifyContent="flex-end">
              <Text flex={1} fontSize="sm" color="fg.muted">{splitNewValue.length} lines</Text>
              <Button as={Dialog.CloseTrigger}>Cancel</Button>
              <Button
                onClick={() => {
                  onUpdateRows(splitNewValue);
                }}
              >
                Update rows
              </Button>
            </HStack>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
};
