import {
  Grid,
  Modal,
  Container,
  hideModal,
  FormElementWrapper,
  Toggle,
  SIZE_MEDIUM,
  SECONDARY_BUTTON,
  SIZE_SMALL,
  Button,
  PRIMARY_BUTTON,
  Input,
} from "@mds/mds-reactjs-library";
import styled from "@emotion/styled";
import React, { useState } from "react";
import FieldLine from "../../field-line/FieldLine";
import Outline64User from "@mds/mds-icons/icons/svg/outline-64-users-mm.svg";
import Outline64Zoom from "@mds/mds-icons/icons/svg/outline-64-zoom.svg";
import Outline64ShoppingTag from "@mds/mds-icons/icons/svg/outline-64-shopping-tag.svg";

import "./EditHRModal.scss";

const EditHRModal = () => {
  const DIV = styled.div`
     {
      display: flex;
      justify-content: space-between;
    }
  `;

  const handleClose = () => {
    hideModal("edithr");
  };
  return (
    <>
      <Modal style={{ width: "auto", padding: "20px" }} onClose={handleClose}>
        <div>
          <h3>Add Member HR Team</h3>
        </div>
        <DIV>
          <div style={{ width: "404px" }}>
            <FieldLine
              label="Member"
              icon={Outline64User}
              iconTwo={Outline64Zoom}
            >
              <Input placeholder="Member" />
            </FieldLine>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <FieldLine label="Director">
              <Toggle style={{ paddingTop: "10px" }} />
            </FieldLine>
          </div>
        </DIV>

        <div>
          <FieldLine label="Functions" icon={Outline64ShoppingTag}>
            <Input placeholder="Functions" style={{ height: "329px" }} />
          </FieldLine>
        </div>

        <div>
          <FieldLine label="Add Functions">
            <Input placeholder="Add Functions" />
          </FieldLine>
        </div>

        <DIV>
          <div style={{ width: "340px" }}>
            <FieldLine>
              <Input placeholder="Link (optional)" />
            </FieldLine>
          </div>
          <div>
            <Button appearance={PRIMARY_BUTTON}>Add Functions</Button>
          </div>
        </DIV>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            appearance={SECONDARY_BUTTON}
            size={SIZE_SMALL}
            onClick={() => handleClose()}
          >
            Cancel
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button appearance={PRIMARY_BUTTON} size={SIZE_SMALL}>
            Save
          </Button>
        </div>
      </Modal>
    </>
  );
};
export default EditHRModal;
