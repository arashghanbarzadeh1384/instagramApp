import * as React from "react";
import clsx from "clsx";
import { styled, css } from "@mui/system";
import { Modal as BaseModal } from "@mui/base/Modal";
import FromCreatePosts from "../Form/CreatePostForm/FromCreatePosts";

export default function CustomModal({ showPopup, setShowPopup }) {
  const [open, setOpen] = React.useState(showPopup);

  React.useEffect(() => {
    setOpen(showPopup);
  }, [showPopup]);

  const handleClose = () => {
    setOpen(false);
    setShowPopup(false);
  };

  return (
    <StyledModal
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      open={open}
      onClose={handleClose}
      slots={{ backdrop: StyledBackdrop }}>
      <ModalContent>
        <Header>
          <Title>Create new post</Title>
          <CloseButton onClick={handleClose}>&times;</CloseButton>
        </Header>
        <FromCreatePosts />
      </ModalContent>
    </StyledModal>
  );
}

const StyledModal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(
  React.forwardRef(({ open, className, ...other }, ref) => (
    <div
      className={clsx({ "base-Backdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  ))
)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4); /* بک‌دراپ نیمه‌شفاف مثل اینستاگرام */
  -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled("div")(
  ({ theme }) => css`
    width: 400px;
    background-color: white; /* زمینه روشن */
    border-radius: 14px; /* گوشه‌های گرد */
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2); /* سایه نرم */
    display: flex;
    flex-direction: column;
    padding: 16px 16px 24px 16px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  `
);

const Header = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 12px;
  border-bottom: 1px solid #ddd;
`;

const Title = styled("h2")`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #262626; /* رنگ متن مثل اینستاگرام */
`;

const CloseButton = styled("button")`
  background: none;
  border: none;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  color: #262626;
  padding: 0;
  margin: 0;
  transition: color 0.2s;

  &:hover {
    color: #999;
  }
`;
