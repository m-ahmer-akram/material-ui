import {
  Fab,
  Modal,
  Tooltip,
  styled,
  Typography,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import {
  Add as AddIcon,
  EmojiEmotionsRounded,
  VideoCallRounded,
  PersonAddAlt1Rounded,
  InsertPhotoRounded,
  DateRangeRounded,
} from "@mui/icons-material";
import React, { useState } from "react";
import { Box } from "@mui/system";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 10,
          left: { xs: "calc(50% - 25px)", md: 10 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={300}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              alt="John Doe"
              src="https://quotepark.com/media/authors/dwayne-johnson.jpeg"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={2}>
            <EmojiEmotionsRounded color="primary" />
            <InsertPhotoRounded color="error" />
            <VideoCallRounded color="secondary" />
            <PersonAddAlt1Rounded color="success" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRangeRounded />
            </Button>
          </ButtonGroup>
          <Typography mt={2}>
            <Button
              variant="outlined"
              color="error"
              onClick={(e) => setOpen(false)}
            >
              Close
            </Button>
          </Typography>
        </Box>
      </StyledModal>
    </React.Fragment>
  );
};

export default Add;
