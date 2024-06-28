// custom.d.ts

// Declare module for PNG files
declare module '*.png' {
	const value: string;  // This can be any type that fits your use case
	export default value;
}

// Declare module for JPG/JPEG files
declare module '*.jpg' {
	const value: string;
	export default value;
}

// Declare module for SVG files
declare module '*.svg' {
	const value: string;
	export default value;
}

// Add declarations for other file types as needed (e.g., *.gif, *.ico, etc.)
