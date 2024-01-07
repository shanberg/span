import React from "react";
import CodeMirror from '@uiw/react-codemirror';
import { Dialog, Portal, HStack, VStack, Text, Box, Button } from "./ui";

const lightweightSanitize = (styles: string) => {
  if (!styles) return "";
  if (!styles.length) return "";
  if (!styles.includes("}")) return styles.trim();
  return styles?.split("}")[0].trim() || "";
}

export const EditStylesDialog = ({ isOpen, onClose, styles, onUpdateStyles }: {
  isOpen: boolean,
  onClose: () => void;
  styles: any,
  onUpdateStyles: (styles: string) => void
}) => {
  const initialValue = styles;
  const [newStyles, setNewStyles] = React.useState<string>(initialValue);

  const cssString = `.row {
  ${newStyles}
}`

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
          <Dialog.Content alignItems="stretch" minWidth="40rem">
            <VStack p={4} alignItems="stretch" gap={0}>
              <Dialog.Title>Edit CSS</Dialog.Title>
              <Dialog.Description maxWidth="44em">Add styles to match your application</Dialog.Description>
            </VStack>

            <VStack gap={2} px={4} alignItems="stretch">

              <Box flex={1} borderRadius="md" overflow="clip" color="reset">
                <CodeMirror
                  theme="dark"
                  value={"/* Add your CSS here */\n"}
                  minHeight="20em"
                  onChange={(updated) => {
                    if (updated) {
                      setNewStyles(lightweightSanitize(updated))
                    }
                  }}
                />
              </Box>

              <style>{cssString}</style>
            </VStack>

            <HStack p={4} gap={4} justifyContent="flex-end">
              <VStack alignItems="stretch" gap={0} mr="auto">
                <Text color="fg.muted">Preview</Text>
                <Text className="row">Lorem ipsum dolor sit amet</Text>
              </VStack>

              <Dialog.CloseTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.CloseTrigger>
              <Button
                onClick={() => {
                  onUpdateStyles(lightweightSanitize(newStyles));
                }}
              >
                Update styles
              </Button>
            </HStack>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
};
