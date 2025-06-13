export interface IApod {
    url: string; // URL of the image or video
    title: string; // Title of the APOD
    date: string; // Date of the APOD in YYYY-MM-DD format
    explanation?: string; // Optional explanation of the APOD
    media_type?: 'image' | 'video'; // Type of media (image or video)
    hdurl?: string; // Optional high-definition URL of the image or video
}