import React from "react";
import { Box, Button, HStack, Modal } from "native-base";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  actionButtonText?: string;
  noAction?: boolean;
  actionButtonOnPress?: () => void;
}

const CustomModal = ({
  isOpen,
  onClose,
  children,
  actionButtonText,
  actionButtonOnPress,
  noAction,
}: Props) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <Modal.Content
        minH="50px"
        bg={{
          linearGradient: {
            colors: ["#E6FDF4", "#FDB21A"],
            start: [0.5, 0],
            end: [0.5, 1],
            location: [0.2, 0.6, 0.8],
          },
        }}
        p="2px"
        rounded="lg"
      >
        <Box rounded="lg" bg="#191819">
          <Modal.Body px="12px" py="24px">
            <Box w="full" minH="50px">
              {children}
            </Box>

            {!noAction && (
              <HStack alignItems="center" justifyContent="center" space={4}>
                <Button
                  w="45%"
                  bgColor="#DE3E31"
                  color="white"
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button
                  w="45%"
                  bgColor="#0D7D4F"
                  color="white"
                  onPress={actionButtonOnPress}
                >
                  {actionButtonText}
                </Button>
              </HStack>
            )}
          </Modal.Body>
        </Box>
      </Modal.Content>
    </Modal>
  );
};

export default CustomModal;
