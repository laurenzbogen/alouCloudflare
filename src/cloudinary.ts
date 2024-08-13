import cloudinaryLib from 'cloudinary'

const cloudinary = cloudinaryLib.v2

cloudinary.config({
	cloud_name: import.meta.env.PUBLIC_CLOUDINARY_NAME,
	api_key: import.meta.env.CLOUDINARY_KEY,
	api_secret: import.meta.env.CLOUDINARY_SECRET,
})

export default cloudinary
