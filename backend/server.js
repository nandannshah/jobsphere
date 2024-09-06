import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API||"234563516551266",
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET||"gH-n6oDb3BarSkj5bW_vlNtDr0k",
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
