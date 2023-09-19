import { IconButton, Typography } from "@mui/material";
import { AddOutlined, MailOutline } from "@mui/icons-material";
import { JournalLayout } from "journal/layout/JournalLayout";
import { NoteView, NothingSelectedView } from "journal/views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Nulla duis ad in occaecat proident officia ipsum sit exercitation
        commodo. Incididunt excepteur excepteur cupidatat veniam deserunt in et
        irure. Duis fugiat aliqua laborum fugiat eu Lorem elit veniam laboris.
        Sunt aute ea dolor elit sint Lorem ea cupidatat amet pariatur consequat
        id veniam.
      </Typography> */}

      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": {
            backgroundColor: "error.main",
            opacity: 0.9,
          },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
