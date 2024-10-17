// import JSZip from "jszip";
// import fs from "fs-extra"; // fs-extra supports promises

export async function POST(request: Request): Promise<Response> {
  console.log("request: ", request);

  //   try {
  //     // Read the EPUB file as a binary
  //     const data = await fs.readFile(epubFilePath);

  //     const zip = await JSZip.loadAsync(data);

  //     // Find and modify CSS files
  //     await zip.forEach(async (relativePath, file) => {
  //       if (relativePath.endsWith(".css")) {
  //         const cssContent = await file.async("text");
  //         const modifiedCSS = cssContent
  //           .replace(/text-align:\s*justify;/g, "text-align:left;")
  //           .replace(/text-align:\s*center;/g, "text-align:left;");

  //         zip.file(relativePath, modifiedCSS);
  //       }
  //     });
  //     const newEpub = await zip.generateAsync({ type: "nodebuffer" });
  //     await fs.writeFileSync("new_book.epub", newEpub);
  //     console.log("Text alignment modified and new EPUB saved!");
  //   } catch (error) {
  //     console.error("Error modifying EPUB:", error);
  //   }

  return new Response(`Hello from the TEST API`);
}
