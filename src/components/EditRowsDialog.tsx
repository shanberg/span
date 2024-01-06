import React from "react";
import { Textarea, Button, Dialog, Portal, HStack } from "./ui";

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
          <Dialog.Content p={4}>
            <Dialog.Title>Edit Rows</Dialog.Title>
            <Dialog.Description>Add text separated by new line</Dialog.Description>

            <Textarea
              borderRadius="none"
              px={6}
              borderLeft="0"
              borderRight="0"
              defaultValue={newValue}
              rows={20}
              onChange={(e) => setNewValue(e.target.value)}
            />

            <HStack px={4}>
              <Dialog.CloseTrigger>Cancel</Dialog.CloseTrigger>
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

  // return (
  //   <Modal
  //     isOpen={isOpen}
  //     size="lg"
  //     onClose={onClose}
  //     closeOnOverlayClick={false}
  //   >
  //     <ModalOverlay />
  //     <ModalContent>
  //       <ModalCloseButton />
  //       <ModalHeader>
  //         <Heading size="lg">Edit Rows</Heading>
  //         <Text fontWeight="normal">Add text separated by new line</Text>
  //       </ModalHeader>
  //       <Divider />
  //       <ModalBody as={VStack} align="stretch" p={0}>
  //         <Textarea
  //           borderRadius="none"
  //           px={6}
  //           borderLeft="0"
  //           borderRight="0"
  //           defaultValue={newValue}
  //           rows={20}
  //           onChange={(e) => setNewValue(e.target.value)}
  //         />
  //       </ModalBody>
  //       <ModalFooter>
  //         <ButtonGroup>
  //           <Button onClick={onClose}>Cancel</Button>
  //           <Button
  //             colorScheme="blue"
  //             onClick={() => {
  //               onUpdateRows(splitNewValue);
  //             }}
  //           >
  //             Update rows
  //           </Button>
  //         </ButtonGroup>
  //       </ModalFooter>
  //     </ModalContent>
  //   </Modal>
};
