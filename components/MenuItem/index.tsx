import React, { FC, useState, useEffect } from "react";

import { Edit, Delete, Save } from "@material-ui/icons";

import { StyledMenuItem } from "./styles";
import { Box } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { Textfield } from "../Textfield";
import { Button } from "../Button";
import { Modal } from "../Modal";

interface Props {
  name: string;
  slug: string;
}

export const MenuItem: FC<Props> = ({ name, slug }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    console.log("category was deleted");
  };

  useEffect(() => {
    setValue("name", name);
    setValue("slug", slug);
  }, []);

  return (
    <StyledMenuItem display="flex" alignItems="center" flexDirection="column">
      <Box display="flex" justifyContent="space-between" width={1}>
        {name}
        <div>
          {isExpanded ? (
            <Save onClick={editMenuItem} />
          ) : (
            <Edit onClick={editMenuItem} />
          )}
          <Delete onClick={handleOpen} />
        </div>
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
        Door deze categorie te verwijderen, verwijder je ook de desbetreffende
        producten. Dit kan niet meer ongedaan worden.
      </Modal>
    </StyledMenuItem>
  );
};
