import Button from "./Button/Button";
const DownloadCv = () => {
  const handleDownloader = () => {
    const file = "../../assets/esmael.pdf";
    const link = document.createElement("a");
    link.href = file;
    link.download = "Esmael_Abdlkadr.pdf";
    link.click();
  };
  return (
    <div>
      <Button onClick={handleDownloader} />
    </div>
  );
};

export default DownloadCv;
