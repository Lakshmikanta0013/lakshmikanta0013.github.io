import Button from './Button';

const downloadFile = () => {
  const element = document.createElement('a');
  element.href = '/Lakshmikanta.pdf';
  element.download = 'Lakshmikanta.pdf';
  document.body.appendChild(element);
  element.click();
};

const CVDownloadButton = ({
  buttonType,
}: {
  buttonType?: 'secondary' | 'inverted' | undefined;
}) => {
  return (
    <Button onClick={downloadFile} buttonType={buttonType}>
      Download CV
    </Button>
  );
};

export default CVDownloadButton;
