const CdnUpload = async (file: File): Promise<string> => {

    if (!file) {
        throw new Error("No file provided.");
    }

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("https://cdn.hackclub.com/api/v4/upload", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.CDN_API_KEY}`,
        },
        body: formData
    });

    if (!response.ok) {
        throw new Error("Failed to upload file to CDN.");
    }

    const data = await response.json();
    return data;
    
}

export default CdnUpload;