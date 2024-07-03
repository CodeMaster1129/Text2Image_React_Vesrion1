import axios from "axios";
import { useGenerateImageStore } from "../store";

export const useGenerateImageActions = () => {
    const { setGeneratedImages, setLoading } = useGenerateImageStore();

    const getAllGeneratedImages = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`http://170.130.55.64:8000/api/generated_images/`);
            setGeneratedImages(res.data.images);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const generateImage = async (description, style, size, count) => {
        setLoading(true);
        console.log(description, style, size, count)
        try {
            const res = await axios.post(`http://170.130.55.64:8000/api/generate_image/`, {
                description,
                style,
                size,
                count,
            });
            // const res = await axios.post(`${process.env.REACT_APP_API_URL}/generate_image/`, {
            //     description,
            //     style,
            //     size,
            //     count,
            // });
            if (res.status === 200) {
                await getAllGeneratedImages();
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return { getAllGeneratedImages, generateImage };
};
