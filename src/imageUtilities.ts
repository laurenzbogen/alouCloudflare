import { Cloudinary } from "@cloudinary/url-gen";
import { Resize } from "@cloudinary/url-gen/actions/resize";
const cld = new Cloudinary({
	cloud: {
		cloudName: import.meta.env.PUBLIC_CLOUDINARY_NAME,
	},
	url: {
		secure: true, // force https, set to false to force http
	},
});

type Size = "sm" | "md" | "lg" | "xl" | "xl"
export type ImageSizes = [[Size, string][], string]

export const twSizes = {
	"xs": 320,
	"sm": 640,
	"md": 768,
	"lg": 1024,
	"xl": 1280,
	"2xl": 1536,
}
export function getSizes(imageSizes: ImageSizes | undefined): string {
	if (imageSizes === undefined) return "100vw"
	const [sizes, fallback] = imageSizes
	const string = sizes.reduce((acc, [a, b]) => (
		`${acc}(min-width:${twSizes[a]}px) ${b},\n`
	), "")
	return string + fallback
}

type SourceGen = {
	id: string,
	widths?: number[],
	cropRatio?: number
}

export function getCldSourcset(sourceGen: SourceGen): string {
	const { id, cropRatio } = sourceGen;
	const widths = sourceGen.widths === undefined ? Object.values(twSizes) : sourceGen.widths;
	const imgs = widths.map(_ => get_cloudinary_image(id));
	const srcs = [];
	for (let i = 0; i < widths.length; i++) {
		const img = imgs[i];
		const size = widths[i];
		const cropped = cropRatio !== undefined ? img.resize(Resize.crop().aspectRatio(cropRatio)) : img;
		const scaledURL = cropped.resize(Resize.scale().width(size)).toURL();
		srcs[i] = `${scaledURL} ${widths[i]}w,`
	}
	const srcset = srcs.join("\n")
	return srcset
}



function get_cloudinary_image(id: string) {
	const img = cld.image(id);
	img.quality("auto");
	img.format("auto");
	return img;
}
