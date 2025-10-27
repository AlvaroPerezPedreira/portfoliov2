import { Box, Button, DownloadTrigger, Heading, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";

export default function Profile() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  useEffect(() => {
    fetch("/CV.pdf")
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], "CV - AlvaroPerezPedreira.pdf", {
          type: "application/pdf",
        });
        setPdfFile(file);
      })
      .catch((err) => console.error("Error cargando PDF:", err));
  }, []);

  if (!pdfFile) return <></>;

  return (
    <Stack textAlign="left" mb="4">
      <Heading mb="4" textStyle="2xl" color="blue.500">
        Álvaro Pérez Pedreira
      </Heading>
      <Box alignSelf="center">
        <DownloadTrigger
          data={pdfFile}
          fileName="CV - AlvaroPerezPedreira.pdf"
          mimeType="application/pdf"
          asChild
        >
          <Button variant="outline">
            <AiOutlineDownload />
            Curriculum Vitae
          </Button>
        </DownloadTrigger>
      </Box>
    </Stack>
  );
}
