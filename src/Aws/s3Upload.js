import s3 from "./s3Config";

export async function uploadFiletoS3(file) {
  const fileName = file.name;
  const fileType = file.type;

  const params = {
    Bucket: "carrot-clone-s3",
    Key: fileName,
    ContentType: fileType,
    Body: file,
  };

  try {
    const data = await s3.upload(params).promise();
    console.log("File uploaded successfully:", data.Location);
    return data.Location;
  } catch (error) {
    console.error("File upload failed:", error);
    throw error;
  }
}
