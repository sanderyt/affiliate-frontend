import React, { FC, useState, useEffect, ReactText } from "react";
import { useRouter } from "next/router";
import { toast, ToastOptions } from "react-toastify";

import { Edit, Delete, Save } from "@material-ui/icons";

import { StyledMenuItem, OuterDiv } from "./styles";

import { Box } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { Textfield } from "../Textfield";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { deleteMenu } from "../../api/menu";

import { useDrag, useDrop } from "react-sortly";

// interface Props {
//   name: string;
//   slug: string;
//   depth: number;
// }

export const MenuItem: FC<{
  id: ReactText;
  index: number;
  depth: number;
  data: { id: ReactText };
}> = ({ data: { id, name, depth, slug } }) => {
  const { register, setValue } = useForm();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [, drag] = useDrag();
  const [, drop] = useDrop();

  const toasterConfig: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined
  };

  const editMenuItem = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const deleteCategory = () => {
    deleteMenu(
      name,
      () => {
        toast.success("Het item is verwijderd.", toasterConfig);
        refreshData();
        handleClose();
      },
      (error: string) => {
        toast.success(error, toasterConfig);
      }
    );
  };

  const refreshData = () => {
    router.replace(router.asPath);
  };

  useEffect(() => {
    setValue("name", name);
    setValue("slug", slug);
  }, []);

  return (
    <OuterDiv ref={drop}>
      <div ref={drag} style={{ marginLeft: depth * 20 }}>
        <StyledMenuItem
          display="flex"
          alignItems="center"
          flexDirection="column"
          width={1}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width={1}
          >
            {name}
            <Box display="flex">
              {isExpanded ? (
                <Save onClick={editMenuItem} />
              ) : (
                <Edit onClick={editMenuItem} />
              )}
              <Delete onClick={handleOpen} />
            </Box>
          </Box>

          {isExpanded && (
            <Box width={1}>
              <form>
                <Textfield label="name" register={register} required={true} />
                <Textfield label="slug" register={register} required={true} />
                <Button color="primary" type="submit">
                  <Save />
                </Button>
              </form>
            </Box>
          )}

          <Modal
            title="Wil deze categorie verwijderen?"
            isOpen={isOpen}
            handleClose={handleClose}
            primaryButtonText="Verwijderen"
            secondaryButtonText="Annuleren"
            primaryAction={deleteCategory}
          >
            Door deze categorie te verwijderen, verwijder je ook de
            desbetreffende producten. Dit kan niet meer ongedaan worden.
          </Modal>
        </StyledMenuItem>
      </div>
    </OuterDiv>
  );
};
