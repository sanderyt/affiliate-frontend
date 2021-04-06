import React, { FC, ReactNode } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@material-ui/core";
import { Button } from "../Button";
import { Block, Delete } from "@material-ui/icons";

interface Props {
  isOpen: boolean;
  primaryAction: () => void;
  handleClose: () => void;
  title: string;
  children: ReactNode;
  primaryButtonText: string;
  secondaryButtonText: string;
}

export const Modal: FC<Props> = ({
  isOpen,
  primaryAction,
  handleClose,
  title,
  children,
  primaryButtonText,
  secondaryButtonText
}) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{children}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" type="button" clickHandler={handleClose}>
          <Block />
          {secondaryButtonText}
        </Button>
        <Button color="secondary" type="button" clickHandler={primaryAction}>
          <Delete />
          {primaryButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
