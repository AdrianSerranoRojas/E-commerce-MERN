import cloudinary from "cloudinary";
// datos de la cuenta de cloudinary
cloudinary.config({ 
    cloud_name: 'dacibwste', 
    api_key: '277794864113632', 
    api_secret: '1oem3DS2s4ROE0b8IqtVA581f1A' 
  });
export const uploadImageCloud = async (filePath) => {
  return await cloudinary.v2.uploader.upload(filePath, {
    folder: "Products",
  });
};
// es el nombre de la carpeta de cloudinary no tiene que ver con el nombre de la base de datos de mongo, que se llaman igual
export const deleteImageCloud = async (id) => {
  return await cloudinary.v2.uploader.destroy(id);
};