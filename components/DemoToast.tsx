import React, { useState } from "react";
import { randomInInterval } from "../lib/utils";
import {
  Toast,
  ToastProvider,
  ToastViewport,
  Button,
  Flex,
} from "../packages/design-system";

type Status = "success" | "error" | undefined;

export const DemoToast = () => {
  const statuses: Status[] = [undefined, "success", "error"];

  const [openToast, setOpenToast] = useState(false);
  const [status, setStatus] = useState<Status>("success");

  const [openActionToast, setOpenActionToast] = useState(false);

  return (
    <ToastProvider>
      <Flex css={{ gap: "$md", flexWrap: "wrap" }}>
        <Button
          onClick={() => {
            setOpenToast(true);
            // Randomly choose a status (or none)
            setStatus(statuses[randomInInterval(1, 4) - 1]);
          }}
        >
          Trigger Toast
        </Button>
        <Button onClick={() => setOpenActionToast(true)}>
          Trigger Toast with Action
        </Button>
      </Flex>

      <Toast
        open={openToast}
        onOpenChange={setOpenToast}
        content="Description of the toast"
        status={status}
      />

      <Toast
        open={openActionToast}
        onOpenChange={setOpenActionToast}
        title="Example Title"
        content="A rather long description, which you should usually avoid."
        actionAlt="Here should be an alternative way of actioning"
      >
        <Button size="sm">Cancel</Button>
      </Toast>

      <ToastViewport />
    </ToastProvider>
  );
};
