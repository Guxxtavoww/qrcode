import * as qrcode from 'qrcode';

const generateQRCode = async (
  qrCodeContent: string,
  filePath: string
): Promise<void> => {
  try {
    await qrcode
      .toFile(filePath, qrCodeContent, {
        scale: 10,
      })
      .then(() => console.log('Gerado com sucesso'))
      .catch((err) => {
        throw err;
      });
  } catch (err) {
    console.error(err);
  }
};

generateQRCode('https://www.google.com', 'qr.png');
