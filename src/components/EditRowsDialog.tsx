import React from "react";
import {
  Textarea,
  Button,
  Dialog,
  Portal,
  HStack,
  VStack,
  Box,
  Text,
} from "./ui";

export const EditRowsDialog = ({
  isOpen,
  onClose,
  strings,
  onUpdateRows,
}: {
  isOpen: boolean;
  onClose: () => void;
  strings: string[];
  onUpdateRows: (arr: string[]) => void;
}) => {
  const initialValue = strings?.join("\n") || "";
  const [newValue, setNewValue] = React.useState<string>(initialValue);

  const splitNewValue: string[] = React.useMemo(
    () =>
      newValue
        .split("\n")
        .map((s) => s.trim())
        .filter((s) => s.length > 0),
    [newValue]
  );

  return (
    <Dialog.Root
      closeOnInteractOutside={false}
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
          <Dialog.Content
            alignItems="stretch"
            minWidth="40rem"
            height="40rem"
            maxHeight="calc(100vh - 2rem)"
            display={isOpen ? "flex" : undefined}
            flexDirection="column"
            overflow="hidden"
          >
            <VStack p={4} alignItems="stretch" gap={0} flexShrink={0}>
              <Dialog.Title>Add rows</Dialog.Title>
              <Dialog.Description>
                Add rows text separated by new lines.
              </Dialog.Description>
            </VStack>

            <Textarea
              bg="bg.emphasized"
              overflowY="auto"
              lineHeight="loose"
              width="auto"
              resize="none"
              p={2}
              px={3}
              mx={4}
              border="none"
              autoCorrect="off"
              spellCheck="false"
              autoComplete="off"
              borderRadius="md"
              defaultValue={newValue}
              flex="1 1 100%"
              onChange={(e) => setNewValue(e.target.value)}
            />

            <HStack p={4} gap={4} justifyContent="flex-end" flexShrink={0}>
              <VStack alignItems="stretch" gap={0} mr="auto">
                <Text flex={1} fontSize="sm" color="fg.muted">
                  {splitNewValue.length} lines
                </Text>
                {splitNewValue.length > 1000 && (
                  <Text fontSize="sm" color="fg.default">
                    Analysis may take a moment
                  </Text>
                )}
              </VStack>
              <Dialog.CloseTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.CloseTrigger>
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
  );
};
